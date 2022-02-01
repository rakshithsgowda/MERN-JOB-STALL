import express from 'express'
import errorHandlerMiddleware from './middlewares/error-handler.js'
import NotFoundMiddleware from './middlewares/NotFound.js'

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
app.listen(PORT, () => {
  console.log(`listening to the port on ${PORT}`)
})
