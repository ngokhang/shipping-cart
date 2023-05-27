import { ShoppingCartOutlined } from '@ant-design/icons/lib/icons';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../store/Context';
import './style.scss';


function ProductCard({ imgUrl, name, price, id, handleOnClickProduct }) {
  const context = useContext(Context);
  const isLogin = context.isLogin;
  const navigate = useNavigate();
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'VND',
  });
  const handleOnClickCard = (e) => {
    e.stopPropagation();
    navigate(`../products/${id}`);
  }
  const handleOnClickCart = (e) => {
    e.stopPropagation();
    if (isLogin) {
      alert('mememem')
    } else {
      navigate('/login');
    }
  }

  return (
    <div className="product-card" onClick={e => handleOnClickCard(e)} style={{ cursor: 'pointer' }}>
      <div className="card-image">
        <img src={imgUrl} alt="" className='image' />
        <ShoppingCartOutlined className='cart-icon' onClick={e => handleOnClickCart(e)} />
      </div>
      <div className="card-content">
        <p className='text'>{name}</p>
        <p className="cost"><sub className='text'>{formatter.format(price)}</sub></p>
      </div>
    </div>
  );
}

export default ProductCard;
