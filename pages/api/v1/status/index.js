function status(req, res) {
  res.status(200).json({ status: "a api está funcionando" });
}

export default status;
