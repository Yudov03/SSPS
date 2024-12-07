const Location = require('./Location');
const Building = require('./Building');
const Room = require('./Room');
const Printer = require('./Printer');

// Create a location
const mainCampus = new Location('Main Campus');

// Create buildings
const buildingA = new Building('Building A', mainCampus);
const buildingB = new Building('Building B', mainCampus);

// Create rooms
const R101 = new Room('101', buildingA);
const R102 = new Room('102', buildingA);
const R201 = new Room('201', buildingB);
const R202 = new Room('202', buildingB);

// Add rooms to buildings
buildingA.addRoom(R101);
buildingA.addRoom(R102);
buildingB.addRoom(R201);
buildingB.addRoom(R202);

// Add buildings to location
mainCampus.addBuilding(buildingA);
mainCampus.addBuilding(buildingB);

// Create a printer located in the Main Campus
const printer1 = new Printer('P001', 'HP LaserJet 1010', 'HP', mainCampus, buildingA, R101, true, false);
const printer2 = new Printer('P002', 'HP Superman', 'AP', mainCampus, buildingB, R202, false, true);

// Get printer details, including its location with buildings and rooms
console.log(printer2.getDetails());
