import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrdereList } from '../../../features/orders/orderSlide';
import { Context } from '../../../store/Context';
import EmptyCart from './components/EmptyCart';
import FilledCart from './components/FilledCart';
import { CartSVG, DrawerCart } from './style';

function HeaderCart(props) {
  const loginState = useContext(Context);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const quantityOrders = useSelector(state => state.orders.quantityOrders);
  const list = useSelector(state => state.orders.orderList);


  const fetchOrderList = () => {
    const res = dispatch(fetchOrdereList(loginState.userId));
  }

  console.log(list);

  useEffect(() => {
    fetchOrderList();
  }, [dispatch, open, quantityOrders]);

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
              {list.length === 0 ? (<EmptyCart onClose={onClose} />) : (<FilledCart _orderList={list} />)}

            </div>
          </DrawerCart>
        </>
      )}
    </>
  );
}

export default HeaderCart;
