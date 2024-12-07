class PrinterManagement {
    constructor() {
      this.printers = [];
    }
    
    enablePrinter(id) {
        const printer = this.printers.find(printer => printer.id === id);
        printer.availabilityStatus = true;
        console.log(`Printer has been activated.`);
    }

    disablePrinter(id) {
        const printer = this.printers.find(printer => printer.id === id);
        printer.availabilityStatus = false;
        console.log(`Printer has been deactivated.`);
    }

    // Add a new printer to the system
    addPrinter(id, model, manufacture, location, colorPrinting, availabilityStatus) {
        const newPrinter = new Printer(id, model, manufacture, location, colorPrinting, availabilityStatus);
        this.printers.push(newPrinter);
        console.log(`Printer ${id} added.`);
    }
  
    // Remove a printer by ID
    removePrinter(id) {
        const index = this.printers.findIndex(printer => printer.id === id);
        if (index !== -1) {
            this.printers.splice(index, 1);
            console.log(`Printer ${id} removed.`);
        } else {
            console.log(`Printer ${id} not found.`);
        }
    }
  
    // Get details of a specific printer by ID
    viewPrinter(id) {
        const printer = this.printers.find(printer => printer.id === id);
        if (printer) {
            return printer.getDetails();
        } else {
            console.log(`Printer ${id} not found.`);
            return null;
        }
    }
    
    editPrinter(id) {
        const printer = this.printers.find(printer => printer.id === id);
        if (!printer) {
          console.log(`Printer with ID ${id} not found.`);
          return;
        }
    
        console.log(`Editing Printer ${id}:`);
        console.log('1. Model');
        console.log('2. Manufacture');
        console.log('3. Location');
        console.log('4. Color Printing');
        console.log('5. Availability Status');
    
        // Create a readline interface to accept user input
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        // Ask the user to choose an attribute to edit
        rl.question('Which attribute would you like to edit? (1-5): ', (choice) => {
            switch (choice) {
                // model
                case '1':
                    rl.question('Enter the new model: ', (newModel) => {
                        printer.model = newModel;
                        console.log(`Printer model updated to: ${newModel}`);
                        rl.close();
                    });
                break;
                
                // manufacture
                case '2':
                    rl.question('Enter the new manufacture (brand): ', (newManufacture) => {
                        printer.manufacture = newManufacture;
                        console.log(`Printer manufacture updated to: ${newManufacture}`);
                        rl.close();
                    });
                break;
                
                // location
                case '3':
                    rl.question('Enter the new location: ', (newLocation) => {
                        printer.location = newLocation;
                        console.log(`Printer location updated to: ${newLocation}`);
                        rl.close();
                    });
                break;
                
                // Color Printing
                case '4':
                    rl.question('Does the printer support color printing? (true/false): ', (colorPrinting) => {
                        printer.colorPrinting = colorPrinting.toLowerCase() === 'true';
                        console.log(`Printer color printing status updated to: ${printer.colorPrinting}`);
                        rl.close();
                    });
                break;
                
                default:
                    console.log('Invalid choice. Please enter a number between 1 and 5.');
                    rl.close();
            }
        });
    }

    // List all printers
    listPrinters() {
        return this.printers.map(printer => printer.getDetails());
    }
  }
  
  module.exports = PrinterManagement;
  