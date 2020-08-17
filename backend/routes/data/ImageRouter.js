const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');

//--------------------------------------------------------- Member Image -------------------------------------------------------------------------

const storage1 = multer.diskStorage({
    destination: (req, file, cb) => cb(null, './backend/uploads/images/members'),
    filename: (req, file, cb) => cb(null , file.originalname),
    fileFilter: (req, file, cb) => {
      const ext = path.extname(file.originalname);
      if(ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
        return cb(new Error('only images are allowed'))
      }
      cb(null, true)
    }
});

const upload1 = multer({ storage: storage1 })
router.post('/member', upload1.single('member'), (req, res) => {
    try {
      res.send(req.file);
    }catch(err) {
      res.status(400).send(err);
    }
  });

router.get('/member/:file(*)', (req, res) => {
    const file = req.params.file;
    const absPath = path.resolve(__dirname+'../../../uploads/images/members/'+`${file}`);   
    res.set({'Content-Type': 'image/png', 'Content-Type': 'image/jpg', 'Content-Type': 'image/jpeg'});
    res.sendFile(absPath);
})

router.delete('/member/:file(*)', (req, res) => {
    const file = req.params.file;
    const absPath = path.resolve(__dirname+'../../../uploads/images/members/'+`${file}`);   

    fs.unlink(absPath, function(err) {
      if (err) {
        res.send(`error while deleting file ${file} ` + err);
      } else {
        res.send(`Successfully deleted the file ${file} `);
      }
    })
})

//--------------------------------------------------------- Event Image -------------------------------------------------------------------------

const storage2 = multer.diskStorage({
    destination: (req, file, cb) => cb(null, './backend/uploads/images/events'),
    filename: (req, file, cb) => cb(null , file.originalname),
    fileFilter: (req, file, cb) => {
      const ext = path.extname(file.originalname);
      if(ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
        return cb(new Error('only images are allowed'))
      }
      cb(null, true)
    }
});

const upload2 = multer({ storage: storage2 })
router.post('/event', upload2.single('event'), (req, res) => {
    try {
      res.send(req.file);
    }catch(err) {
      res.status(400).send(err);
    }
});

router.get('/event/:file', (req, res) => {
  const file = req.params.file;
  const absPath = path.resolve(__dirname+'../../../uploads/images/events/'+`${file}`);
  res.set({'Content-Type': 'image/jpg'});
  res.sendFile(absPath);
});

router.delete('/event/:file(*)', (req, res) => {
  const file = req.params.file;
  const absPath = path.resolve(__dirname+'../../../uploads/images/events/'+`${file}`);   

  fs.unlink(absPath, function(err) {
    if (err) {
      res.send(`error while deleting file ${file} ` + err);
    } else {
      res.send(`Successfully deleted the file ${file} `);
    }
  })
})

//--------------------------------------------------------- Carousal Images -------------------------------------------------------------------------

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

router.get('/home/carousal/:file(*)', (req, res) => {
  const file = req.params.file;
  const absPath = path.resolve(__dirname+'../../../uploads/images/home/carousal/'+`${file}`);
  res.set({'Content-Type': 'image/png', 'Content-Type': 'image/jpg', 'Content-Type': 'image/jpeg'});
  res.sendFile(absPath);
});

//------------------------------------------------------------ Gallery -------------------------------------------------------------------------

const storage6 = multer.diskStorage({
  destination: (req, file, cb) => cb(null, './backend/uploads/images/gallery'),
  filename: (req, file, cb) => cb(null, file.originalname)
});

const upload6 = multer({ storage: storage6 })
router.post('/gallery', upload6.array('gallery'), (req, res) => {
  try {
    res.send(req.file);
  }catch(err) {
    res.send(400);
  }
});

router.get('/gallery/:file(*)', (req, res) => {
  const file = req.params.file;
  const absPath = path.resolve(__dirname+'../../../uploads/images/gallery/'+`${file}`);
  res.set({'Content-Type': 'image/png', 'Content-Type': 'image/jpg', 'Content-Type': 'image/jpeg'});
  res.sendFile(absPath);
});

router.delete('/gallery/:file(*)', (req, res) => {
  const file = req.params.file;
  const absPath = path.resolve(__dirname+'../../../uploads/images/gallery/'+`${file}`);   

  fs.unlink(absPath, function(err) {
    if (err) {
      res.send(`error while deleting file ${file} ` + err);
    } else {
      res.send(`Successfully deleted the file ${file} `);
    }
  })
})

//------------------------------------------------------------------------------------------------------------------------------------

module.exports = router;