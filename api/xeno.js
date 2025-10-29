export default function handler(req, res) {
  const text = `Status: trusted<br>Test Date: 28.10.2025`;
  
  res.status(200).send(text);
}
