const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('hello people');
});
const multer = require('multer');



const storage1 = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './backend/uploads/members');
     },
    filename: function (req, file, cb) {
        cb(null , file.originalname);
    }
});
const upload1 = multer({ storage: storage1 })
router.post('/member', upload1.single('member'), (req, res) => {
    try {
      res.send(req.file);
    }catch(err) {
      res.send(400);
    }
  });


  const storage2 = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './backend/uploads/events');
     },
    filename: function (req, file, cb) {
        cb(null , file.originalname);
    }
});
const upload2 = multer({ storage: storage2 })
router.post('/event', upload2.single('event'), (req, res) => {
    try {
      res.send(req.file);
    }catch(err) {
      res.send(400);
    }
  });

  module.exports = router;