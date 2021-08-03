module.exports = (route) => {
  route.get('/healthcheck', (req, res) => { return res.json({ msg: 'is alive' }) })
}
