const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DB_DATABASENAME , process.env.DB_USERNAME, process.env.DB_PASSWORD, {host: process.env.DB_HOST, dialect: 'postgres', underscored: true});

const User = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  email: Sequelize.STRING,
  password: Sequelize.STRING,
  facebookID: Sequelize.STRING
});

const AnimalList = sequelize.define('animalList', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: true
  }
});
    
const Animal = sequelize.define('animal', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  petFinderid: {type: Sequelize.STRING, unique: true},
  dogTinderDB: Sequelize.BOOLEAN,
  name: Sequelize.STRING,
  photo: Sequelize.STRING,
  animal: Sequelize.STRING,
  age: Sequelize.STRING,
  sex: Sequelize.STRING,
  size: Sequelize.STRING,
  mix: Sequelize.STRING,
  description: Sequelize.TEXT,
  address1: Sequelize.STRING,
  address2: Sequelize.STRING,
  city: Sequelize.STRING,
  state: Sequelize.STRING,
  zip: Sequelize.STRING,
  email: Sequelize.STRING,
  phone: Sequelize.STRING
});

const Shelter = sequelize.define('shelter', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  address: Sequelize.STRING,
  phone: Sequelize.STRING,
  name: Sequelize.STRING,
  zip: Sequelize.INTEGER
});

const Breed = sequelize.define('breed', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  breed: Sequelize.STRING  
});

AnimalList.belongsTo(User);

AnimalList.belongsToMany(Animal, {through: 'AnimalList_Animal'});
Animal.belongsToMany(AnimalList, {through: 'AnimalList_Animal'});

Animal.belongsTo(Shelter);

Animal.belongsToMany(Breed, {through: 'Animal_Breeds'});
Breed.belongsToMany(Animal, {through: 'Animal_Breeds'});

// sequelize.sync();

exports.sequelize = sequelize;
exports.User = User;
exports.AnimalList = AnimalList;
exports.Animal = Animal;
exports.Shelter = Shelter;
exports.Breed = Breed;

