const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');

//-----------------------------------------------------------Resource -----------------------------------------------------------------

const storage3 = multer.diskStorage({
    destination: (req, file, cb) => cb(null, './backend/uploads/pdf/resources'),
    filename: (req, file, cb) => cb(null, file.originalname),
    fileFilter: (req, file, cb) => {
      const ext = path.extname(file.originalname);
      if(ext !== '.pdf') {
        return cb(new Error('only pdfs are allowed'))
      }
      cb(null, true)
    }
});

const upload3 = multer({ storage: storage3 })
router.post('/resource', upload3.single('resource'), (req, res) => {
  try {
    res.send(req.file);
  }catch(err) {
    res.send(400);
  }
});

router.get('/resource/:file(*)', (req, res) => {
  const file = req.params.file;
  const absPath = path.resolve(__dirname+'../../../uploads/pdf/resources/'+`${file}`);   
  res.set({'Content-Type': 'application/pdf'});
  res.sendFile(absPath);
});

router.delete('/resource/:file(*)', (req, res) => {
  const file = req.params.file;
  const absPath = path.resolve(__dirname+'../../../uploads/pdf/resources/'+`${file}`);   

  fs.unlink(absPath, function(err) {
    if (err) {
      res.send(`error while deleting file ${file} ` + err);
    } else {
      res.send(`Successfully deleted the file ${file} `);
    }
  })
})

//------------------------------------------------------------------Notice -----------------------------------------------------------

const storage4 = multer.diskStorage({
  destination: (req, file, cb) => cb(null, './backend/uploads/pdf/notices'),
  filename: (req, file, cb) => cb(null, file.originalname),
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    if(ext !== '.pdf') {
      return cb(new Error('only pdfs are allowed'))
    }
    cb(null, true)
  }
});

const upload4 = multer({ storage: storage4 })
router.post('/notice', upload4.single('notice'), (req, res) => {
try {
  res.send(req.file);
}catch(err) {
  res.send(400);
}
});

router.get('/notice/:file(*)', (req, res) => {
  const file = req.params.file;
  const absPath = path.resolve(__dirname+`../../../uploads/pdf/notices/${file}`);
  res.set({'Content-Type': 'application/pdf'});
  res.sendFile(absPath);
});

router.delete('/notice/:file(*)', (req, res) => {
  const file = req.params.file;
  const absPath = path.resolve(__dirname+'../../../uploads//pdf/notices/'+`${file}`);   

  fs.unlink(absPath, function(err) {
    if (err) {
      res.send(`error while deleting file ${file} ` + err);
    } else {
      res.send(`Successfully deleted the file ${file} `);
    }
  })
})

//----------------------------------------------------------------------------------------------------------------------------------

module.exports = router;