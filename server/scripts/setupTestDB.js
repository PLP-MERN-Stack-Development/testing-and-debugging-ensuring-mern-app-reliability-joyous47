const mongoose = require('mongoose');
require('dotenv').config({ path: '.env.test' });

async function setupTestDB() {
  try {
    console.log('Setting up test database...');
    
    // Connect to test database
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Successfully connected to test database');
    
    // Just show the connection info
    console.log('Database name:', mongoose.connection.name);
    console.log('Database host:', mongoose.connection.host);
    
    await mongoose.connection.close();
    console.log('✅ Test database setup complete!');
    
  } catch (error) {
    console.error('❌ Test database setup failed:', error.message);
    process.exit(1);
  }
}

setupTestDB();

