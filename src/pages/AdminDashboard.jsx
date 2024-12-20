import { Link } from "react-router-dom";
import products from "../data/products.json"; // Mengimpor data produk

function AdminDashboard() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-semibold mb-6">Dashboard Admin</h1>

      {/* Overview section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-blue-100 p-4 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-semibold">Total Produk</h3>
          <p className="text-2xl font-bold">{products.length} items</p>
        </div>
        <div className="bg-green-100 p-4 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-semibold">Total Penjualan</h3>
          <p className="text-2xl font-bold">Rp 1,250,000</p>
        </div>
        <div className="bg-yellow-100 p-4 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-semibold">Produk Terlaris</h3>
          <p className="text-2xl font-bold">Semen ABC</p>
        </div>
      </div>

      {/* Manajemen Produk */}
      <h2 className="text-2xl font-semibold mb-4">Manajemen Produk</h2>
      <div className="mb-4">
        <Link
          to="/add-product"
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Tambah Produk
        </Link>
      </div>

      {/* Daftar Produk */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-500 mb-2">{product.description}</p>
            <div className="flex justify-between items-center">
              <p className="font-semibold text-blue-500">Rp {product.price}</p>
              <p className="text-gray-600">Stok: {product.stock} pcs</p>
            </div>
            <div className="mt-4 flex justify-between">
              <Link
                to={`/product-detail/${product.id}`}
                className="text-blue-500 hover:underline"
              >
                Lihat Detail
              </Link>
              <button className="text-red-500 hover:underline">
                Hapus Produk
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminDashboard;
