class Room {
    constructor(roomNumber, building) {
        this._roomNumber = roomNumber;
        this.building = building;
    }
    
    get room(){
        return this._roomNumber;
    }
    set room(value){
        this._roomNumber = value;
    }

    getRoomDetails() {
        return {
            roomNumber: this.roomNumber
            // building: this.building.name
        };
    }
}

module.exports = Room;