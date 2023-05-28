import { ShoppingCartOutlined } from '@ant-design/icons/lib/icons';
import { Spin } from 'antd';
import _ from 'lodash';
import React, { useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { fetchOrdereList } from '../../features/orders/orderSlide';
import { formatter } from '../../shared/constants';
import { postCreateOrder, putUpdateOrder } from '../../shared/services/http-client';
import { Context } from '../../store/Context';
import './style.scss';


function ProductCard({ imgUrl, name, price, id }) { // id la id cua san pham
  const context = useContext(Context);
  const isLogin = context.isLogin;
  const navigate = useNavigate();
  const orderList = useSelector(state => state.orders.orderList);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);


  const handleOnClickCard = (e) => {
    e.stopPropagation();
    navigate(`../products/${id}`);
  }
  const handleOnClickCart = async (e) => {
    e.stopPropagation();
    if (isLogin) {
      if (orderList.some(item => item.attributes.product.data.id === id)) {
        setIsLoading(true);
        const orderListClone = [...orderList];
        let result = _.findIndex(orderListClone, e => e.attributes.product.data.id === id);
        const res = await putUpdateOrder(orderList[result].id, orderList[result].attributes.quantity + 1);
      } else {
        const res = await postCreateOrder(context.userId, id, 1, price);
      }
      dispatch(fetchOrdereList(context.userId));
      setIsLoading(false);
    } else {
      navigate('/login');
      toast.warning('You must log in to buy this product!', { autoClose: 1500, position: 'top-right' });
    }
  }

  return (
    <Spin spinning={isLoading}>
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
    </Spin>

  );
}

export default ProductCard;
