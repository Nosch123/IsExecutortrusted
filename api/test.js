export default function handler(req, res) {
  const text = `untrusted<br>additional info here<br>more details`;
  
  res.status(200).send(text);
}
