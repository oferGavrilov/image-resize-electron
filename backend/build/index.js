"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = process.env.PORT || 4000;
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.listen(port, () => {
    console.log('Server is running on port', port);
});
// const express = require('express')
// const bodyParser = require('body-parser')
// const cors = require('cors')
// require('dotenv').config()
// const app = express()
// const port = process.env.PORT || 5000
// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(cors())
// app.use(bodyParser.json())
// app.get('/', (req: Request, res: Response) => {
//       res.send('Hello World!')
//  })
// app.listen(port, () => {
//       console.log(`Example app listening at ${port}`)
//  }
// )
