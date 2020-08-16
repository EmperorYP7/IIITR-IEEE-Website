const express = require('express');
const router = express.Router();
const multer = require('multer');

//------------------------Resource Upload--------------------------

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

router.get('/resource/:file', (req, res) => {
  const file = req.params.file;
  const absPath = path.resolve(__dirname+'../../../uploads/pdf/resources/'+`${file}`);   
  res.set({'Content-Type': 'pdf'});
  res.sendFile(absPath);
})

//-----------------------------------------------------------------


//---------------------------------Notice Upload---------------------------------

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
router.post('/notice', upload3.single('notice'), (req, res) => {
try {
  res.send(req.file);
}catch(err) {
  res.send(400);
}
});

router.get('/notice/:file(*)', (req, res) => {
  const file = req.params.file;
  const absPath = path.resolve(__dirname+'../../../uploads/pdf/notices/'+`${file}`);   
  res.set({'Content-Type': 'pdf'});
  res.sendFile(absPath);
})

//--------------------------------------------------------------------------------

module.exports = router;