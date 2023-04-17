import { Card } from 'antd';
import React from 'react';
import './style.scss';
import { MyCard } from './style';
import { ShoppingCartOutlined } from '@ant-design/icons/lib/icons';

function ProductCard({ imgUrl, name, price, id }) {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'VND',
  });
  return (
    <MyCard className="card">
      <div className="card-content">
        <a href="#" className="card-image">
          <img src={imgUrl} alt="image_product" />
          <ShoppingCartOutlined
            className="cart-icon"
            onClick={() => console.log(id)}
          />
        </a>
        <div>
          <a href="#" className="text">
            {name}
          </a>
          <p className="price" style={{ fontSize: '18px' }}>
            {formatter.format(price)}
          </p>
        </div>
      </div>
    </MyCard>
  );
}

export default ProductCard;
