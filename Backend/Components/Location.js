class Location {
    constructor(name) {
        this._name = name;
        this.buildings = [];
    }
    
    get location(){
        return this._name;
    }
    set location(value){
        this._name = value;
    }

    addBuilding(building) {
        this.buildings.push(building);
    }

    getLocationDetails() {
        return {
            location: this.name,
            // buildings: this.buildings.map(building => building.getBuildingDetails())
        };
    }
}

module.exports = Location;