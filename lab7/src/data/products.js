export const MOCK_PRODUCTS = [
  {
    id: 1,
    title: 'Fjallraven - Foldsack No. 1 Backpack',
    price: 109.95,
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    description: 'Your perfect pack for everyday use and walks in the forest.',
  },
  {
    id: 2,
    title: 'Mens Casual Premium Slim Fit T-Shirts',
    price: 22.3,
    category: "men's clothing",
    image:
      'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
    description: 'Slim-fitting style, contrast raglan long sleeve.',
  },
  {
    id: 3,
    title: 'Mens Cotton Jacket',
    price: 55.99,
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
    description: 'Great outerwear jackets for Spring/Autumn/Winter.',
  },
  {
    id: 4,
    title: 'Mens Casual Slim Fit',
    price: 15.99,
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
    description:
      'The color could be slightly different between on the screen and in practice.',
  },
  {
    id: 5,
    title:
      "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695,
    category: 'jewelery',
    image: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
    description:
      'From our Legends Collection, the Naga was inspired by the mythical water dragon.',
  },
  {
    id: 6,
    title: 'Solid Gold Petite Micropave',
    price: 168,
    category: 'jewelery',
    image: 'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg',
    description:
      'Satisfaction Guaranteed. Return or exchange any order within 30 days.',
  },
  {
    id: 7,
    title: 'White Gold Plated Princess',
    price: 9.99,
    category: 'jewelery',
    image: 'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg',
    description:
      'Classic Created Wedding Engagement Solitaire Diamond Promise Ring.',
  },
  {
    id: 8,
    title: 'Pierced Owl Rose Gold Plated Stainless Steel Double',
    price: 10.99,
    category: 'jewelery',
    image: 'https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg',
    description: 'Rose Gold Plated Double Flared Tunnel Plug Earrings.',
  },
  {
    id: 9,
    title: 'WD 2TB Elements Portable External Hard Drive',
    price: 64,
    category: 'electronics',
    image: 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg',
    description: 'USB 3.0 and USB 2.0 compatibility fast data transfers.',
  },
  {
    id: 10,
    title: 'SanDisk SSD PLUS 1TB Internal SSD',
    price: 109,
    category: 'electronics',
    image: 'https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg',
    description: 'Easy upgrade for faster boot up and application load.',
  },
];

export const formatPrice = price => {
  if (price == null || isNaN(price)) {
    return '$0.00';
  }
  return `$${Number(price).toFixed(2)}`;
};
