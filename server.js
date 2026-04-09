const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("public"));

// Ruta del chat
app.post("/chat", (req, res) => {
  const msg = req.body.message.toLowerCase();

  let reply = "No entendí 🤔";

  if (msg.includes("hola")) {
    reply = "Hola 👋 ¿Cómo estás?";
  } else if (msg.includes("cursos")) {
    reply = "Tenemos cursos de programación 🚀";
  } else if (msg.includes("pdf")) {
    reply = "Aquí tienes un PDF: ejemplo.com/pdf";
  } else if (msg.includes("redes")) {
    reply = "Síguenos en Instagram 📸";
  } else if (msg.includes("comprar")) {
    reply = "Puedes comprar aquí: ejemplo.com/tienda";
  }

  res.json({ reply });
});

// Servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Servidor corriendo en puerto " + PORT);
});