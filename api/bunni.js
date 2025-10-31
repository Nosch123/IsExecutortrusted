export default function handler(req, res) {
  const text = `Status: Partially Trusted<br>Test Date: 31.10.2025`;
  
  res.status(200).send(text);
}
