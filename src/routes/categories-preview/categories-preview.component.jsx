import CategoryPreview from "../../components/category-preview/category-preview.component";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/category.selector";

const CategoriesPreview = () => {
  const products = useSelector(selectCategoriesMap);

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
