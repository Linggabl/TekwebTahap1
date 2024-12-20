import { useParams } from "react-router-dom";
import products from "../data/products.json";

function ProductDetail() {
  const { productId } = useParams();
  const product = products.find((p) => p.id === parseInt(productId));

  return (
    <div className="p-8">
      <h1 className="text-3xl font-semibold mb-4">Detail Produk</h1>
      {product ? (
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover rounded-md mb-6"
          />
          <h2 className="text-2xl font-semibold mb-4">{product.name}</h2>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-blue-500 text-lg">Harga: Rp {product.price}</p>
          <p className="text-gray-600">Stok: {product.stock} pcs</p>
          <button className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
            Tambahkan ke Keranjang
          </button>
        </div>
      ) : (
        <p>Produk tidak ditemukan.</p>
      )}
    </div>
  );
}

export default ProductDetail;
