import path from 'path'
import express, { Request, Response } from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()
const http = require('http').createServer(app)

app.use(cookieParser())
app.use(express.json())

if(process.env.NODE_ENV === 'production') {
      app.use(express.static(path.join(__dirname, 'build')))
      app.get('/**', (req: Request, res: Response) => {
            res.sendFile(path.join(__dirname,'public', 'index.html'))
      })
} else {
      const corsOptions = {
            origin: ['http://localhost:3000' , 'http://127.0.0.1:3000'],
            credentials: true,
            optionSuccessStatus: 200
      }
      app.use(cors(corsOptions))
}

const port = process.env.PORT || 4000

app.get('/', (req: Request, res: Response) => {
      console.log('Cookies: ', req.cookies)

      console.log('Signed Cookies: ', req.signedCookies)
      res.send('Hello World!')
})




app.listen(port, () => {
      console.log('Server is running on port', port)
})

