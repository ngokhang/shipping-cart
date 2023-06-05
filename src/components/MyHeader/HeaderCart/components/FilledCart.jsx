import { Button, Spin } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkoutOrderAPI, fetchOrdereList } from '../../../../features/orders/orderSlide';
import { formatter } from '../../../../shared/constants';
import './FilledCart.scss';
import ItemCart from './ItemCart';
import { toast } from 'react-toastify';

function FilledCart(props) {
  const { _orderList, onClose } = props;
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

  const handleClickCheckout = async () => {
    const orders = _orderList.map((item, index) => {
      return item.id;
    });
    const res = await dispatch(checkoutOrderAPI({ total: totalPrice, orders, userId }));
    if (res.meta.requestStatus === 'fulfilled') {
      toast.success('Checkout succesfully!', { autoClose: 1000 });
    } else {
      toast.success('Checkout failed! Please try again', { autoClose: 1000 });
    }
    onClose();
  }

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

      <Button className="btn-checkout" block style={{ marginBottom: '15px' }} onClick={() => handleClickCheckout()}>
        CHECKOUT
      </Button>


    </Spin>
  );
}

export default FilledCart;