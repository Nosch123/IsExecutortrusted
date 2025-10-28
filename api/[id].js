import executors from '../data/executors.json';

export default function handler(req, res) {
  const { id } = req.query; // z. B. "xeno"
  const item = executors.find(x => x.id === String(id).toLowerCase());

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 'public, max-age=60');

  if (!item) return res.status(404).json({ error: 'Executor not found' });
  return res.status(200).json(item);
}
