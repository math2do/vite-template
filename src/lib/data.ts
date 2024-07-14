export type Phone = {
  image: string;
  name: string;
  price: number;
  id: number;
  quantity: number;
};

export const phones: Phone[] = [
  {
    id: 1,
    image: 'https://www.course-api.com/images/cart/phone-1.png',
    price: 399.99,
    name: 'Samsung Galaxy S8',
    quantity: 1,
  },
  {
    id: 2,
    image: 'https://www.course-api.com/images/cart/phone-2.png',
    price: 499.99,
    name: 'Google Pixel',
    quantity: 1,
  },
  {
    id: 3,
    image: 'https://www.course-api.com/images/cart/phone-3.png',
    price: 699.99,
    name: 'Xiaomi Redmi Note 2',
    quantity: 1,
  },
  {
    id: 4,
    image: 'https://www.course-api.com/images/cart/phone-4.png',
    price: 599.99,
    name: 'Samsung Galaxy S7',
    quantity: 1,
  },
];
