import { useContext } from "react";
import { ProductsContext } from "../../context/products.context";
import CategoryPreview from "../../components/category-preview/category-preview.component";

const CategoriesPreview = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="shop-container">
      {Object.keys(products).map((key) => {
        const prods = products[key];
        return <CategoryPreview key={key} title={key} products={prods} />;
      })}
    </div>
  );
};

export default CategoriesPreview;
