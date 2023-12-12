const File = require('../models/File');

const uploadFile = async (req, res) => {
    try {
        const file = await File.create(req.body);
        res.status(200).json(file);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getFile = async (req, res) => {
    try {
        const file = await File.findById(req.params.fileId);
        if (!file) {
            return res.status(404).json({ message: 'File not found' });
        }
        res.status(200).json(file);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const deleteFile = async (req, res) => {
    try {
        const file = await File.findByIdAndDelete(req.params.fileId);
        if (!file) {
            return res.status(404).json({ message: 'File not found' });
        }
        res.status(200).json({ message: 'File deleted successfully' });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

module.exports = {
    uploadFile,
    getFile,
    deleteFile
};
