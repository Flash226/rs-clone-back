const multer = require('multer');
const crypto = require('crypto');
const fs = require('fs');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname.replace(/ /g, '_'));
  }
})

const upload = multer({ storage: storage });

function handleFileUpload(req, res) {
  upload.single('image')(req, res, function(err) {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      fs.readFile(req.file.path, (err, data) => {
        if (err) {
          console.log(err);
          res.status(500).send(err);
        } else {
          const hash = crypto.createHash('md5');
          hash.update(data);
          const fileHash = hash.digest('hex');
          const extension = req.file.originalname.split('.').pop();
          const oldPath = req.file.path;
          const newPath = `uploads/${fileHash}.${extension}`;
          fs.rename(oldPath, newPath, err => {
            if (err) {
              console.log(err);
              res.status(500).send(err);
            } else {
              res.json({ filename: `${fileHash}.${extension}` });
            }
          });
        }
      });
    }
  });
}

module.exports = handleFileUpload;
