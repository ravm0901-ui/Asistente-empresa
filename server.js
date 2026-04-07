const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("public"));

app.post("/chat", (req, res) => {
  const msg = req.body.message.toLowerCase().trim();

  let reply = "";

  if (msg.includes("curso") || msg.includes("cursos")) {
    reply = "🎓 Cursos disponibles:\n👉 https://tusitio.com/cursos\n¿Te interesa algún curso específico?";
  } 
  else if (msg.includes("pdf") || msg.includes("catálogo")) {
    reply = "📄 Descarga el catálogo:\n👉 /docs/catalogo.pdf\n¿Necesitas ayuda con algo más?";
  } 
  else if (msg.includes("redes") || msg.includes("sociales")) {
    reply = "📱 Síguenos en redes:\nInstagram: https://instagram.com/tucliente\nFacebook: https://facebook.com/tucliente";
  } 
  else if (msg.includes("comprar") || msg.includes("compra")) {
    reply = "💳 Compra aquí:\n👉 https://linkdepago.com\n¿Quieres más detalles sobre productos?";
  } 
  else if (msg.includes("hola") || msg.includes("hi")) {
    reply = "Hola 👋 ¿En qué puedo ayudarte? Escribe: cursos, pdf, redes o comprar";
  }
  else if (msg.includes("gracias")) {
    reply = "¡De nada! 😊 ¿Algo más?";
  }
  else {
    reply = "Lo siento, no entendí. Escribe: cursos, pdf, redes o comprar";
  }

  res.json({ reply });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor corriendo en puerto ${PORT} 🚀`);
});