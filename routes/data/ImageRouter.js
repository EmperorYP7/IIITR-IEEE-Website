require('dotenv').config();
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const multers3 = require('multer-s3');
const S3 = require('aws-sdk/clients/s3');
const auth = require("../../utils/auth");

// Setting up S3 bucket
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
router.post('/member', auth, (req, res) => {
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

router.delete('/member/:file(*)', auth, (req, res) => {
  const file = req.params.file;
  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: file
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
});

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
router.post('/event', auth, (req, res) => {
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
  res.set({'Content-Type': 'image/jpg'});
  res.sendFile(file);
});

router.delete('/event/:file(*)', auth, (req, res) => {
  const file = req.params.file;
  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: file
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
});

//------------------------------------------------------------ Gallery -------------------------------------------------------------------------

const GalleryImgUpload = multer({
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
}).single('gallery');



router.post('/gallery', auth, (req, res) => {
  GalleryImgUpload(req, res, (error) => {
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

router.get('/gallery/:file(*)', (req, res) => {
  res.set({'Content-Type': 'image/png', 'Content-Type': 'image/jpg', 'Content-Type': 'image/jpeg'});
  res.json({ path: req.params.file });
});

router.delete('/gallery/:file(*)', auth, (req, res) => {
  const file = req.params.file;
  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: file
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
});

//------------------------------------------------------------------------------------------------------------------------------------

module.exports = router;