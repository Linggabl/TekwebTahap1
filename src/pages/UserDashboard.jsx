import { Link } from "react-router-dom";
import products from "../data/products.json"; // Mengimpor data produk

function UserDashboard() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-semibold mb-6">Dashboard User</h1>

      {/* Banner Section */}
      <div className="bg-blue-500 text-white p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-semibold">
          Temukan Semua Kebutuhan Bangunan Anda di Sini
        </h2>
        <p className="text-xl">
          Dapatkan produk berkualitas dengan harga terbaik!
        </p>
      </div>

      {/* Daftar Produk */}
      <h2 className="text-2xl font-semibold mb-4">Produk Tersedia</h2>
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
            <Link
              to={`/product-detail/${product.id}`}
              className="block mt-4 text-center text-white bg-blue-500 py-2 px-4 rounded-md hover:bg-blue-600"
            >
              Lihat Detail
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserDashboard;
