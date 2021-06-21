const path = require('path')
const envPath = path.resolve(process.cwd(), '.env.local')

require('dotenv').config({ path: envPath })

const mysql = require('serverless-mysql')

const db = mysql({
  config: {
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    port: process.env.MYSQL_PORT,
  },
})

async function query(q) {
  try {
    const results = await db.query(q)
    await db.end()
    return results
  } catch (e) {
    throw Error(e.message)
  }
}

async function migrate() {
  try {
    // Create "topics" table if doesn't exist
    await query(`
    CREATE TABLE IF NOT EXISTS topics (
      id INT AUTO_INCREMENT PRIMARY KEY,
      title TEXT NOT NULL,
      content TEXT NOT NULL,
      author TEXT NOT NULL,
      avatarUrl TEXT NOT NULL,
      created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
      updated_at 
      TIMESTAMP 
      NOT NULL 
      DEFAULT CURRENT_TIMESTAMP 
      ON UPDATE CURRENT_TIMESTAMP
      )
      `);
    // Create "answers" table if doesn't exist
    await query(`
    CREATE TABLE IF NOT EXISTS answers (
      id INT AUTO_INCREMENT PRIMARY KEY,
      content TEXT NOT NULL,
      author TEXT NOT NULL,
      avatarUrl TEXT NOT NULL,
      topicId INT NOT NULL,
      INDEX topicIndex (topicId),
      FOREIGN KEY (topicId) REFERENCES topics(id)
    )`);
    // Create "votes" table if doesn't exist
    await query(`
    CREATE TABLE IF NOT EXISTS votes (
      id INT AUTO_INCREMENT PRIMARY KEY,
      author TEXT NOT NULL,
      topicId INT NOT NULL,
      answerId INT NOT NULL,
      INDEX topicIndex (topicId),
      FOREIGN KEY (topicId) REFERENCES topics(id),
      INDEX answerIndex (answerId),
      FOREIGN KEY (answerId) REFERENCES answers(id)
    )`);
      
    console.log('migration ran successfully')
  } catch (e) {
    console.error(e);
    console.error('could not run migration, double check your credentials.')
    process.exit(1)
  }
}

migrate().then(() => process.exit())