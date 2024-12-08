class Building {
    constructor(name, location) {
        this._name = name;
        this.location = location;
        this.rooms = [];
    }

    get building(){
        return this._name;
    }
    set building(value){
        this._name = value;
    }

    addRoom(room) {
        this.rooms.push(room);
    }

    getBuildingDetails() {
        return {
            building: this.name
            // rooms: this.rooms.map(room => room.getRoomDetails())
        };
    }
}

module.exports = Building;