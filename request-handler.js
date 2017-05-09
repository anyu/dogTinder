var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var petFinderFetch = require('./utils/petfinderHelper');
var request = require('request');
var passport = require('./utils/fbPassportHelper');
var session = require('express-session');
var dbUtils = require('./db/dbUtils');
var Cookies = require('universal-cookie'); 

var app = express();

app.use(express.static('./public'));
app.use(bodyParser.json());

app.use(session({ secret: process.env.SESSION_SECRET, saveUninitialized: true, resave: true, name: 'dogbiscuit' }));
// set up passport for FB Auth on Express
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (request, response) => {
  if(request.session.user) {
    console.log(request.session.user.displayName + ' is logged in with FB ID: ' + request.session.user.id)
    dbUtils.fetchUserAnimals({facebookID: request.session.user.id}, (results) => {
      console.log('userAnimals: ', results);
    })
  }
  response.sendFile(path.resolve(__dirname, "./public/_index.html"));
});

// signup/login
app.get('/auth/facebook',
  passport.authenticate('facebook', { successRedirect: '/', failureRedirect: '/login'}));

app.get('/login', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public/login.html'));
});

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  (req, res) => {
    // Successful authentication, redirect home.
    req.session.user = req.user;
    // find or add user
    // user id is req.user.id
    // user's name is req.user.displayName
    // res.send(req.user);
    res.redirect('/');
    
  });

app.get('/dog-tinder-api/list', (req, res) => {

  // res.send(201);
  const cookies = new Cookies(req.headers.cookie);
  var userAnimalList = cookies.get('animalList');
  // let facebookID = req.session.user.id;

  // dbUtils.fetchUserAnimals({facebookID: facebookID}, (results) => {
  //   console.log('user dogs: ', results);
  //   petFinderFetch.fetchUsersAnimals(results, (dogs) => {
  //     console.log(dogs)
  //   })
  // })

  petFinderFetch.getList(userAnimalList, function(results) {
    console.log("FINAL FETCH FOR ALL LIST:", results);
    res.send(results);
  });

});

app.post('/dog-tinder-api/list', (req, res) => {
  // this route gets an array of dogs from the user's dog-list

  // make animalObjArr
  let animalObjArr = req.body.map((id) => {
    if (!isNaN(parseInt(id[0]))) {
      return {petFinderid: id}
    } else {
      // this is a dogTinder dog
        // functionality not built out
    }
  });
  res.send(201);
  // let facebookID = req.user.id;

  // dbUtils.doesUserHaveList(facebookID, (bool) => {
  //   if (bool) {
  //     dbUtils.updateUserList({facebookID: facebookID}, animalObjArr, () => {
  //       res.send(201);
  //     })
  //   } else {
  //     dbUtils.saveUserList([null, null, facebookID], animalObjArr, () => {
  //       res.send(201);
  //     })
  //   }
  // })
  // console.log('req.user: ', req.user);
  /* THIS IS WHAT THE USER OBJECT LOOKS LIKE
  { id: '10158574996565052',
  displayName: 'Scott Moschella',
  name: {},
  provider: 'facebook',
  _raw: '{"name":"Scott Moschella","id":"10158574996565052"}',
  _json: { name: 'Scott Moschella', id: '10158574996565052' } }
*/
  // user will come in as req.user
  // console.log(req.body)
//  [ 36649333, 36056073, 37403092, 37609758 ]
  // find user in DB, save the animals from req.body into
  // the user's list
});

app.get('/dog-tinder-api', (req, res) => {
  // connect to API and get matching dogs
  petFinderFetch.fetchAnimals(req.query, function(animals){
    // get animals from DB here and append them to these 'animals'
    res.send(animals);
  })

})


module.exports = app;