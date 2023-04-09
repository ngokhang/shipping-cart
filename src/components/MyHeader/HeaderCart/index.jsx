import React, { useContext, useState } from 'react';
import { CartSVG, DrawerCart } from './style';
import { Context } from '../../../store/Context';

function HeaderCart(props) {
  const loginState = useContext(Context);
  const [open, setOpen] = useState(false);
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
          <DrawerCart placement="right" onClose={onClose} open={open}>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </DrawerCart>
        </>
      )}
    </>
  );
}

export default HeaderCart;
