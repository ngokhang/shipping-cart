import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseQuantity, decreaseQuantityProduct, deleteOrderAPI, increaseQuantity, increaseQuantityProduct, updateOrder, updateWhenRemoveQuantityOrder } from '../../../../features/orders/orderSlide';
import { formatter } from '../../../../shared/constants';
import { Context } from '../../../../store/Context';
import './ItemCart.scss';

function ItemCart({ name, price, imgUrl, quantityProduct, orderId, indexInArray }) {
  const userId = localStorage.getItem('userId');
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(quantityProduct);
  const quantityOrders = useSelector(state => state.orders.quantityOrders)

  useEffect(() => {
    setQuantity(quantityProduct);
  }, [quantityProduct])

  const handleOnClickDecrease = async () => {
    setQuantity(quantity - 1);
    dispatch(decreaseQuantity());
    dispatch(decreaseQuantityProduct());
    dispatch(updateOrder({ orderId, quantity: quantityProduct - 1, userId }));
  }

  const handleOnClickIncrease = async () => {
    setQuantity(quantity + 1);
    dispatch(increaseQuantity());
    dispatch(increaseQuantityProduct());
    dispatch(updateOrder({ orderId, quantity: quantityProduct + 1, userId }));
  }

  const handleOnClickRemove = async () => {
    dispatch(deleteOrderAPI({ orderId, userId }));
    dispatch(updateWhenRemoveQuantityOrder(indexInArray));
  }

  return (
    <div className='item-cart'>
      <span className='icon-close' onClick={() => handleOnClickRemove()}>
        <span className='left'></span>
        <span className='right'></span>
      </span>
      <div className="image">
        <img src={imgUrl} alt="item_product" />
      </div>
      <div className="infor-product">
        <div><span className='name'>{name}</span></div>
        <div><span className='price'>{formatter.format(price)}</span></div>
        <div>
          <span className='size'>Size: <span className="size-value">XS</span></span>
        </div>
        <div className="buttons">
          <div className="button-quantity">
            <button className='decrease-btn' disabled={quantity <= 1 ? true : false} onClick={() => handleOnClickDecrease()}><span>-</span></button>
            <span className='text'>{quantity}</span>
            <button className="increase-btn" onClick={() => handleOnClickIncrease()}><span>+</span></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemCart;