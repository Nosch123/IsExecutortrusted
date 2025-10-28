import { readFileSync } from 'fs';
import { join } from 'path';

export default function handler(req, res) {
  const { id } = req.query; // "xeno"

  // Pfad zur JSON-Datei korrekt ermitteln
  const filePath = join(process.cwd(), 'data', 'executors.json');
  const rawData = readFileSync(filePath);
  const executors = JSON.parse(rawData);

  const item = executors.find(x => x.id === String(id).toLowerCase());

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 'public, max-age=60');

  if (!item) return res.status(404).json({ error: 'Executor not found' });
  return res.status(200).json(item);
}
