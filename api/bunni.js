export default function handler(req, res) {
  const text = `untrusted`;
  
  res.status(200).send(text);
}
