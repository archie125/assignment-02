const Products = [
  {
    id: 1,
    name: 'lenovo Phone',
    price: 10400,
  },
  {
    id: 2,
    name: 'iphone X',
    price: 74300,
  },
  {
    id: 3,
    name: 'mouse',
    price: 800,
  },
  {
    id: 4,
    name: 'keyboard',
    price: 1800,
  },
  {
    id: 5,
    name: 'sony headset',
    price: 19500,
  },
  {
    id: 6,
    name: 'acer laptop',
    price: 25400,
  },
];
const prodList = Products.map((prod) => prod.id);

const prod = Products.filter((prod) => prod.id);

console.log(Products);
