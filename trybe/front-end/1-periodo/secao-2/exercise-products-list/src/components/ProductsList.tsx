function ProductsList({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1>Lista de produtos</h1>
      <ul className="product-list">{children}</ul>
    </div>
  );
}

export default ProductsList;
