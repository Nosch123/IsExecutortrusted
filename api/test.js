export default function handler(req, res) {
  const text = `trusted`;
  
  res.status(200).send(text);
}
