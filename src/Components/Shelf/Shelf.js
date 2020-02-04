import React, {useState} from 'react';
import Spinner from '../Spinner/Spinner.js';
import ShelfHeader from "./ShelfHeader/ShelfHeader.js";
import ProductList from "./ProductList/ProductList.js";
import { fetchProducts } from '../../services/shelf/actions.js';
import "./styles.scss";
import  {useSelector,useDispatch} from 'react-redux';


const Shelf = () => {
  const dispatch = useDispatch();

  dispatch(fetchProducts(null, null, null)).then(t => console.log(t));
  const sort = useSelector(state => state.sort.type);
  const [isLoading, changeLoad] = useState(true);

  return <>
    {isLoading ? <Spinner /> : ' '}
    <div className="shelf-container">
      <ShelfHeader productsLength={17}/>
    </div>
  </>
}

export default Shelf;
