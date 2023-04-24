import React, { useContext, useState,useEffect } from 'react';
import { CartSVG, DrawerCart,QuantityButton,ColCart, RowCart } from './style';
import { Context } from '../../../store/Context';
import { Button,Col, Row } from 'antd';
import axiosInstance from '../../../shared/services/http-client';



function HeaderCart(props) {
  const loginState = useContext(Context);
  const [open, setOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  
  const totalItems = products.reduce((total, product) => {
    return total + product.quantity;
  }, 0);
  
  useEffect(() => {
    const sum = products.reduce((total, product) => {
      return total + (product.quantity * product.price);
    }, 0);
    setTotalAmount(sum);
  }, [products]);
  useEffect(() => {
    axiosInstance.get("products")
      .then(res => {
        const data = res.data.map(({ id, attributes: { name, image,price , quantity} }) => ({
          id,
          name,
          image,price, quantity:1
        }));
        setProducts(data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  const productsInCart = loginState.productsInCart;
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const handleIncrement = (productId) => {
    setProducts(prevProducts => {
      return prevProducts.map(product => {
        if (product.id === productId) {
          const newQuantity = product.quantity + 1 > 10 ? 10 : product.quantity + 1;
          return { ...product, quantity: newQuantity };
        }
        return product;
      });
    });
  };

  const handleDecrement = (productId) => {
    setProducts(prevProducts => {
      return prevProducts.map(product => {
        if (product.id === productId) {
          const newQuantity = product.quantity - 1 < 1 ? 1 : product.quantity - 1;
          return { ...product, quantity: newQuantity };
        }
        return product;
      });
    });
  };
  const handleRemoveBox = (productId) => {
    setProducts(prevProducts => {
      return prevProducts.filter(product => product.id !== productId);
    });
  };
  
  return (
    <>
      {loginState.isLogin && (
        <>
          <CartSVG onClick={showDrawer} className="no-bd" >
          </CartSVG>
         
          <DrawerCart  title={`Total item: ${totalItems}`} placement="right" onClose={onClose} open={open}>

        
            {productsInCart.length === 0 ? (
              // <div className="cart-empty">
              //   <div className="empty-img"></div>
              //   <div className="empty-content">
              //     <p className="empty-title">Your bag is empty</p>
              //     <p className="cart-empty-text">
              //       Looks like you haven’t added any items to the bag yet. Start
              //       shopping to fill it in.
              //     </p>
              //   </div>
              //   <Button className="btn-start-shopping" block>
              //     START SHOPPING
              //   </Button>
              // </div>
              
              <RowCart>
          <ColCart>
            <Row className="cart-content" gutter={[0, 20]}>
            {products.map(product => (
    <div
      key={product.id}
      className="product"
      style={{
        backgroundColor: '#fff',
        padding: '10px',
        width: 383,
        maxWidth: 500,
        height: 216,
        boxShadow: '0px 5px 15px rgba(0,0,0,0.25)',
        display: 'flex',
        alignItems: 'center',
       
      }}
    >
     
        
        <img
          src={product.image}
          alt="Fill cart"
          style={{ height: '100%',width:'50%' }}
        />
    
      <div
        style={{
          fontSize: '14px',
          height: '100%',
          marginTop: '20px',
          fontFamily: 'Raleway',
          // marginLeft: '10px'
        }}
      >
        <button className='btn-close' onClick={() => handleRemoveBox(product.id)} >x</button>
        <div className='product-info'>
        <div style={{ marginBottom: '20px' }}>{`${product.name}`}</div>
        <div style={{ marginBottom: '20px' }}>{`đ${product.price}`}</div>
        <div style={{ marginBottom: '20px' }}>Size: XS</div>

        <QuantityButton>
          <button onClick={() => handleDecrement(product.id)}>-</button>
          <span>{product.quantity}</span>
          <button onClick={() => handleIncrement(product.id)}>+</button>
        </QuantityButton>

        </div>
        
        
      </div>
    </div>
  ))}
            </Row>
            <Row style={{ width: '100%' }}>
              <Col xs={24}>
              <div class="total" style={{display: 'flex', justifyContent:'space-between', marginTop:'40px'}}>
              <span>Total:</span>
              <span class="total-amount">{`đ${totalAmount}`}</span>
              
              </div>                
                <Button className="btn-cart" style={{display: 'flex', justifyContent:'center', }}>
                {'Checkout'.toUpperCase()}
                </Button>
              </Col>
            </Row>
          </ColCart>
        </RowCart>
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
