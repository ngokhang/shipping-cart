import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeItem } from '../../../../features/orders/orderSlide';
import { formatter } from '../../../../shared/constants';
import { deleteOrder } from '../../../../shared/services/http-client';
import './ItemCart.scss';

function ItemCart({ name, price, imgUrl, id, quantityOrder, orderId }) {
  const [quantity, setQuantity] = useState(quantityOrder);

  const dispatch = useDispatch();

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleOnClickRemove = async (id) => {
    dispatch(removeItem(orderId))
    await deleteOrder(id);
  }

  return (
    <div className='item-cart'>
      <span className='icon-close' onClick={() => handleOnClickRemove(orderId)}>
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
            <button className='decrease-btn' disabled={quantity <= 0 ? true : false} onClick={decreaseQuantity}><span>-</span></button>
            <span className='text'>{quantity}</span>
            <button className="increase-btn" disabled={quantity >= 10 ? true : false} onClick={increaseQuantity}><span>+</span></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemCart;