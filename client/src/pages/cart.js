import React from 'react';
import Layout from '../components/layout/Layout';

const Cart = () => {
  const cartItems = [
    {
      id: 1,
      name: 'Stylish Sneakers',
      price: 79.99,
      quantity: 1,
      image: 'https://via.placeholder.com/80',
    },
    {
      id: 2,
      name: 'Casual T-Shirt',
      price: 24.99,
      quantity: 2,
      image: 'https://via.placeholder.com/80',
    },
    // Add more items as needed
  ];

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const subtotal = calculateSubtotal();
  const tax = subtotal * 0.07; // Assuming 7% tax
  const total = subtotal + tax;

  return (
    <Layout>
        <div className="bg-gray-50 min-h-screen p-6">
      <h1 className="text-4xl font-bold text-center text-purple-700 mb-10">Your Shopping Cart</h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="bg-white shadow-lg rounded-lg p-6">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center mb-6">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-md"
                />
                <div className="ml-4 flex-1">
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p className="text-gray-500">Price: ${item.price.toFixed(2)}</p>
                  <p className="text-gray-500">Quantity: {item.quantity}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold text-purple-700">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <button className="mt-2 text-red-600 hover:text-red-800">Remove</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Summary Section */}
        <div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>
            <div className="flex justify-between mb-4">
              <span className="text-gray-600">Subtotal</span>
              <span className="text-gray-600">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="text-gray-600">Tax (7%)</span>
              <span className="text-gray-600">${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-6">
              <span className="text-lg font-bold">Total</span>
              <span className="text-lg font-bold">${total.toFixed(2)}</span>
            </div>
            <button className="w-full bg-purple-700 text-white py-3 rounded-md hover:bg-purple-800">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default Cart;
