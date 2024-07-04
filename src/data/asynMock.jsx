export const productos = [
    {
        id: 1,
        nombre: "Hart®",
        precio: 8500,
        categoria: "Cardiometabolic",
        droga: "Diltiazem clorhidrato",
        stock: 5,
        descripcion: "Calcium antagonist with antianginal and antihypertensive effect",
        img: "https://www.teva.com.ar/globalassets/argentina/product-images-vision/hart.jpg",
    },
    {
        id: 2,
        nombre: "Artomey®",
        precio: 6400,
        categoria: "Cardiometabolic",
        droga: "Rosuvastatin",
        stock: 5,
        descripcion: "Hipolipemiante",
        img: "https://www.teva.com.ar/globalassets/argentina/product-images-vision/artomey.jpg",
    },
    {
        id: 3,
        nombre: "Dexalergin®",
        precio: 7600,
        categoria: "Respiratory&Anti-staminic",
        droga: "Dexametasona/ Maleato de Clorfeniramina",
        stock: 5,
        descripcion: "Corticosteroid and antihistamine for systemic use",
        img: "https://www.teva.com.ar/globalassets/argentina/product-images-vision/dexalergin-comprimidos-recubiertos.jpg",
    },
    {
        id: 4,
        nombre: "Griseocrem® NF",
        precio: 9900,
        categoria: "Respiratory&Anti-staminic",
        stock: 5,
        descripcion: "Antibiotic, antifungal and corticosteroid for topical use",
        img: "https://www.teva.com.ar/globalassets/argentina/product-images-vision/griseocrem-nf.jpg",
    },
    {
        id: 5,
        nombre: "Keforal®",
        precio: 12900,
        categoria: "Antibiotics",
        stock: 5,
        descripcion: "Infectology",
        img: "https://www.teva.com.ar/globalassets/argentina/product-images-vision/keforal---comprimidos-y-suspension.jpg",
    },
    {
        id: 6,
        nombre: "Abelcet®",
        precio: 17900,
        categoria: "Antibiotics",
        stock: 5,
        descripcion: "Antifungal for systemic use",
        img: "https://www.teva.com.ar/globalassets/argentina/product-images-vision/abelcet.jpg",
    },
    {
        id: 7,
        nombre: "Axual®",
        precio: 23900,
        categoria: "Psychotropic",
        stock: 5,
        descripcion: "Antiepileptic",
        img: "https://www.teva.com.ar/globalassets/argentina/product-images-vision/axual-150mg.jpg",
    },
    {
        id: 8,
        nombre: "Escitalopram Teva®",
        precio: 14900,
        categoria: "Psychotropic",
        stock: 5,
        descripcion: "Antidepressant",
        img: "https://www.teva.com.ar/globalassets/argentina/product-images-vision/escitalopram-teva.jpg",
    },
    {
        id: 9,
        nombre: "Lansoprazol Teva®",
        precio: 4900,
        categoria: "Gastroenterology",
        stock: 5,
        descripcion: "Selective proton pump inhibitor",
        img: "https://www.teva.com.ar/globalassets/argentina/product-images-vision/lansoprazol-teva.jpg",
    },
    {
        id: 10,
        nombre: "Procelac®",
        precio: 7900,
        categoria: "Gastroenterology",
        stock: 5,
        descripcion: "Inhibitor of gastric acid secretion by blocking the proton pump.",
        img: "https://www.teva.com.ar/globalassets/argentina/product-images-vision/procelac.jpg",
    },
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 2000);
    });
};

export const getProductsByCategory = (categoria) => {
    return new Promise((resolve) => {
        const productosFiltrados = productos.filter((prod) => prod.categoria === categoria);
        setTimeout(() => {
            resolve(productosFiltrados);
        }, 2000);
    });
};

export const getProductsById = (id) => {
    return new Promise((resolve) => {
        const detalleProducto = productos.find((prod) => prod.id === parseInt(id));
        setTimeout(() => {
            resolve(detalleProducto);
        }, 2000);
    });
};
