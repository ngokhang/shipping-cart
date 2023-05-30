import { Button, Spin } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrdereList } from '../../../../features/orders/orderSlide';
import { formatter } from '../../../../shared/constants';
import './FilledCart.scss';
import ItemCart from './ItemCart';

function FilledCart(props) {
  const { _orderList } = props;
  const loading = useSelector(state => state.orders.isLoading);
  const userId = localStorage.getItem('userId');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOrdereList(userId));
  }, [dispatch, userId])

  const calcTotalPrice = () => {
    return _orderList.reduce((curr, next) => {
      return next.attributes.quantity * next.attributes.product.data.attributes.price + curr;
    }, 0)
  }
  const totalPrice = calcTotalPrice();

  return (
    <Spin spinning={loading} tip="Loading" style={{ padding: '15px 5px !important' }}>
      <ul className='list-orders'>
        {
          _orderList?.filter(item => {
            if (item.attributes.product.data !== null) return true;
            return false;
          })?.map((item, index) => (
            <li>
              <ItemCart name={item.attributes.product.data.attributes.name} imgUrl={item.attributes.product.data.attributes.image} price={item.attributes.product.data.attributes.price} quantityProduct={item.attributes.quantity} orderId={item.id} key={index} indexInArray={index} />
            </li>
          ))
        }
      </ul>

      <div className='total-price'>
        <span>Subtotal: </span>
        <span>{formatter.format(totalPrice)}</span>
      </div>

      <Button className="btn-checkout" block style={{ marginBottom: '15px' }}>
        CHECKOUT
      </Button>


    </Spin>
  );
}

export default FilledCart;