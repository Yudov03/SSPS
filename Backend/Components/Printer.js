class Printer {
  constructor(id, model, manufacture, location, building, room, colorPrinting, availabilityStatus) {
    this._id = id;      
    this._model = model;    
    this._manufacture = manufacture;
    this._location = location;
    this._building = building;
    this._room = room;
    this._colorPrinting = colorPrinting;
    this._availabilityStatus = availabilityStatus;
  }

  // ID
  get id() {
    return this._id;
  }
  set id(value) {
    this._id = value;
  }

  // Model
  get model() {
    return this._model;
  }
  set model(value) {
    this._model = value;
  }

  // Manufacture
  get manufacture() {
    return this._manufacture;
  }
  set manufacture(value) {
    this._manufacture = value;
  }

  // Location
  get location() {
    return this._location;
  }
  set location(value) {
    this._location = value;
  }

  // Building
  get building() {
    return this._building;
  }
  set building(value) {
    this._building = value;
  }

  // Room
  get room() {
    return this._room;
  }
  set room(value) {
    this._room = value;
  }

  // Color Printing Support
  get colorPrinting() {
    return this._colorPrinting;
  }
  set colorPrinting(value) {
    this._colorPrinting = value;
  }

  // Availability Status
  get availabilityStatus() {
    return this._availabilityStatus;
  }
  set availabilityStatus(value) {
    this._availabilityStatus = value;
  }

  getDetails() {
    return {
      id: this._id,
      model: this._model,
      manufacture: this._manufacture,
      location: this._location.location,
      building: this._building.building,
      room: this._room.room,
      colorPrinting: this._colorPrinting,
      availabilityStatus: this._availabilityStatus
    };
  }
}

module.exports = Printer;
