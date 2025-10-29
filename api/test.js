export default function handler(req, res) {
  const text = `Hallo Noah!
Das ist ein
mehrzeiliger Text
von deiner API.`;
  
  res.status(200).send(text);
}
