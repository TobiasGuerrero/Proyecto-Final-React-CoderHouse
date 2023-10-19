const Airtable = require('airtable');

// Configura tu token de acceso y el ID de la base de datos
const accessToken = process.env.REACT_APP_ACCESS_TOKEN;
const baseId = process.env.REACT_APP_BASE_ID;

// Crea una instancia de Airtable con tu token y base ID
const base = new Airtable({ apiKey: accessToken }).base(baseId);

// Define la tabla que deseas acceder
const productsTable = base('products');

// Función para obtener datos de Airtable
async function getProducts() {
  try {
    const records = await productsTable.select().all();

    if (records && records.length > 0) {
      // Mapear los registros para devolver solo los campos de cada producto
      const productos = records.map((record) => record.fields);
      return productos;
    } else {
      console.log("No se encontraron productos.");
      return []; // Devuelve un arreglo vacío si no se encuentran productos
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}

module.exports = { getProducts };
