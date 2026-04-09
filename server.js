const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("public"));

app.post("/chat", (req, res) => {
  const msg = req.body.message.toLowerCase();

  let reply = "";

  if (msg.includes("curso")) {
    reply = "🎓 Cursos disponibles:\n👉 https://tusitio.com/cursos";
  } 
  else if (msg.includes("pdf")) {
    reply = "📄 Descarga el catálogo:\n👉 /docs/catalogo.pdf";
  } 
  else if (msg.includes("redes")) {
    reply = "📱 Instagram: https://instagram.com/tucliente";
  } 
  else if (msg.includes("comprar")) {
    reply = "💳 Compra aquí:\n👉 https://linkdepago.com";
  } 
  else {
    reply = "Hola 👋 escribe: cursos, pdf, redes o comprar";
  }

  res.json({ reply });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Servidor corriendo 🚀 en puerto " + PORT);
});