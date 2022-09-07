import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

app.use(bodyParser.json({ linit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ linit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL = "mongodb+srv://mdmitch7:07032018911@cluster0.j0tc6hp.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5060;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((err) => console.log(err.message));


