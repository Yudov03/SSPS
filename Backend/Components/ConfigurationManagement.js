class ConfigurationManagement {
    constructor(defaultPageLimit, allowedFileType, changeDate, changeDescription) {
        this._defaultPageLimit = defaultPageLimit;
        this._allowedFileType = allowedFileType || [];
        this._lastChangeDate = lastChangeDate;
    }

    // Default Page Limit
    get defaultPageLimit() {
        return this._defaultPageLimit;
    }
    set defaultPageLimit(value) {
        this._defaultPageLimit = value;
    }

    // Allowed File Types
    get allowedFileType() {
        return this._allowedFileType;
    }
    set allowedFileType(value) {
        this._allowedFileType = value;
    }

    // Last Change Date
    get lastChangeDate() {
        return this._lastChangeDate;
    }

    set lastChangeDate(value) {
        this._lastChangeDate = value;
    }

    updateDefaultPageLimit(limit) {
        this.defaultPageLimit = limit;
    }

    addFileType(type) {
        if (!this._allowedFileType.includes(type)) {
            this._allowedFileType.push(type);
            console.log(`File type '${type}' added to the allowed file types.`);
        } else {
            console.log(`File type '${type}' is already in the allowed list.`);
        }
    }
}

module.exports = ConfigurationManagement;