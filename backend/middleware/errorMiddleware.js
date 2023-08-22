const notFound = (req, res, next) => { // this will be called if no other middleware has handled the request
  const error = new Error(`Not Found - ${req.originalUrl}`); // create a new error object
  res.status(404); // set status code to 404
  next(error); // call the next piece of middleware and pass error to it 
};

const errorHandler = (err, req, res, next) => { // this will be called if there is an error in the app
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode; // if status code is 200, set to 500, else use res.statusCode
  let message = err.message;
  
  if (err.name === "CastError" && err.kind === "ObjectId") {
    message = "Resource not found";
    statusCode = 404;
  }

  res.status(statusCode).json({
    message,
    stack: process.env.NODE_ENV === "production" ? "🥞" : err.stack,
  });
};

export { notFound, errorHandler };
