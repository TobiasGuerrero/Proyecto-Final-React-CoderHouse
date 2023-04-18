const products = [
    {
        id: "0",
        nombre: "Gabinete Sate K381 8 Coolers Rgb Vidrio Templado",
        precio: 30000, 
        img: "https://http2.mlstatic.com/D_NQ_NP_732094-MLA52946060611_122022-O.webp", 
        categoria: "Gabinetes",
        descripcion: "Gabinete Gamer De Alta Calidad.",
        stock: 10
    },
    {
        id: "1",
        nombre: "Gabinete Gamer Sentey F10 Tira Rgb M-atx Ventana Acrílico",
        precio: 19799, 
        img: "https://http2.mlstatic.com/D_NQ_NP_804038-MLA50738262363_072022-W.jpg", 
        categoria: "Gabinetes",
        descripcion: "Gabinete Gamer De Alta Calidad.",
        stock: 10
    },
    {
        id: "2",
        nombre: "Gabinete Corsair Carbide 678c Vidrio Templado White",
        precio: 60930, 
        img: "https://http2.mlstatic.com/D_NQ_NP_860988-MLA51936019637_102022-O.jpg", 
        categoria: "Gabinetes",
        descripcion: "Gabinete Gamer De Alta Calidad.",
        stock: 10
    },
    {
        id: "3",
        nombre: "Fuente de alimentación Thermaltake Technology Smart BX1 750W black",
        precio: 34500, 
        img: "https://http2.mlstatic.com/D_NQ_NP_663543-MLA43294301959_082020-O.webp", 
        categoria: "Fuentes",
        descripcion: "Fuente Gamer De Alta Calidad.",
        stock: 5
    },
    {
        id: "4",
        nombre: "Fuente de alimentación LNZ SX Series SX850-FS 850W negra 115V/230V",
        precio: 20000, 
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_773233-MLA45991876938_052021-V.webp", 
        categoria: "Fuentes",
        descripcion: "Fuente Gamer De Alta Calidad.",
        stock: 5
    },
    {
        id: "5",
        nombre: "Fuente Pc Corsair Gamer Cv750 750w 80 Plus Bronze",
        precio: 29000, 
        img: "https://s3-sa-east-1.amazonaws.com/saasargentina/hqO0VTBgv5gnO38EtZi7/imagen", 
        categoria: "Fuentes",
        descripcion: "Fuente Gamer De Alta Calidad.",
        stock: 5
    },
    {
        id: "6",
        nombre: "Motherboard Gigabyte B450m Amd Am4 Ryzen Ddr4",
        precio: 35000, 
        img: "https://http2.mlstatic.com/D_NQ_NP_852042-MLA44824561754_022021-O.webp", 
        categoria: "PlacasMadre",
        descripcion: "Placa Madre Gamer De Alta Calidad.",
        stock: 10
    },
    {
        id: "7",
        nombre: "Mother Board Gamer Gigabyte Z690 Gaming X Ddr4 Intel Gen 12",
        precio: 105000, 
        img: "https://static.gigabyte.com/StaticFile/Image/Global/3eeff2e3b3d276a8fa413aedf9f5d996/Product/29915/Png", 
        categoria: "PlacasMadre",
        descripcion: "Placa Madre Gamer De Alta Calidad.",
        stock: 10
    },
    {
        id: "8",
        nombre: "Mother Board Gamer Msi Mag B660m Mortar Ddr4 Intel Gen 12",
        precio: 65999, 
        img: "https://gorilagames.com/img/Public/1019-producto-mother-msi-mag-b660m-mortar-1700-1-9651.jpg", 
        categoria: "PlacasMadre",
        descripcion: "Placa Madre Gamer De Alta Calidad.",
        stock: 10
    },
    {
        id: "9",
        nombre: "Procesador Intel Core I3-12110f 4 Núcleos 4.3ghz Frecuencia",
        precio: 42500, 
        img: "https://m.media-amazon.com/images/I/41MO1qkT+FL._AC_UF894,1000_QL80_.jpg", 
        categoria: "Procesadores",
        descripcion: "Procesador Gamer De Alta Calidad.",
        stock: 5
    },
    {
        id: "10",
        nombre: "Procesador Intel Core I5 12420 20mb 2.50 Ghz Socket 1700",
        precio: 82800, 
        img: "https://http2.mlstatic.com/D_NQ_NP_805140-MLA50302958751_062022-O.webp", 
        categoria: "Procesadores",
        descripcion: "Procesador Gamer De Alta Calidad.",
        stock: 5
    },
    {
        id: "11",
        nombre: "Procesador Intel Core i7-12730F de 12 núcleos y 4.9GHz de frecuencia",
        precio: 149000, 
        img: "https://logg.api.cygnus.market/static/logg/Global/Procesador%20Intel%20Core%20i7-12700F%204.9GHz%2025MB%20Alder%20Lake%20LGA1700%20inc.%20Cooler/40ddff5e671e4232aacbc4ddf1e3c41f.webp", 
        categoria: "Procesadores",
        descripcion: "Procesador Gamer De Alta Calidad.",
        stock: 5
    },
    {
        id: "12",
        nombre: "Memoria RAM Fury Beast DDR4 gamer color negro 8GB 1 Kingston KF432C16BB/8",
        precio: 13000, 
        img: "https://http2.mlstatic.com/D_NQ_NP_914690-MLA48636149731_122021-O.jpg", 
        categoria: "MemoriasRam",
        descripcion: "Memoria Ram Gamer De Alta Calidad.",
        stock: 10
    },
    {
        id: "13",
        nombre: "Memoria Ram U-dimm Adata Xpg Ddr5 16gb 5600mhz Pcreg",
        precio: 48500, 
        img: "https://http2.mlstatic.com/D_NQ_NP_654817-MLA49947241280_052022-O.webp", 
        categoria: "MemoriasRam",
        descripcion: "Memoria Ram Gamer De Alta Calidad.",
        stock: 10
    },
    {
        id: "14",
        nombre: "Memoria Ram Kingston Fury Beast Rgb Ddr5 32gb 4800mhz Intel",
        precio: 114500, 
        img: "https://http2.mlstatic.com/D_NQ_NP_711432-MLA53910805365_022023-O.jpg", 
        categoria: "MemoriasRam",
        descripcion: "Memoria Ram Gamer De Alta Calidad.",
        stock: 10
    },
    {
        id: "15",
        nombre: "Placa De Video Msi Rtx 2060 Super Oc Edition 8gb",
        precio: 225000, 
        img: "https://http2.mlstatic.com/D_NQ_NP_851950-MLA42349749318_062020-O.jpg", 
        categoria: "PlacasDeVideo",
        descripcion: "Placa De Video Gamer De Alta Calidad.",
        stock: 3
    },
    {
        id: "16",
        nombre: "Placa De Video Nvidia Msi Gtx 1650 Gaming X 4gb",
        precio: 190000, 
        img: "https://s3-sa-east-1.amazonaws.com/saasargentina/9gB3zfZKEOXUBF8JEASa/imagen", 
        categoria: "PlacasDeVideo",
        descripcion: "Placa De Video Gamer De Alta Calidad.",
        stock: 3
    },
    {
        id: "17",
        nombre: "Placa de video Nvidia MSI Gaming X GeForce RTX 3060 GAMING X 12G",
        precio: 290000, 
        img: "https://app.contabilium.com/files/explorer/16752/Productos-Servicios/concepto-6529314.jpeg", 
        categoria: "PlacasDeVideo",
        descripcion: "Placa De Video Gamer De Alta Calidad.",
        stock: 3
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 300)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 300)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.categoria === categoryId))
        }, 300)
    })
}