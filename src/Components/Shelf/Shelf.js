import React, {useState} from 'react';
import Spinner from '../Spinner/Spinner.js';
import ShelfHeader from "./ShelfHeader/ShelfHeader.js";
import ProductList from "./ProductList/ProductList.js";
import "./styles.scss";
const {useSelector} from 'react-redux';

const initial = [{
  "id":12,
  "sku":12064273040195392,
  "title": "Cat Tee Black T-shirt",
  "price": 10.9,
  "isFreeShipping": true
},
{
  "id":13,
  "sku":51498472915966366,
  "title":"Dark Thug Blue-Navy T-Shirt",
  "price": 29.56,
  "isFreeShipping": true
},
{
  "id":14,
  "sku":10686354557628303,
  "title":"Sphynx Tie Dye Wine T-Shirt",
  "price": 9.0,
}];

const Shelf = () => {
  const sort = useSelector(state => state.sort.type);
  const [isLoading, changeLoad] = useState(true);

  return <>
    {isLoading ? <Spinner /> : ' '}
    <div className="shelf-container">
      <ShelfHeader productsLength={17}/>
      <ProductList products={initial}/>
    </div>
  </>
}

export default Shelf;
