// src/pages/Homepage.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { ShoppingCartIcon } from '@heroicons/react/outline'; // Ensure @heroicons/react is installed
import { useAuth } from '../context/auth';

// Updated categories with relevant images
const categories = [
  {
    id: 1,
    name: 'Electronics',
    image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
    link: '/categories/electronics',
  },
  {
    id: 2,
    name: 'Fashion',
    image: 'https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
    link: '/categories/fashion',
  },
  {
    id: 3,
    name: 'Home & Garden',
    image: 'https://images.pexels.com/photos/569877/pexels-photo-569877.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
    link: '/categories/home-garden',
  },
  {
    id: 4,
    name: 'Sports',
    image: 'https://images.pexels.com/photos/4734855/pexels-photo-4734855.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
    link: '/categories/sports',
  },
];

// Updated products with more related images
const products = [
  {
    id: 1,
    name: 'Smartphone',
    price: '$299.99',
    image: 'https://images.pexels.com/photos/4610770/pexels-photo-4610770.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
    link: '/product/1',
  },
  {
    id: 2,
    name: 'Headphones',
    price: '$99.99',
    image: 'https://images.pexels.com/photos/3394657/pexels-photo-3394657.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
    link: '/product/2',
  },
  {
    id: 3,
    name: 'Watch',
    price: '$199.99',
    image: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
    link: '/product/3',
  },
  {
    id: 4,
    name: 'Backpack',
    price: '$49.99',
    image: 'https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
    link: '/product/4',
  },
  {
    id: 5,
    name: 'Laptop',
    price: '$899.99',
    image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400&h=300',
    link: '/product/5',
  },
  {
    id: 6,
    name: 'Sneakers',
    price: '$79.99',
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
    link: '/product/6',
  },
  {
    id: 7,
    name: 'Camera',
    price: '$499.99',
    image: 'https://images.pexels.com/photos/160200/pexels-photo-160200.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
    link: '/product/7',
  },
  {
    id: 8,
    name: 'Gaming Console',
    price: '$399.99',
    image: 'https://images.pexels.com/photos/400940/pexels-photo-400940.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
    link: '/product/8',
  },
];

const testimonials = [
  {
    id: 1,
    name: 'Jane Doe',
    feedback: 'LIVECART has an amazing selection of products and excellent customer service!',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    id: 2,
    name: 'John Smith',
    feedback: 'I found everything I needed for my home garden. Highly recommend!',
    avatar: 'https://randomuser.me/api/portraits/men/65.jpg',
  },
  {
    id: 3,
    name: 'Alice Johnson',
    feedback: 'Great prices and fast shipping. Will definitely shop again.',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
];

const Homepage = () => {
  const[auth,setAuth]=useAuth()

  return (
    <Layout>
      <p>{JSON.stringify(auth,null,4)}</p>
      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: 'url("https://images.pexels.com/photos/3205561/pexels-photo-3205561.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080")' }}
      >
        <div className="bg-black bg-opacity-50 p-10 rounded-lg text-center max-w-xl w-full">
          <h1 className="text-5xl font-bold mb-5">Welcome to LIVECART</h1>
          <p className="text-lg mb-8">
            Discover our exclusive collection of products tailored just for you.
          </p>
          <NavLink
            to="/products"
            className="bg-blue-500 px-6 py-3 rounded-full text-white font-semibold hover:bg-blue-600 transition"
          >
            Shop Now
          </NavLink>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-20 bg-white">
        <div className="container mx-auto px-5">
          <h2 className="text-4xl font-bold text-center mb-10">Shop by Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {categories.map((category) => (
              <NavLink to={category.link} key={category.id} className="group">
                <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition">
                  <img
                    src={category.image}
                    alt={category.name}
                    onError={(e) => e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Available'}
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <span className="text-white text-xl font-semibold">{category.name}</span>
                  </div>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="featured-products" className="py-20 bg-gray-100">
        <div className="container mx-auto px-5">
          <h2 className="text-4xl font-bold text-center mb-10">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                <NavLink to={product.link}>
                  <img
                    src={product.image}
                    alt={product.name}
                    onError={(e) => e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Available'}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                </NavLink>
                <div className="p-5">
                  <NavLink to={product.link}>
                    <h3 className="text-lg font-bold mb-2 hover:text-blue-600 transition">{product.name}</h3>
                  </NavLink>
                  <p className="text-gray-700 mb-4">{product.price}</p>
                  <NavLink
                    to={product.link}
                    className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
                  >
                    <ShoppingCartIcon className="h-5 w-5 mr-2" />
                    View Details
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-5">
          <h2 className="text-4xl font-bold text-center mb-10">What Our Customers Say</h2>
          <div className="space-y-8 max-w-3xl mx-auto">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="flex items-center space-x-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  onError={(e) => e.target.src = 'https://via.placeholder.com/64?text=Avatar'}
                  className="w-16 h-16 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="text-gray-700 italic">"{testimonial.feedback}"</p>
                  <p className="mt-2 font-semibold text-gray-900">{testimonial.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section id="newsletter" className="py-20 bg-gray-100">
        <div className="container mx-auto px-5 text-center">
          <h2 className="text-4xl font-bold mb-5">Stay Updated</h2>
          <p className="text-lg mb-8">
            Subscribe to our newsletter to receive the latest updates and exclusive offers.
          </p>
          <form className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Homepage;
