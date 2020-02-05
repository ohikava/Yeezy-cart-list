import React, {useState,useEffect} from 'react';
import Spinner from '../Spinner/Spinner.js';
import ShelfHeader from "./ShelfHeader/ShelfHeader.js";
import ProductList from "./ProductList/ProductList.js";
import { fetchProducts } from '../../services/shelf/actions.js';
import "./styles.scss";
import  {useSelector,useDispatch} from 'react-redux';


const Shelf = () => {
  const dispatch = useDispatch();
  const filters = useSelector(s => s.filter).items;
  const products =  useSelector(s => s.shelf).products;
  const sort = useSelector(state => state.sort.type);

  useEffect(() => {
    dispatch(fetchProducts(filters, sort, null));
  });

  const [isLoading, changeLoad] = useState(true);

  return <>
    {isLoading ? <Spinner /> : ' '}
    <div className="shelf-container">
      <ShelfHeader productsLength={products.length}/>
      <ProductList products={products} />
    </div>
  </>
}

export default Shelf;
