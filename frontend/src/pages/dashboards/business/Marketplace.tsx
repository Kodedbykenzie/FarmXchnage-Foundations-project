import React, { useState } from 'react';

// Mock product data with images
const initialProducts = [
  { id: 1, name: 'Fresh Tomatoes', quantityKg: 50, image: 'https://img.freepik.com/free-photo/fresh-red-tomatoes_2829-13449.jpg?t=st=1742667897~exp=1742671497~hmac=04abea3d40837a509114999b7faf1ed2de3c7381891a7eec5f586bcf38043508&w=1380' },
  { id: 2, name: 'Organic Potatoes', quantityKg: 30, image: 'https://img.freepik.com/free-photo/close-up-potatoes-floor_23-2148540364.jpg?t=st=1742669321~exp=1742672921~hmac=7fbf991d86d66099a6e7903c6b0d283e7db185c8ab4bece721ed057ad0320440&w=2000' },
  { id: 3, name: 'Sweet Carrots', quantityKg: 20, image: 'https://img.freepik.com/free-photo/fresh-carrots-white-background_1127-244.jpg?t=st=1742669443~exp=1742673043~hmac=6a136a1ef0598a7e23b35648c6169e4a9f73f7c56bb4b52b12b16dddc47f45a8&w=2000' },
  { id: 4, name: 'Ripe Bananas', quantityKg: 40, image: 'https://img.freepik.com/free-vector/vector-ripe-yellow-banana-bunch-isolated-white-background_1284-45456.jpg?t=st=1742669489~exp=1742673089~hmac=2be498b00769f861d8b64398c6f2994a7662efda33716493bbbecd3bd0af70fb&w=1800' },
  { id: 5, name: 'Juicy Oranges', quantityKg: 25, image: 'https://img.freepik.com/free-photo/healthy-fruit-oranges-market-stall-oranges-surface_176474-493.jpg?t=st=1742669524~exp=1742673124~hmac=2de8f4d975310e8b20e222d995d3e68d49987de830eccc33fcd4d67f413c6440&w=2000' },
  { id: 6, name: 'Green Apples', quantityKg: 35, image: 'https://img.freepik.com/free-photo/top-view-bunch-apples_23-2148795855.jpg?t=st=1742669544~exp=1742673144~hmac=c531411a79368d14f999de44b9de38cbdd10654b1bce9b309af3bfa6eea1857a&w=2000' },
];

export function Marketplace() {
  const [products, setProducts] = useState(initialProducts);
  const [newProduct, setNewProduct] = useState({ name: '', quantityKg: '', image: '' });

  // Add a new product
  const handleAddProduct = () => {
    if (newProduct.name && newProduct.quantityKg && newProduct.image) {
      const product = {
        id: products.length + 1,
        name: newProduct.name,
        quantityKg: parseFloat(newProduct.quantityKg),
        image: newProduct.image,
      };
      setProducts([...products, product]);
      setNewProduct({ name: '', quantityKg: '', image: '' }); // Reset form
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div className="p-6">
      {/* Header with Add Button */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">My Products</h1>
        <button
          onClick={() => {
            const modal = document.getElementById('addProductModal') as HTMLDialogElement | null;
            if (modal) modal.showModal();
          }}
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300"
        >
          Add New Product
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h2 className="text-lg font-semibold text-gray-900">{product.name}</h2>
            <p className="text-gray-600">{product.quantityKg} kg</p>
          </div>
        ))}
      </div>

      {/* Add Product Modal */}
      <dialog id="addProductModal" className="p-6 rounded-lg shadow-md backdrop:bg-gray-900 backdrop:opacity-50">
        <h2 className="text-xl font-semibold mb-4">Add New Product</h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Product Name"
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          <input
            type="number"
            placeholder="Quantity (kg)"
            value={newProduct.quantityKg}
            onChange={(e) => setNewProduct({ ...newProduct, quantityKg: e.target.value })}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          <input
            type="text"
            placeholder="Image URL"
            value={newProduct.image}
            onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          <div className="flex justify-end gap-4">
            <button
              onClick={() => {
                const modal = document.getElementById('addProductModal') as HTMLDialogElement | null;
                if (modal) modal.close();
              }}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition duration-300"
            >
              Cancel
            </button>
            <button
              onClick={handleAddProduct}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300"
            >
              Add Product
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
}