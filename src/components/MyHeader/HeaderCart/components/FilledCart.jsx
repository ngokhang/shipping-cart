import { Button } from 'antd';
import React from 'react';
import { formatter } from '../../../../shared/constants';
import './FilledCart.scss';
import ItemCart from './ItemCart';

function FilledCart(props) {
  const { _orderList } = props;

  const calcTotalPrice = () => {
    return _orderList.reduce((curr, next) => {
      return next.attributes.quantity * next.attributes.product.data.attributes.price + curr;
    }, 0)
  }

  return (
    <>
      <ul className='list-orders'>
        {
          _orderList.filter(item => {
            if (item.attributes.product.data !== null) return true;
            return false;
          }).map((item, index) => (
            <li>
              <ItemCart name={item.attributes.product.data.attributes.name} imgUrl={item.attributes.product.data.attributes.image} price={item.attributes.product.data.attributes.price} quantityProduct={item.attributes.quantity} orderId={item.id} key={index} indexInArray={index} />
            </li>
          ))
        }
      </ul>

      <div className='total-price'>
        <span>Subtotal: </span>
        <span>{formatter.format(calcTotalPrice())}</span>
      </div>

      <Button className="btn-checkout" block>
        CHECKOUT
      </Button>

    </>
  );
}

export default FilledCart;