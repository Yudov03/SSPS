const Printer = require('../models/Printer');
exports.getPrinters = async (req, res) => {
    try {
      const printers = await Printer.find();
      res.status(200).json(printers);
    } catch (error) {
        console.error('Error retrieving print history:', error);
        res.status(500).json({ message: 'Error retrieving print history', error });
    }
  };
  
  // Thêm máy in
  exports.addPrinter = async (req, res) => {
    try {
      const { name, ip, location, status, lastUsed, condition, description } = req.body;
      const lastPrinter = await Printer.findOne().sort({ id: -1 }); 
      const newId = lastPrinter ? lastPrinter.id + 1 : 1;
      const newPrinter = new Printer({
        id: newId,
        name,
        ip,
        location,
        status,
        lastUsed,
        condition,
        description
      })
      await newPrinter.save();
      // const newPrinter = await Printer.create(req.body);
      res.status(201).json("ok");
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  