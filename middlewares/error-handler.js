import { StatusCodes } from 'http-status-codes'

const errorHandlerMiddleware = (err, req, res, next) => {
  console.log(err)

  const defaultError = {
    StatusCode: StatusCodes.INTERNAL_SERVER_ERROR,
    msg: 'sommething went wrong,try again later',
  }

  if (err.name === 'ValidationError') {
    defaultError.StatusCode = StatusCodes.BAD_REQUEST
    // defaultError.msg = err.msg
    defaultError.msg = Object.values(err.errors)
      .map((item) => item.message)
      .join(',')
  }

  res.status(defaultError.StatusCode).json({ msg: defaultError.msg })

  // res.status(defaultError.StatusCode).json({ msg: err })
}

export default errorHandlerMiddleware
