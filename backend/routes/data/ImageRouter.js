require('dotenv').config();
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const multers3 = require('multer-s3');
const S3 = require('aws-sdk/clients/s3');

const s3 = new S3({
  apiVersion: process.env.AWS_API_VERSION,
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

// For checking the filetype for member image
function checkFileType( file, filetypes, cb ) {
  // Check ext
  const extname = filetypes.test( path.extname( file.originalname ).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);
  if (mimetype && extname) {
    return cb( null, true );
  } else {
    cb( `Error: ${filetypes} Only!` );
  }
}

//--------------------------------------------------------- Member Image -------------------------------------------------------------------------


// Creating upload object for member image
const MemberImgUpload = multer({
  storage: multers3({
    s3: s3,
    bucket: process.env.AWS_BUCKET_NAME,
    acl: 'public-read',
    key: function (req, file, cb) {
      cb(null, path.basename( file.originalname, path.extname( file.originalname ) ) + '-' + Date.now() + path.extname( file.originalname ) )
    }
  }),
  limits: { fileSize: 10000000 }, // In bytes: 10000000 bytes = 10 MB
  fileFilter: function (req, file, cb) {
    const filetypes = /jpeg|jpg|png|gif/;
    checkFileType( file, filetypes, cb );
  }
}).single('member');


// POST route for uploading image to member on S3
router.post('/member', (req, res) => {
  MemberImgUpload(req, res, (error) => {
    console.log( 'requestOkokok', req.file );
    console.log( 'error', error );
    if( error ){
     console.log( 'errors', error );
     res.status(400).json( { error: error } );
    } else {
     if( req.file === undefined ){
      console.log( 'Error: No File Selected!' );
      res.json( 'Error: No File Selected' );
     } else {
        const imageName = req.file.key;
        const imageLocation = req.file.location;
        res.json({
          imgName: imageName,
          imgPath: imageLocation
        });
     }
  }
 });
});

router.get('/member/:file(*)', (req, res) => {
    const file = req.params.file;
    res.set({'Content-Type': 'image/png', 'Content-Type': 'image/jpg', 'Content-Type': 'image/jpeg'});
    res.sendFile(file);
})

router.delete('/member/:file(*)', (req, res) => {
  const file = req.params.file;
  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Delete: {
      Object: file,
      Quiet: false
    }
  };
  s3.deleteObject(params, (err, data) => {
    if (err) {
      console.log(err);
      res.status(400).json({ error: err });
    }
    else {
      console.log("Deleted successfully!");
    }
  });
  res.json({
    message: 'image deleted',
  });
})

//--------------------------------------------------------- Event Image -------------------------------------------------------------------------

// Creating upload object for member image
const EventImgUpload = multer({
  storage: multers3({
    s3: s3,
    bucket: process.env.AWS_BUCKET_NAME,
    acl: 'public-read',
    key: function (req, file, cb) {
      cb(null, path.basename( file.originalname, path.extname( file.originalname ) ) + '-' + Date.now() + path.extname( file.originalname ) )
    }
  }),
  limits: { fileSize: 10000000 }, // In bytes: 10000000 bytes = 10 MB
  fileFilter: function (req, file, cb) {
    const filetypes = /jpeg|jpg|png|gif/;
    checkFileType( file, filetypes, cb );
  }
}).single('event');

// POST route for uploading image to event on S3
router.post('/event', (req, res) => {
  EventImgUpload(req, res, (error) => {
    console.log( 'requestOkokok', req.file );
    console.log( 'error', error );
    if( error ){
     console.log( 'errors', error );
     res.status(400).json( { error: error } );
    } else {
     if( req.file === undefined ){
      console.log( 'Error: No File Selected!' );
      res.json( 'Error: No File Selected' );
     } else {
        const imageName = req.file.key;
        const imageLocation = req.file.location;
        res.json({
          imgName: imageName,
          imgPath: imageLocation
        });
     }
  }
 });
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
  res.set({'Content-Type': ['image/png', 'image/jpg', 'image/jpeg']});
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