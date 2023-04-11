import React, { useContext, useState } from 'react';
import { CartSVG, DrawerCart } from './style';
import { Context } from '../../../store/Context';
import { Button } from 'antd';

function HeaderCart(props) {
  const loginState = useContext(Context);
  const [open, setOpen] = useState(false);
  const productsInCart = loginState.productsInCart;
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  console.log(loginState);
  return (
    <>
      {loginState.isLogin && (
        <>
          <CartSVG onClick={showDrawer} className="no-bd" />
          <DrawerCart placement="right" onClose={onClose} open={open}>
            {productsInCart.length === 0 ? (
              <div className="cart-empty">
                <div className="empty-img"></div>
                <div className="empty-content">
                  <p className="empty-title">Your bag is empty</p>
                  <p className="cart-empty-text">
                    Looks like you haven’t added any items to the bag yet. Start
                    shopping to fill it in.
                  </p>
                </div>
                <Button className="btn-start-shopping" block>
                  START SHOPPING
                </Button>
              </div>
            ) : (
              <h2>Hello everyone</h2>
            )}
          </DrawerCart>
        </>
      )}
    </>
  );
}

export default HeaderCart;
