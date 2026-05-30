// =============================================
//  Prueba de la ruta POST /reporte
//  Ejecutar con: node probar_reporte.js
// =============================================

//const fetch = require("node-fetch"); // npm install node-fetch@2  (si usas Node sin ESM)
// Si ya tienes Node 18+ puedes borrar la línea de arriba; fetch ya viene incluido.

const URL_SERVIDOR = "http://localhost:3000/reporte"; // Cambia el puerto si tu servidor usa otro

const datos = {
  mensaje: "Hola, este es un reporte de prueba enviado desde JavaScript",
};

async function enviarReporte() {
  console.log("📤 Enviando reporte a:", URL_SERVIDOR);
  console.log("📦 Datos:", datos);

  try {
    const respuesta = await fetch(URL_SERVIDOR, {
      method: "POST",                        // Método POST
      headers: {
        "Content-Type": "application/json",  // Le decimos al servidor que mandamos JSON
      },
      body: JSON.stringify(datos),           // Convertimos el objeto JS a texto JSON
    });

    // Verificamos que el servidor respondió OK
    if (!respuesta.ok) {
      throw new Error(`Error del servidor: ${respuesta.status} ${respuesta.statusText}`);
    }

    const json = await respuesta.json();     // Leemos la respuesta como JSON

    console.log("\n✅ Respuesta del servidor:");
    console.log("   estado :", json.estado);
    console.log("   mensaje:", json.mensaje);
  } catch (error) {
    console.error("\n❌ Error al conectar con el servidor:", error.message);
    console.error("   Asegúrate de que tu servidor Express esté corriendo.");
  }
}

enviarReporte();