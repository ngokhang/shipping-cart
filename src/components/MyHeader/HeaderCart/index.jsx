import { Row } from 'antd';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Context } from '../../../store/Context';
import EmptyCart from './components/EmptyCart';
import { CartSVG, DrawerCart } from './style';
import FilledCart from './components/FilledCart';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrdereList } from '../../../features/orders/orderSlide';
import { deleteOrder } from '../../../shared/services/http-client';



function HeaderCart(props) {
  const loginState = useContext(Context);
  const userId = loginState.userId;
  const [open, setOpen] = useState(false);
  const orderList = useSelector(state => state.orders.orderList);
  const quantityOrders = useSelector(state => state.orders.quantityOrders);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOrdereList(userId));
  }, [dispatch, userId, open, quantityOrders]);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      {loginState.isLogin && (
        <>
          <CartSVG onClick={showDrawer} className="no-bd" />

          <DrawerCart title={`Total item: ${quantityOrders}`} placement="right" onClose={onClose} open={open}>
            <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              {quantityOrders === 0 ? (<EmptyCart onClose={onClose} />) : (<FilledCart _orderList={orderList} />)}

            </div>
          </DrawerCart>
        </>
      )}
    </>
  );
}

export default HeaderCart;
