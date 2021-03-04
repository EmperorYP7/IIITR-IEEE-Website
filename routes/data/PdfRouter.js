require('dotenv').config();
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const S3 = require('aws-sdk/clients/s3');
const multers3 = require('multer-s3');
const auth = require("../utils/auth");

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

//-----------------------------------------------------------Resource -----------------------------------------------------------------

// Creating upload object for Resource PDF
const ResourcePdfUpload = multer({
  storage: multers3({
    s3: s3,
    bucket: process.env.AWS_BUCKET_NAME,
    acl: 'public-read',
    key: function (req, file, cb) {
      cb(null, path.basename( 'upload/image/resource' + file.originalname, path.extname( file.originalname ) ) + '-' + Date.now() + path.extname( file.originalname ) )
    }
  }),
  limits: { fileSize: 100000000 }, // In bytes: 100000000 bytes = 100 MB
  fileFilter: function (req, file, cb) {
    const filetypes = /pdf/;
    checkFileType( file, filetypes, cb );
  }
}).single('resource');

router.post('/resource', auth, (req, res) => {
  ResourcePdfUpload(req, res, (error) => {
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
        res.json({
          pdfName: req.file.key,
          pdfPath: req.file.location
        });
    }
  }
 });
});

router.get('/resource/:file(*)', (req, res) => {
  const file = req.params.file;
  res.set({'Content-Type': 'application/pdf'});
  res.sendFile(file);
});

router.delete('/resource/:file(*)', auth, (req, res) => {
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

//------------------------------------------------------------------Notice -----------------------------------------------------------

// Creating upload object for Notice PDF
const NoticePdfUpload = multer({
  storage: multers3({
    s3: s3,
    bucket: process.env.AWS_BUCKET_NAME,
    acl: 'public-read',
    key: function (req, file, cb) {
      cb(null, path.basename( file.originalname, path.extname( file.originalname ) ) + '-' + Date.now() + path.extname( file.originalname ) )
    }
  }),
  limits: { fileSize: 100000000 }, // In bytes: 100000000 bytes = 100 MB
  fileFilter: function (req, file, cb) {
    const filetypes = /pdf/;
    checkFileType( file, filetypes, cb );
  }
}).single('notice');

router.post('/notice', auth, (req, res) => {
  NoticePdfUpload(req, res, (error) => {
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
        res.json({
          pdfName: req.file.key,
          pdfPath: req.file.location
        });
    }
  }
 });
});

router.get('/notice/:file(*)', (req, res) => {
  const file = req.params.file;
  res.set({'Content-Type': 'application/pdf'});
  res.sendFile(file);
});

router.delete('/notice/:file(*)', auth, (req, res) => {
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

//----------------------------------------------------------------------------------------------------------------------------------

module.exports = router;
