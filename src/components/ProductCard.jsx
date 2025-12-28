export default function ProductCard({ img, title, price }) {
  return (
    <div className="flex flex-col gap-2 p-3 border rounded-md">
      <img src={img} alt={title} className="w-full object-cover" />
      <h3 className="font-medium">{title}</h3>
      <p className="font-bold">${price}</p>
      <button className="py-1 border rounded-md w-full">
        Add to Cart
      </button>
    </div>
  );
}
