import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import { connect } from 'mongoose'
import connectDB from './configs/mongodb.js'
import { clerkWebhooks } from './controllers/webhooks.js'

// App Config
const app = express();

// DB Config
async function initializeDB() {
  try {
    await connectDB();
    console.log("✅ MongoDB Connected");
  } catch (err) {
    console.error("❌ MongoDB Connection Error:", err);
  }
}
initializeDB();

// Middlewares
app.use(cors());

// Routes
app.get('/', (req, res)=> res.send("API Working"))
app.post('/clerk', express.json(), clerkWebhooks)
// Port 

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server is runninng on port ${PORT}`)
})

export default app;