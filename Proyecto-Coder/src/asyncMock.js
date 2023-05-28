export const products = [
  {
    id: 1,
    category: 'PlayStation',
    brand: 'Sony',
    description: 'Consola de videojuegos PS5 de última generación',
    price: 249000.990,
    image: 'https://images.yaoota.com/MZZjuUE-xY9FU_ltZSfORqPiLfU=/trim/yaootaweb-production-ke/media/crawledproductimages/f043ecc3795351ea67a6719014f00f598e154ea5.jpg'
  },
  {
    id: 2,
    category: 'Xbox',
    brand: 'Microsoft',
    description: 'Consola de videojuegos Xbox Series X de última generación',
    price: 223499.99,
    image: 'https://i.blogs.es/526416/series/450_1000.jpg'
  },
  {
    id: 3,
    category: 'Nintendo',
    brand: 'Nintendo',
    description: 'Consola de videojuegos Switch Lite',
    price: 17999.99,
    image: 'https://image.coolblue.nl/max/500x500/products/1707101'
  },
  {
    id: 4,
    category: 'Family',
    brand: 'Family',
    description: 'Consola de videojuegos NES Classic Edition',
    price: 15659.99,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/NES-Console-Set.png/500px-NES-Console-Set.png'
  },
  {
    id: 5,
    category: 'PlayStation',
    brand: 'Sony',
    description: 'Auriculares para PS5',
    price: 17059.99,
    image: 'https://gmedia.playstation.com/is/image/SIEPDC/3d-pulse-headset-product-thumbnail-01-en-14sep21'
  },
  {
    id: 6,
    category: 'Xbox',
    brand: 'Microsoft',
    description: 'Mando Xbox Series X',
    price: 27059.99,
    image: 'https://http2.mlstatic.com/D_NQ_NP_603061-MLM31951620597_082019-O.jpg'
  },
  {
    id: 7,
    category: 'Nintendo',
    brand: 'Nintendo',
    description: 'Mando para Switch',
    price: 13249.99,
    image: 'https://m.media-amazon.com/images/I/61Tp18zZRIL._AC_SX569_.jpg'
  },
  {
    id: 8,
    category: 'Family',
    brand: 'Family',
    description: 'Mandos',
    price: 3229.99,
    image: 'https://http2.mlstatic.com/D_NQ_NP_798376-MLA45646412823_042021-V.jpg'
  }
];

// Función para agregar un producto al carrito
function addToCart(product) {
  // Lógica para agregar el producto al carrito
  console.log('Producto agregado al carrito:', product);
}