// let breeds = {
//   "@encoding": "iso-8859-1",
//   "@version": "1.0",
//   "petfinder": {
//     "@xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
//     "breeds": {
//       "breed": [
//         {
//           "$t": "Affenpinscher"
//         },
//         {
//           "$t": "Afghan Hound"
//         },
//         {
//           "$t": "Airedale Terrier"
//         },
//         {
//           "$t": "Akbash"
//         },
//         {
//           "$t": "Akita"
//         },
//         {
//           "$t": "Alaskan Malamute"
//         },
//         {
//           "$t": "American Bulldog"
//         },
//         {
//           "$t": "American Eskimo Dog"
//         },
//         {
//           "$t": "American Hairless Terrier"
//         },
//         {
//           "$t": "American Staffordshire Terrier"
//         },
//         {
//           "$t": "American Water Spaniel"
//         },
//         {
//           "$t": "Anatolian Shepherd"
//         },
//         {
//           "$t": "Appenzell Mountain Dog"
//         },
//         {
//           "$t": "Australian Cattle Dog (Blue Heeler)"
//         },
//         {
//           "$t": "Australian Kelpie"
//         },
//         {
//           "$t": "Australian Shepherd"
//         },
//         {
//           "$t": "Australian Terrier"
//         },
//         {
//           "$t": "Basenji"
//         },
//         {
//           "$t": "Basset Hound"
//         },
//         {
//           "$t": "Beagle"
//         },
//         {
//           "$t": "Bearded Collie"
//         },
//         {
//           "$t": "Beauceron"
//         },
//         {
//           "$t": "Bedlington Terrier"
//         },
//         {
//           "$t": "Belgian Shepherd Dog Sheepdog"
//         },
//         {
//           "$t": "Belgian Shepherd Laekenois"
//         },
//         {
//           "$t": "Belgian Shepherd Malinois"
//         },
//         {
//           "$t": "Belgian Shepherd Tervuren"
//         },
//         {
//           "$t": "Bernese Mountain Dog"
//         },
//         {
//           "$t": "Bichon Frise"
//         },
//         {
//           "$t": "Black and Tan Coonhound"
//         },
//         {
//           "$t": "Black Labrador Retriever"
//         },
//         {
//           "$t": "Black Mouth Cur"
//         },
//         {
//           "$t": "Black Russian Terrier"
//         },
//         {
//           "$t": "Bloodhound"
//         },
//         {
//           "$t": "Blue Lacy"
//         },
//         {
//           "$t": "Bluetick Coonhound"
//         },
//         {
//           "$t": "Boerboel"
//         },
//         {
//           "$t": "Bolognese"
//         },
//         {
//           "$t": "Border Collie"
//         },
//         {
//           "$t": "Border Terrier"
//         },
//         {
//           "$t": "Borzoi"
//         },
//         {
//           "$t": "Boston Terrier"
//         },
//         {
//           "$t": "Bouvier des Flanders"
//         },
//         {
//           "$t": "Boxer"
//         },
//         {
//           "$t": "Boykin Spaniel"
//         },
//         {
//           "$t": "Briard"
//         },
//         {
//           "$t": "Brittany Spaniel"
//         },
//         {
//           "$t": "Brussels Griffon"
//         },
//         {
//           "$t": "Bull Terrier"
//         },
//         {
//           "$t": "Bullmastiff"
//         },
//         {
//           "$t": "Cairn Terrier"
//         },
//         {
//           "$t": "Canaan Dog"
//         },
//         {
//           "$t": "Cane Corso Mastiff"
//         },
//         {
//           "$t": "Carolina Dog"
//         },
//         {
//           "$t": "Catahoula Leopard Dog"
//         },
//         {
//           "$t": "Cattle Dog"
//         },
//         {
//           "$t": "Caucasian Sheepdog (Caucasian Ovtcharka)"
//         },
//         {
//           "$t": "Cavalier King Charles Spaniel"
//         },
//         {
//           "$t": "Chesapeake Bay Retriever"
//         },
//         {
//           "$t": "Chihuahua"
//         },
//         {
//           "$t": "Chinese Crested Dog"
//         },
//         {
//           "$t": "Chinese Foo Dog"
//         },
//         {
//           "$t": "Chinook"
//         },
//         {
//           "$t": "Chocolate Labrador Retriever"
//         },
//         {
//           "$t": "Chow Chow"
//         },
//         {
//           "$t": "Cirneco dell Etna"
//         },
//         {
//           "$t": "Clumber Spaniel"
//         },
//         {
//           "$t": "Cockapoo"
//         },
//         {
//           "$t": "Cocker Spaniel"
//         },
//         {
//           "$t": "Collie"
//         },
//         {
//           "$t": "Coonhound"
//         },
//         {
//           "$t": "Corgi"
//         },
//         {
//           "$t": "Coton de Tulear"
//         },
//         {
//           "$t": "Curly-Coated Retriever"
//         },
//         {
//           "$t": "Dachshund"
//         },
//         {
//           "$t": "Dalmatian"
//         },
//         {
//           "$t": "Dandi Dinmont Terrier"
//         },
//         {
//           "$t": "Doberman Pinscher"
//         },
//         {
//           "$t": "Dogo Argentino"
//         },
//         {
//           "$t": "Dogue de Bordeaux"
//         },
//         {
//           "$t": "Dutch Shepherd"
//         },
//         {
//           "$t": "English Bulldog"
//         },
//         {
//           "$t": "English Cocker Spaniel"
//         },
//         {
//           "$t": "English Coonhound"
//         },
//         {
//           "$t": "English Pointer"
//         },
//         {
//           "$t": "English Setter"
//         },
//         {
//           "$t": "English Shepherd"
//         },
//         {
//           "$t": "English Springer Spaniel"
//         },
//         {
//           "$t": "English Toy Spaniel"
//         },
//         {
//           "$t": "Entlebucher"
//         },
//         {
//           "$t": "Eskimo Dog"
//         },
//         {
//           "$t": "Feist"
//         },
//         {
//           "$t": "Field Spaniel"
//         },
//         {
//           "$t": "Fila Brasileiro"
//         },
//         {
//           "$t": "Finnish Lapphund"
//         },
//         {
//           "$t": "Finnish Spitz"
//         },
//         {
//           "$t": "Flat-coated Retriever"
//         },
//         {
//           "$t": "Fox Terrier"
//         },
//         {
//           "$t": "Foxhound"
//         },
//         {
//           "$t": "French Bulldog"
//         },
//         {
//           "$t": "Galgo Spanish Greyhound"
//         },
//         {
//           "$t": "German Pinscher"
//         },
//         {
//           "$t": "German Shepherd Dog"
//         },
//         {
//           "$t": "German Shorthaired Pointer"
//         },
//         {
//           "$t": "German Spitz"
//         },
//         {
//           "$t": "German Wirehaired Pointer"
//         },
//         {
//           "$t": "Giant Schnauzer"
//         },
//         {
//           "$t": "Glen of Imaal Terrier"
//         },
//         {
//           "$t": "Golden Retriever"
//         },
//         {
//           "$t": "Gordon Setter"
//         },
//         {
//           "$t": "Great Dane"
//         },
//         {
//           "$t": "Great Pyrenees"
//         },
//         {
//           "$t": "Greater Swiss Mountain Dog"
//         },
//         {
//           "$t": "Greyhound"
//         },
//         {
//           "$t": "Hamiltonstovare"
//         },
//         {
//           "$t": "Harrier"
//         },
//         {
//           "$t": "Havanese"
//         },
//         {
//           "$t": "Hound"
//         },
//         {
//           "$t": "Hovawart"
//         },
//         {
//           "$t": "Husky"
//         },
//         {
//           "$t": "Ibizan Hound"
//         },
//         {
//           "$t": "Icelandic Sheepdog"
//         },
//         {
//           "$t": "Illyrian Sheepdog"
//         },
//         {
//           "$t": "Irish Setter"
//         },
//         {
//           "$t": "Irish Terrier"
//         },
//         {
//           "$t": "Irish Water Spaniel"
//         },
//         {
//           "$t": "Irish Wolfhound"
//         },
//         {
//           "$t": "Italian Greyhound"
//         },
//         {
//           "$t": "Italian Spinone"
//         },
//         {
//           "$t": "Jack Russell Terrier"
//         },
//         {
//           "$t": "Jack Russell Terrier (Parson Russell Terrier)"
//         },
//         {
//           "$t": "Japanese Chin"
//         },
//         {
//           "$t": "Jindo"
//         },
//         {
//           "$t": "Kai Dog"
//         },
//         {
//           "$t": "Karelian Bear Dog"
//         },
//         {
//           "$t": "Keeshond"
//         },
//         {
//           "$t": "Kerry Blue Terrier"
//         },
//         {
//           "$t": "Kishu"
//         },
//         {
//           "$t": "Klee Kai"
//         },
//         {
//           "$t": "Komondor"
//         },
//         {
//           "$t": "Kuvasz"
//         },
//         {
//           "$t": "Kyi Leo"
//         },
//         {
//           "$t": "Labrador Retriever"
//         },
//         {
//           "$t": "Lakeland Terrier"
//         },
//         {
//           "$t": "Lancashire Heeler"
//         },
//         {
//           "$t": "Leonberger"
//         },
//         {
//           "$t": "Lhasa Apso"
//         },
//         {
//           "$t": "Lowchen"
//         },
//         {
//           "$t": "Maltese"
//         },
//         {
//           "$t": "Manchester Terrier"
//         },
//         {
//           "$t": "Maremma Sheepdog"
//         },
//         {
//           "$t": "Mastiff"
//         },
//         {
//           "$t": "McNab"
//         },
//         {
//           "$t": "Miniature Pinscher"
//         },
//         {
//           "$t": "Miniature Schnauzer"
//         },
//         {
//           "$t": "Mixed Breed"
//         },
//         {
//           "$t": "Mountain Cur"
//         },
//         {
//           "$t": "Mountain Dog"
//         },
//         {
//           "$t": "Munsterlander"
//         },
//         {
//           "$t": "Neapolitan Mastiff"
//         },
//         {
//           "$t": "New Guinea Singing Dog"
//         },
//         {
//           "$t": "Newfoundland Dog"
//         },
//         {
//           "$t": "Norfolk Terrier"
//         },
//         {
//           "$t": "Norwegian Buhund"
//         },
//         {
//           "$t": "Norwegian Elkhound"
//         },
//         {
//           "$t": "Norwegian Lundehund"
//         },
//         {
//           "$t": "Norwich Terrier"
//         },
//         {
//           "$t": "Nova Scotia Duck-Tolling Retriever"
//         },
//         {
//           "$t": "Old English Sheepdog"
//         },
//         {
//           "$t": "Otterhound"
//         },
//         {
//           "$t": "Papillon"
//         },
//         {
//           "$t": "Patterdale Terrier (Fell Terrier)"
//         },
//         {
//           "$t": "Pekingese"
//         },
//         {
//           "$t": "Peruvian Inca Orchid"
//         },
//         {
//           "$t": "Petit Basset Griffon Vendeen"
//         },
//         {
//           "$t": "Pharaoh Hound"
//         },
//         {
//           "$t": "Pit Bull Terrier"
//         },
//         {
//           "$t": "Plott Hound"
//         },
//         {
//           "$t": "Podengo Portugueso"
//         },
//         {
//           "$t": "Pointer"
//         },
//         {
//           "$t": "Polish Lowland Sheepdog"
//         },
//         {
//           "$t": "Pomeranian"
//         },
//         {
//           "$t": "Poodle"
//         },
//         {
//           "$t": "Portuguese Water Dog"
//         },
//         {
//           "$t": "Presa Canario"
//         },
//         {
//           "$t": "Pug"
//         },
//         {
//           "$t": "Puli"
//         },
//         {
//           "$t": "Pumi"
//         },
//         {
//           "$t": "Rat Terrier"
//         },
//         {
//           "$t": "Redbone Coonhound"
//         },
//         {
//           "$t": "Retriever"
//         },
//         {
//           "$t": "Rhodesian Ridgeback"
//         },
//         {
//           "$t": "Rottweiler"
//         },
//         {
//           "$t": "Rough Collie"
//         },
//         {
//           "$t": "Saint Bernard St. Bernard"
//         },
//         {
//           "$t": "Saluki"
//         },
//         {
//           "$t": "Samoyed"
//         },
//         {
//           "$t": "Sarplaninac"
//         },
//         {
//           "$t": "Schipperke"
//         },
//         {
//           "$t": "Schnauzer"
//         },
//         {
//           "$t": "Scottish Deerhound"
//         },
//         {
//           "$t": "Scottish Terrier Scottie"
//         },
//         {
//           "$t": "Sealyham Terrier"
//         },
//         {
//           "$t": "Setter"
//         },
//         {
//           "$t": "Shar Pei"
//         },
//         {
//           "$t": "Sheep Dog"
//         },
//         {
//           "$t": "Shepherd"
//         },
//         {
//           "$t": "Shetland Sheepdog Sheltie"
//         },
//         {
//           "$t": "Shiba Inu"
//         },
//         {
//           "$t": "Shih Tzu"
//         },
//         {
//           "$t": "Siberian Husky"
//         },
//         {
//           "$t": "Silky Terrier"
//         },
//         {
//           "$t": "Skye Terrier"
//         },
//         {
//           "$t": "Sloughi"
//         },
//         {
//           "$t": "Smooth Collie"
//         },
//         {
//           "$t": "Smooth Fox Terrier"
//         },
//         {
//           "$t": "South Russian Ovtcharka"
//         },
//         {
//           "$t": "Spaniel"
//         },
//         {
//           "$t": "Spanish Water Dog"
//         },
//         {
//           "$t": "Spitz"
//         },
//         {
//           "$t": "Staffordshire Bull Terrier"
//         },
//         {
//           "$t": "Standard Poodle"
//         },
//         {
//           "$t": "Standard Schnauzer"
//         },
//         {
//           "$t": "Sussex Spaniel"
//         },
//         {
//           "$t": "Swedish Vallhund"
//         },
//         {
//           "$t": "Terrier"
//         },
//         {
//           "$t": "Thai Ridgeback"
//         },
//         {
//           "$t": "Tibetan Mastiff"
//         },
//         {
//           "$t": "Tibetan Spaniel"
//         },
//         {
//           "$t": "Tibetan Terrier"
//         },
//         {
//           "$t": "Tosa Inu"
//         },
//         {
//           "$t": "Toy Fox Terrier"
//         },
//         {
//           "$t": "Treeing Walker Coonhound"
//         },
//         {
//           "$t": "Vizsla"
//         },
//         {
//           "$t": "Weimaraner"
//         },
//         {
//           "$t": "Welsh Corgi"
//         },
//         {
//           "$t": "Welsh Springer Spaniel"
//         },
//         {
//           "$t": "Welsh Terrier"
//         },
//         {
//           "$t": "West Highland White Terrier Westie"
//         },
//         {
//           "$t": "Wheaten Terrier"
//         },
//         {
//           "$t": "Whippet"
//         },
//         {
//           "$t": "White German Shepherd"
//         },
//         {
//           "$t": "Wire Fox Terrier"
//         },
//         {
//           "$t": "Wire-haired Pointing Griffon"
//         },
//         {
//           "$t": "Wirehaired Dachshund"
//         },
//         {
//           "$t": "Wirehaired Terrier"
//         },
//         {
//           "$t": "Xoloitzcuintle (Mexican Hairless)"
//         },
//         {
//           "$t": "Yellow Labrador Retriever"
//         },
//         {
//           "$t": "Yorkshire Terrier Yorkie"
//         }
//       ],
//       "@animal": "dog"
//     },
//     "header": {
//       "timestamp": {
//         "$t": "2017-05-02T16:35:22Z"
//       },
//       "status": {
//         "message": {},
//         "code": {
//           "$t": "100"
//         }
//       },
//       "version": {
//         "$t": "0.1"
//       }
//     },
//     "@xsi:noNamespaceSchemaLocation": "http://api.petfinder.com/schemas/0.9/petfinder.xsd"
//   }
// }

// let startString = 'INSERT INTO breeds (breed, "updatedAt", "createdAt") VALUES '
// let midString = "('"
// let finalString = "', 'now', 'now');"

// const createQueryString = (breeds) => {
//   return breeds.petfinder.breeds.breed.map(breed => startString + midString + breed["$t"] + finalString)
// }

// let breedStrings = createQueryString(breeds)

// const addToDatabase = (arr) => {
//   arr.forEach((breed) => {
//     sequelize.query(breed);
//   });
// }

// addToDatabase(breedStrings);




