export default function handler(req, res) {
  const data = require('../data/executors.json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 'public, max-age=60');
  res.status(200).json(data);
}
