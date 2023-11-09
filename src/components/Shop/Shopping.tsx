import FilterBar from "./FilterBar";
import ProductList from "./ProductList";

const Shopping = () => {
  return (
    <>
      <div className="container-lg d-flex">
        <FilterBar />
        <ProductList filter_key={0} />
      </div>
    </>
  );
};

export default Shopping;
