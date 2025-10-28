// api/[id].js
export default function handler(req, res) {
  try {
    const data = require('../data/executors.json'); // CommonJS, stabil auf Vercel
    const { id } = req.query;

    const item = data.find(x => x.id === String(id).toLowerCase());

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Cache-Control', 'public, max-age=60');

    if (!item) return res.status(404).json({ error: 'Executor not found' });
    return res.status(200).json(item);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
