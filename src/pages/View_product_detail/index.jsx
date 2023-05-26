import React, { Component, useEffect } from 'react'
import './style.scss';
import { DownOutlined } from '@ant-design/icons';
import { Button, Col, Dropdown, Row, Select, Space, Spin } from 'antd';
import { useState } from 'react'
import axiosInstance from '../../shared/services/http-client';
import SliderProduct from '../Homepage/components/SliderProduct';
import { useParams } from 'react-router-dom';
import Title from 'antd/es/typography/Title';

const items = [
    {
        label: <button>S</button>,
        key: '0',
    },
    {
        label: <button>L</button>,
        key: '1',
    },
    {
        label: <button>XL</button>,
        key: '2',
    },
];

export default function ViewProduct() {
    const params = useParams();
    const [loading, setLoading] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [productData, setProductData] = useState({});

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

    useEffect(() => {
        fetchData();
    }, []);

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
            <Row className='detail-container'>
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
                                <button className="increase-btn" disabled={quantity > 10 ? true : false} onClick={increaseQuantity}><span>+</span></button>
                            </div>
                            <div className="button-add">
                                <Button title='ADD TO CART' type='primary' color='black' size='large'>ADD TO CART</Button>
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
            </Row>
        </Spin>
    )
}