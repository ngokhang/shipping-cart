import { Button, Col, Row, Select, Space, Spin } from 'antd';
import Title from 'antd/es/typography/Title';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../../shared/services/http-client';
import { Context } from '../../store/Context';
import SliderProduct from '../Homepage/components/SliderProduct';
import './style.scss';

export default function ViewProduct(props) {
    const params = useParams();
    const context = useContext(Context);
    const isLogin = context.isLogin;
    const [loading, setLoading] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [productData, setProductData] = useState({});
    let typeProduct = 0;

    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await axiosInstance.get(`products/${params.id}`);
            setProductData(response.data.attributes);
        } catch (e) {
            console.log('Product detail : ', e);
        } finally {
            setLoading(false);
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
        setQuantity(1);
        window.scrollTo(0, 0);
    }, [params.id]);

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };
    const addToCard = () => {

        axiosInstance
            .post('orders', {
                data: {
                    "quantity": quantity,
                    "product": 1,
                    "user": 1,
                    "total": quantity * 599000
                }
            })
            .then((response) => {
                // setPost(response.data);
                console.log(response);
            });
    }
    return (
        <Spin spinning={loading} tip="Loading...">
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
                                <button className="increase-btn" disabled={quantity >= 10 ? true : false} onClick={increaseQuantity}><span>+</span></button>
                            </div>
                            <div className="button-add">
                                <Button title='ADD TO CART' type='primary' color='black' size='large' disabled={isLogin ? false : true}>ADD TO CART</Button>
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