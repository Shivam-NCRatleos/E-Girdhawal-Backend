const dotenv = require('dotenv');

// Load environment variables from .env file
const loadEnv = () => {
  const result = dotenv.config();

  if (result.error) {
    throw new Error("Couldn't load .env file");
  }

  console.log('.env file loaded successfully');
};

module.exports = loadEnv;
