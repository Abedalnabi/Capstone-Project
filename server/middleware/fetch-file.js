const multer = require('multer');
const path = require('path');
const {SERVER_PATH} = require('../config/env/env')

const obj = {};
const fileFullPath = path.join('./image');
let validFileToSave = '';
const uploadFilter = function (req, file, cb) {
  if (file.mimetype.split('/')[0] === 'image') {
    cb(null, true);
  } else {
    obj[file.originalname] = file.originalname;
    req.fileName = obj;
    cb(null, false);
  }
};
const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, fileFullPath);
  },
  filename: (req, file, callback) => {
    validFileToSave = `${Date.now()}-${
      file.originalname.split('.')[0].split(' ').join('') + '.' + file.originalname.split('.')[1]
    }`;
    callback(null, validFileToSave);
  },
});

const upload = multer({
  storage: storage,
  fileFilter: uploadFilter,
}).single('image');

const uploadFiles = (req, res) => {
  res.status(200).json(`${SERVER_PATH}/image/${validFileToSave}`);
};

module.exports = { upload, uploadFiles };
