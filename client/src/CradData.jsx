import React from "react";

// Sample JSON data (your products array)
const products = [
  {
    id: 8069504139446,
    title: "Gift Card",
    body_html: "This is a gift card for the store",
    vendor: "Snowboard Vendor",
    product_type: "giftcard",
    images: [
      {
        src: "https://cdn.shopify.com/s/files/1/0663/1617/3494/files/gift_card.png?v=1725800144",
        alt: "Gift card that shows text: Generated data gift card",
      },
    ],
    variants: [
      { id: 43453956128950, title: "$10", price: "10.00" },
      { id: 43453956227254, title: "$25", price: "25.00" },
    ],
  },
  {
    id: 8069504434358,
    title: "Selling Plans Ski Wax",
    vendor: "Quickstart (3ca9dfc0)",
    product_type: "accessories",
    images: [
      {
        src: "https://cdn.shopify.com/s/files/1/0663/1617/3494/files/snowboard_wax.png?v=1725800147",
        alt: "A bar of golden yellow wax",
      },
    ],
    variants: [
      { id: 43453956620470, title: "Selling Plans Ski Wax", price: "24.95" },
      {
        id: 43453956653238,
        title: "Special Selling Plans Ski Wax",
        price: "49.95",
      },
    ],
  },
];

// Card component to render individual product
const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg shadow-lg p-4 w-64 m-4">
      <img
        src={product.images[0]?.src}
        alt={product.images[0]?.alt}
        className="w-full h-48 object-cover"
      />
      <h2 className="text-xl font-bold mt-2">{product.title}</h2>
      <p className="text-gray-700 mt-1">{product.vendor}</p>
      <p className="text-gray-600 mt-2">
        Starting at: ${product.variants[0].price}
      </p>
      <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg hover:bg-blue-600">
        View Product
      </button>
    </div>
  );
};

// Main component to render all products
const ProductList = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
