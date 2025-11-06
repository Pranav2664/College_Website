const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());

// Set up multer for photo uploads
const upload = multer({
  dest: path.join(__dirname, 'uploads/')
});

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/college_demo', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const registrationSchema = new mongoose.Schema({
  name: String,
  dob: String,
  gender: String,
  mobile: String,
  email: String,
  address: String,
  course: String,
  qualification: String,
  photo: String,
});
const Registration = mongoose.model('Registration', registrationSchema);

// Registration endpoint
app.post('/api/register', upload.single('photo'), async (req, res) => {
  try {
    // Log the received body and file for debugging
    console.log('Received body:', req.body);
    console.log('Received file:', req.file);

    const registrationData = {
      name: req.body.name,
      dob: req.body.dob,
      gender: req.body.gender,
      mobile: req.body.mobile || '',
      email: req.body.email,
      address: req.body.address,
      course: req.body.course,
      qualification: req.body.qualification,
      photo: req.file ? req.file.filename : null
    };

    const registration = new Registration(registrationData);
    await registration.save();

    res.status(200).json({ message: 'Registration successful!' });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Registration failed', error });
  }
});

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
