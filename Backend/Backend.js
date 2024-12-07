// SPSO Class
class SPSO {
    constructor(spsoID, name) {
      this.#spsoID = spsoID;
      this.#name = name;
    }
    viewSystemReport() {

    }
  }
  
  // Location Class
  class Location {
    constructor(address) {
      this.#address = address;
    }
    getLocation() {
      return this.#address;
    }
  }
  
  // Printer Class
  class Printer {
    constructor(printerID, model, manufacturer, description, location, colorPrinting, availabilityStatus) {
      // Private attributes using # (ES2022 private fields)
      this.#printerID = printerID;
      this.#model = model;
      this.#manufacturer = manufacturer;
      this.#description = description;
      this.#location = location; // Assuming location is another object
      this.#colorPrinting = colorPrinting;
      this.#availabilityStatus = availabilityStatus;
    }
  
    // Getter methods
    getPrinterID() {
      return this.#printerID;
    }
  
    getPrinterModel() {
      return this.#model;
    }
  
    getPrinterManufacturer() {
      return this.#manufacturer;
    }
  
    getDescription() {
      return this.#description;
    }
  
    getLocation() {
      return this.#location;
    }
  
    getColorPrinting() {
      return this.#colorPrinting;
    }
  
    getAvailabilityStatus() {
      return this.#availabilityStatus;
    }
  
    // Setter methods
    setPrinterID(printerID) {
      this.#printerID = printerID;
    }
  
    setPrinterModel(model) {
      this.#model = model;
    }
  
    setPrinterManufacturer(manufacturer) {
      this.#manufacturer = manufacturer;
    }
  
    setDescription(description) {
      this.#description = description;
    }
  
    setLocation(location) {
      this.#location = location;
    }
  
    setColorPrinting(colorPrinting) {
      this.#colorPrinting = colorPrinting;
    }
  
    setAvailabilityStatus(availabilityStatus) {
      this.#availabilityStatus = availabilityStatus;
    }
    

    // String representation of the Printer object
    toString() {
      return `Printer(ID: ${this.#printerID}, Model: ${this.#model}, Manufacturer: ${this.#manufacturer}, Description: ${this.#description}, Location: ${this.#location}, Color Printing: ${this.#colorPrinting}, Availability: ${this.#availabilityStatus})`;
    }
  }
  
  // PrinterManagement Class
  class PrinterManagement {
    constructor() {
      this.printersList = [];
    }

    enablePrinter(ID) {
      const printer = this.printersList.find(p => p.getPrinterID() === ID);
      if (printer) {
          printer.setAvailabilityStatus(true);
          console.log(`Printer with ID ${ID} has been enabled.`);
      } else {
          console.log(`No Printer found with ID ${ID}.`);
      }
    }

    disablePrinter(ID) {
      const printer = this.printersList.find(p => p.getPrinterID() === ID);
      if (printer) {
          printer.setAvailabilityStatus(false);
          console.log(`Printer with ID ${ID} has been disabled.`);
      } else {
          console.log(`No Printer found with ID ${ID}.`);
      }
    }

    addPrinter(ID) {
      if (this.printersList.find(p => p.getPrinterID() === ID.getPrinterID())) {
          console.log(`Printer with ID ${ID.getPrinterID()} already exists.`);
      } else {
          this.printersList.push(ID);
          console.log(`Printer with ID ${ID.getPrinterID()} added.`);
      }
    }

    removePrinter(ID) {
      const index = this.printers.findIndex(p => p.getPrinterID() === ID);
      if (index !== -1) {
          this.printers.splice(index, 1);
          console.log(`Printer with ID ${ID} removed.`);
      } else {
          console.log(`No Printer found with ID ${ID}.`);
      }
    }

    viewPrinter(ID) {
      const printer = this.printersList.find(p => p.getPrinterID() === ID);
      if (printer) {
        console.log(`ID: ${printer.printerID}.\n
                    Model: ${printer.model}.\n
                    Manufacturer: ${printer.manufacturer}.\n
                    Description: ${printer.description}.\n
                    Location: ${printer.location}.\n
                    Color Printing: ${printer.colorPrinting}.\n
                    Status: ${printer.availabilityStatus}.\n`);
      } else {
          console.log(`No Printer found with ID ${ID}.`);
      }
    }

    editPrinter(ID) {
      const printer = this.printersList.find(p => p.getPrinterID() === ID);
      if (printer) {
        const change = prompt("Please choose what you want to change:");
        switch (change) {
          case value1: // model
            // add method to change later
            printer.setPrinterModel(prompt("Please type in your change:"));
            break;

          case value2: // manufacturer
            // add method to change later
            printer.setPrinterManufacturer(prompt("Please type in your change:"));
            break;
          
           case value3: // Description
            // add method to change later
            printer.description(prompt("Please type in your change:"));
            break;

          case value4: // manufacturer
            // add method to change later
            printer.colorPrinting(prompt("Please type in your change:"));
            break;

          case value5: // manufacturer
            // add method to change later
            printer.availabilityStatus(prompt("Please type in your change:"));
            break;

          default:
            console.log(`Invalid input.`);
        }
      } else {
      console.log(`No Printer found with ID ${ID}.`);
      } 
    }
  }
  
  // Building Class
  class Building {
    constructor(buildingName) {
      this.buildingName = buildingName;
    }
    // Methods will be added here
  }
  
  // Room Class
  class Room {
    constructor(roomNumber) {
      this.roomNumber = roomNumber;
    }
    // Methods will be added here
  }
  
  // ConfigurationManagement Class
  class ConfigurationManagement {
    constructor(defaultPageLimit, allowedFileTypes = [], lastChangeDate) {
        this.defaultPageLimit = defaultPageLimit;
        this.allowedFileTypes = Array.isArray(allowedFileTypes) ? allowedFileTypes : [];
        this.lastChangeDate = lastChangeDate;
    }

    getPageLimit() {
        return this.defaultPageLimit;
    }

    setPageLimit(newLimit) {
        this.defaultPageLimit = newLimit;
    }

    getAllowedFileTypes() {
        return this.allowedFileTypes;
    }

    addFileType(fileType) {
        if (!this.allowedFileTypes.includes(fileType)) {
            this.allowedFileTypes.push(fileType);
            console.log(`File type '${fileType}' added.`);
        } else {
            console.log(`File type '${fileType}' is already allowed.`);
        }
    }

    removeFileType(fileType) {
        const index = this.allowedFileTypes.indexOf(fileType);
        if (index !== -1) {
            this.allowedFileTypes.splice(index, 1);
            console.log(`File type '${fileType}' removed.`);
        } else {
            console.log(`File type '${fileType}' is not in the allowed list.`);
        }
    }

    getLastChangeDate() {
        return this.lastChangeDate;
    }

    setLastChangeDate(newDate) {
        this.lastChangeDate = newDate;
    }
}

  
  // Payment Class
  class Payment {
    constructor(paymentID, studentID, amount, paymentDate) {
      this.paymentID = paymentID;
      this.studentID = studentID;
      this.amount = amount;
      this.paymentDate = paymentDate;
    }
    // Methods will be added here
  }
  
  // PrintLog Class
  class PrintLog {
    constructor(logID, studentID, printerID, filename, printTime, pagePrinted) {
      this.logID = logID;
      this.studentID = studentID;
      this.printerID = printerID;
      this.filename = filename;
      this.printTime = printTime;
      this.pagePrinted = pagePrinted;
    }
    // Methods will be added here
  }
  
  // Student Class
  class Student {
    constructor(studentID, name, pageBalance) {
      this.studentID = studentID;
      this.name = name;
      this.pageBalance = pageBalance;
    }
    // Methods will be added here
  }
  