const express = require('express');
const router = express.Router();
const multer = require('multer');

const storage1 = multer.diskStorage({
    destination: (req, file, cb) => cb(null, './backend/uploads/images/members'),
    filename: (req, file, cb) => cb(null , file.originalname)
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
    destination: (req, file, cb) => cb(null, './backend/uploads/images/events'),
    filename: (req, file, cb) => cb(null , file.originalname)
});

const upload2 = multer({ storage: storage2 })
router.post('/event', upload2.single('event'), (req, res) => {
    try {
      res.send(req.file);
    }catch(err) {
      res.send(400);
    }
});

const storage5 = multer.diskStorage({
  destination: (req, file, cb) => cb(null, './backend/uploads/images/home/carousal'),
  filename: (req, file, cb) => cb(null, file.originalname)
});

const upload5 = multer({ storage: storage5 })
router.post('/home/carousal', upload5.single('carousal'), (req, res) => {
  try {
    res.send(req.file);
  }catch(err) {
    res.send(400);
  }
});

const storage6 = multer.diskStorage({
  destination: (req, file, cb) => cb(null, './backend/uploads/images/gallery'),
  filename: (req, file, cb) => cb(null, file.originalname)
});

const upload6 = multer({ storage: storage6 })
<<<<<<< HEAD
router.post('/gallery', upload6.array('image'), (req, res) => {
=======
router.post('/gallery', upload6.array('gallery'), (req, res) => {
>>>>>>> 76c30b28d04bae1faf665bc60ea13174afa7d1b2
  try {
    res.send(req.file);
  }catch(err) {
    res.send(400);
  }
});

module.exports = router;