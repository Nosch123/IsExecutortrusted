export default function handler(req, res) {
  const text = `sigma<br>67<br>nosch`;
  
  res.status(200).send(text);
}
