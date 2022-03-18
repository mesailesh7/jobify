import { StatusCodes } from "http-status-codes";

const errorHandlerMiddleware = (err, req, res, next) => {
  console.log(err);
  const defaultError = {
    StatusCodes: StatusCodes.INTERNAL_SERVER_ERROR,
  };
  res.status(500).json({ msg: err });
};

export default errorHandlerMiddleware;
