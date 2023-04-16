  import React, { useState } from 'react';
  import { Button, Col, Row, Typography } from 'antd';

  import { ColCart, RowCart, QuantityButton, DrawCart } from './style';

  const { Text } = Typography;

  function FilledCart(props) {
    const [boxes, setBoxes] = useState([
      { id: 1, quantity: 1 },
      { id: 2, quantity: 1 },
      { id: 3, quantity:1}
    ]);

    const handleIncrement = (boxId) => {
      setBoxes(prevBoxes => {
        return prevBoxes.map(box => {
          if (box.id === boxId) {
            return { ...box, quantity: box.quantity + 1 };
          }
          return box;
        });
      });
    };

    const handleDecrement = (boxId) => {
      setBoxes(prevBoxes => {
        return prevBoxes.map(box => {
          if (box.id === boxId && box.quantity > 1) {
            return { ...box, quantity: box.quantity - 1 };
          }
          return box;
        });
      });
    };
    const handleRemoveBox = (boxId) => {
      setBoxes(prevBoxes => {
        return prevBoxes.filter(box => box.id !== boxId);
      });
    };
    
    return (
      <>
        <RowCart>
          <ColCart>
            <Row className="cart-content" gutter={[0, 20]}>
            {boxes.map(box => (
    <div
      key={box.id}
      className="box-1"
      style={{
        backgroundColor: '#fff',
        borderRadius: 0,
        padding: '10px',
        width: 383,
        maxWidth: 500,
        height: 216,
        boxShadow: '0px 5px 15px rgba(0,0,0,0.25)',
        display: 'flex',
        alignItems: 'center',
       
      }}
    >
      <div>
        
        <img
          src={require('../../../../assets/images/fillCart.png')}
          alt="Fill cart"
          style={{ height: '100%', margin: '10px 20px 10px 0px' }}
        />
      </div>
      <div
        style={{
          fontSize: '14px',
          height: '100%',
          marginTop: '10px',
          fontFamily: 'Raleway',
          

        }}
      >
        <button className='btn-close' onClick={() => handleRemoveBox(box.id)} >x</button>
        
        <div style={{ marginBottom: '20px' }}>Cotton dress</div>
        <div style={{ marginBottom: '20px' }}>đ599,000</div>
        <div style={{ marginBottom: '20px' }}>Size: XS</div>
        <QuantityButton>
          <button onClick={() => handleDecrement(box.id)}>-</button>
          <span>{box.quantity}</span>
          <button onClick={() => handleIncrement(box.id)}>+</button>
        </QuantityButton>
        
      </div>
    </div>
  ))}

            </Row>
            <Row style={{ width: '100%' }}>
              <Col xs={24}>
                <Button className="btn-cart" style={{display: 'flex', justifyContent:'center', }}>
                {'Checkout'.toUpperCase()}
                </Button>
              </Col>
            </Row>
          </ColCart>
        </RowCart>
      </>
    );
  }


  export default FilledCart;
