import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

import errorHandlerMiddleware from './middlewares/error-handler.js'
import NotFoundMiddleware from './middlewares/NotFound.js'

import connectDB from './db/connect.js'

const app = express()
const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
  throw new Error('Something bad happened.')
  res.send('welcome')
})

// ---------------------------------------------------------------------------------------
// --------------------MIDDLEWARES-----------------------------------------------------
// ---------------------------------------------------------------------------------------
app.use(NotFoundMiddleware)
app.use(errorHandlerMiddleware)

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
