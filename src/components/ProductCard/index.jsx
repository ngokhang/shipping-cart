import { Card } from 'antd';
import React from 'react';
import './style.scss';

function ProductCard({ imgUrl, name, price }) {
  return (
    <Card className="card">
      <a href="#" className="card-image">
        <img src={imgUrl} alt="image_product" />
      </a>
      <div className="card-content">
        <a href="#" className="text">
          {name}
        </a>
        <p className="price">{price} VNĐ</p>
      </div>
    </Card>
  );
}

export default ProductCard;
