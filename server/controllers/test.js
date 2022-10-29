exports.getTest = async (req, res) => {
  res.status(200).jason({
    message: 'Test API is working'
  })
}
