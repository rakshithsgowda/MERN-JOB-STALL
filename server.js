import express from 'express'
import dotenv from 'dotenv'

const app = express()

dotenv.config()
const PORT = process.env.PORT || 5000

// --------------------DB AND AUTHENTICATE USER-------------------------------------------
import connectDB from './db/connect.js'

// --------------------ROUTERS-----------------------------------------------------
import authRouter from './routes/authRoutes.js'
import jobsRouter from './routes/authRoutes.js'

// --------------------MIDDLEWARES-----------------------------------------------------
import errorHandlerMiddleware from './middlewares/error-handler.js'
import NotFoundMiddleware from './middlewares/NotFound.js'

app.use(express.json())

app.get('/', (req, res) => {
  res.send('welcome')
})

app.use(NotFoundMiddleware)
app.use(errorHandlerMiddleware)

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/jobs', jobsRouter)
// ---------------------------------------------------------------------------------------
// --------------------LISTENING ON PORT-----------------------------------------------------
// ---------------------------------------------------------------------------------------

const start = async () => {
  try {
    await connectDB(
      process.env.MONGO_DB_CONNECTION_URL.replace(
        '<password>',
        process.env.MONGO_DB_CONNECTION_URL_PASSWORD
      )
    )
    app.listen(PORT, () => {
      console.log(`listening to the port on ${PORT}`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()
