const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("public"));

app.post("/chat", (req, res) => {
  const msg = req.body.message.toLowerCase().trim();

 app.post("/chat", (req, res) => {
  const msg = req.body.message.toLowerCase();

  let reply = "";

  if (msg.includes("hola")) {
    reply = "👋 ¡Hola! ¿Buscas cursos, pdf o comprar?";
  }
  else if (msg.includes("curso")) {
    reply = "🎓 Tenemos cursos de marketing, IA y ventas 🚀";
  }
  else if (msg.includes("pdf")) {
    reply = "📄 Puedes descargar el catálogo aquí:\n👉 /docs/catalogo.pdf";
  }
  else if (msg.includes("precio")) {
    reply = "💰 Los precios empiezan desde $10";
  }
  else if (msg.includes("redes")) {
    reply = "📱 Síguenos en Instagram:\n👉 https://instagram.com/tucliente";
  }
  else if (msg.includes("comprar")) {
    reply = "💳 Compra aquí:\n👉 https://linkdepago.com";
  }
  else if (msg.includes("gracias")) {
    reply = "😊 ¡Con gusto! Estoy para ayudarte";
  }
  else {
    reply = "🤖 No entendí eso. Prueba con: cursos, precio, pdf o comprar";
  }

  res.json({ reply });
});
const PORT = process.env.PORT || 3001;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor corriendo en puerto ${PORT} 🚀`);
});