import { Button, Col, Row, Select, Space, Spin } from 'antd';
import Title from 'antd/es/typography/Title';
import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createOrderAPI, fetchOrdereList, updateOrder } from '../../features/orders/orderSlide';
import axiosInstance from '../../shared/services/http-client';
import { Context } from '../../store/Context';
import SliderProduct from '../Homepage/components/SliderProduct';
import './style.scss';

export default function ViewProduct(props) {
    const params = useParams();
    const context = useContext(Context);
    const isLogin = context.isLogin;
    const [productData, setProductData] = useState({});
    const orderList = useSelector(state => state.orders.orderList);
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false) // in Redux
    const [quantity, setQuantity] = useState(1);
    let typeProduct = 0;


    console.log(orderList)

    const fetchData = async () => {
        try {
            setIsLoading(true)
            const response = await axiosInstance.get(`products/${params.id}`);
            setProductData(response.data.attributes);

        } catch (e) {
            console.log('Product detail : ', e);
        } finally {
            setIsLoading(false);
        }
    }

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'VND',
    });

    if (params.id >= 31 && params.id <= 60) {
        typeProduct = 1;
    } else {
        typeProduct = 2;
    }
    useEffect(() => {
        fetchData();
        window.scrollTo(0, 0);

    }, [dispatch, params.id]);

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };
    const addToCard = () => {
        const userId = localStorage.getItem('userId');
        dispatch(fetchOrdereList(userId));
        const orderListClone = [...orderList];

        if (orderListClone.some(item => item.attributes.product.data.id === Number.parseInt(params.id))) {

            orderListClone.some(item => {
                if (item.attributes.product.data.id === Number.parseInt(params.id)) {
                    setIsLoading(true);
                    setTimeout(() => {
                        setIsLoading(false);
                    }, 1000);
                    dispatch(updateOrder({ orderId: item.id, quantity: item.attributes.quantity + quantity, userId: userId }));
                    toast.success('Added this product to your cart!', {
                        position: "top-right",
                        autoClose: 350,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: false,
                        draggable: false,
                        progress: undefined,
                        theme: "light",
                    });
                    return true;
                }
            });
            alert('existed');
            return;
        }

        alert('not ');
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
        dispatch(createOrderAPI({ quantity: 1, product: Number.parseInt(params.id), user: userId, total: productData.price }));
        toast.success('Added this product to your cart!', {
            position: "top-right",
            autoClose: 350,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "light",
        });
        return;
    }
    return (
        <Spin spinning={isLoading} tip="Loading...">
            <Row className='detail-container' style={{ paddingTop: '60px' }}>
                <Col md={8} className='side-left'>
                    <div className="product-image">
                        <img src={productData.image} alt="" />
                    </div>
                </Col>
                <Col md={10} className='side-right'>
                    <div className="content">
                        <Title level={3}>{productData.name}</Title>
                        <div className="price">
                            <span>{formatter.format(productData.price)}</span>
                        </div>
                        <div className="size">
                            <span>Size: </span>
                            <Space wrap>
                                <Select
                                    defaultValue="S"
                                    style={{
                                        width: 120,
                                        marginLeft: '15px'
                                    }}
                                    options={[
                                        {
                                            value: 'S',
                                            label: 'S',
                                        },
                                        {
                                            value: 'M',
                                            label: 'M',
                                        },
                                        {
                                            value: 'L',
                                            label: 'L',
                                        },
                                        {
                                            value: 'XL',
                                            label: 'XL',
                                        },
                                    ]}
                                />
                            </Space>
                        </div>
                        <div className="buttons">
                            <div className="button-quantity">
                                <button className='decrease-btn' disabled={quantity <= 0 ? true : false} onClick={decreaseQuantity}><span>-</span></button>
                                <span className='text'>{quantity}</span>
                                <button className="increase-btn" onClick={() => increaseQuantity()}><span>+</span></button>
                            </div>
                            <div className="button-add">
                                <Button title='ADD TO CART' type='primary' color='black' size='large' disabled={isLogin ? false : true} onClick={() => addToCard()}>ADD TO CART</Button>
                            </div>
                        </div>
                        <div className="description">
                            <div className='title'>Description</div>
                            <hr style={{ height: '2px' }} />
                            <div className="text-view">
                                {productData.description}
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md={24} style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', marginTop: '80px', marginBottom: '160px' }}>
                    <h3 style={{ fontSize: '42px', lineHeight: '67px', color: '#1D1F22' }}>Similar Product</h3>
                    <Col xs={24} >
                        <SliderProduct title={'Sport shoes'} idProduct={typeProduct} />
                    </Col>
                </Col>
            </Row>
        </Spin >
    )
}