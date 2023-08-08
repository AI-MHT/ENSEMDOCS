const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; // Change this to your desired port

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', async (req, res) => {
  try {
    // Extract form data from request
    const { fullname, email, message } = req.body;

    // Send the data to Formspree
    const response = await axios.post('https://formspree.io/f/mgejawlk', {
      fullname,
      email,
      message,
    });

    // Handle successful Formspree response
    if (response.status === 200) {
      // Redirect back to your original page
      res.redirect('https://ai-mht.github.io/ENSEMDOCS/');
    }
  } catch (error) {
    // Handle errors here
    console.error(error);
    res.status(500).send('Error submitting form.');
  }
});

app.get('/listen-and-redirect', (req, res) => {
  // Check if the "referrer" header matches Formspree's thank you page
  const referrer = req.get('Referrer');
  if (referrer === 'https://formspree.io/thanks?language=fr') {
    // Redirect to your original page
    res.redirect('https://ai-mht.github.io/ENSEMDOCS/');
  } else {
    res.status(400).send('Bad request.');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
app.get('/', (req, res) => {
  res.send("Hello, this is the homepage."); // You can customize this message
});

