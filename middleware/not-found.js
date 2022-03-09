const notFoundMiddleware = (req, res) => {
  res.status(404).send("Requested page not found");
};

export default notFoundMiddleware;
