import { ShoppingCartOutlined } from '@ant-design/icons/lib/icons';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';


function ProductCard({ imgUrl, name, price, id, handleOnClickProduct }) {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'VND',
  });

  return (
    <NavLink to={`../products/${id}`} className="product-card">
      <div className="card-image">
        <img src={imgUrl} alt="" className='image' />
        <ShoppingCartOutlined className='cart-icon' />
      </div>
      <div className="card-content">
        <p className='text'>{name}</p>
        <p className="cost"><sub className='text'>{formatter.format(price)}</sub></p>
      </div>
    </NavLink>
  );
}

export default ProductCard;
