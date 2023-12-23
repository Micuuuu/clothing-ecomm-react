import { useContext, useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';

import ProductCard from '../../components/product-card/product-card.component';

import { ProductsContext } from '../../context/products.context';

import './category.styles.scss';

const Category = () => {
  const { category } = useParams();
  const { products } = useContext(ProductsContext);
  const [prods, setProducts] = useState(products[category]);

  useEffect(() => {
    setProducts(products[category]);
  }, [category, products]);

  return (
    <Fragment>
      <h2 className='category-title'>{category.toUpperCase()}</h2>
      <div className='category-container'>
        {prods &&
          prods.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </Fragment>
  );
};

export default Category;
