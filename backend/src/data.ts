import bcrypt from 'bcryptjs'
import { User } from './models/userModel'
import { Product } from './models/productModel'

export const sampleProducts: Product[] = [
  {
    name: 'Canon 90D',
    slug: 'Canon-90D',
    category: 'Canon',
    image: '../images/90d.png',
    price: 19999,
    countInStock: 10,
    brand: 'Canon',
    rating: 4.5,
    numReviews: 10,
    description: 'high quality shirt',
  },
  {
    name: 'Canon 2000D',
    slug: '2000D',
    category: 'Canon',
    image: '../images/2000D.png',
    price: 5999,
    countInStock: 20,
    brand: 'Canon',
    rating: 4.0,
    numReviews: 10,
    description: 'high quality product',
  },
  {
    name: 'Nikon D5300',
    slug: 'Nikon-D5300',
    category: 'Nikon',
    image: '../images/NIKOND5300.png',
    price: 6999,
    countInStock: 0,
    brand: 'Nikon',
    rating: 4.8,
    numReviews: 17,
    description: 'high quality product',
  },
  {
    name: 'Nikon D5600',
    slug: 'NikonD5600',
    category: 'Nikon',
    image: '../images/NikonD5600.png',
    price: 7999,
    countInStock: 15,
    brand: 'Nikon',
    rating: 4.5,
    numReviews: 14,
    description: 'high quality product',
  },
]

export const sampleUsers: User[] = [
  {
    name: 'Joe',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456'),
    isAdmin: true,
  },
  {
    name: 'John',
    email: 'user@example.com',
    password: bcrypt.hashSync('123456'),
    isAdmin: false,
  },
]
