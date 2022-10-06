import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import {config} from 'dotenv';
import postRoutes from './routes/posts.js';

const app = express();


app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());
app.use('/posts', postRoutes);

config();
const PORT = process.env.PORT || 3060;
console.log('Connecting to MongoDB Atlas cluster...');
mongoose.connect(process.env.SERVER_APP_DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => app.listen(PORT, () => console.log(`Successfully connected to MongoDB Atlas!
    Server running on port: ${PORT}`))).catch((err) => {
  console.log('Connection to MongoDB Atlas failed!', err);
  process.exit();
});
