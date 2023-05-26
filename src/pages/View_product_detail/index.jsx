import React, { Component, useEffect } from 'react'
import productDetail02 from './productDetail02.png'
import './style.css';
import { DownOutlined } from '@ant-design/icons';
import { Button, Dropdown, Space } from 'antd';
import { useState } from 'react'
import axiosInstance from '../../shared/services/http-client';
import SliderProduct from '../Homepage/components/SliderProduct';
import { useParams } from 'react-router-dom';

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
    const [quantity, setQuantity] = useState(1);
    const [productData, setProductData] = useState({});

    const fetchData = async () => {
        const res = await axiosInstance.get(`products/${params.id}`);
        console.log(res);
        setProductData(res.data);
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
        <div className='container' style={{ padding: '40px 188px' }}>
            <div className='all'>
                <div className='left'>
                    <img src={productDetail02} alt="abc" height="633" width="422px" />
                </div>
                <div className='right'>
                    <div className='text'>{productData.attributes.name}</div>
                    <div className='price'>{formatter.format(productData.attributes.price)}</div>
                    <div className='size'>
                        <div className='sizeText'>Size</div>
                        <div className='sizeContent'>
                            <Dropdown
                                menu={{
                                    items,
                                }}
                                trigger={['click']}
                            >
                                <a onClick={(e) => e.preventDefault()}>
                                    <Space>
                                        M
                                        <DownOutlined />
                                    </Space>
                                </a>
                            </Dropdown>
                        </div>
                    </div>
                    <div className='add'>
                        <div className='hi'>
                            <button onClick={decreaseQuantity}>-</button>
                            <input type="text" value={quantity} readOnly />
                            <button onClick={increaseQuantity}>+</button>
                        </div>
                        <div className='addtocart' onClick={addToCard}>
                            <Button>ADD TO CART</Button>

                        </div>
                    </div>
                    <div>
                        <div className='text'>Description</div>
                        <hr />
                        <div className='content'>
                            <div className='box'>
                                <p>I was looking for a bright light for the kitchen but wanted some item more modern than a strip light. this one is perfect, very bright and looks great. I can't comment on interlation as I had an electrition instal it. Would recommend...
                                    I was looking for a bright light for the kitchen but wanted some item more modern than a strip light. this one is perfect, very bright and looks great. I can't comment on interlation as I had an electrition instal it. Would recommend...I was looking for a bright light for the kitchen but wanted some item more modern than a strip light. this one is perfect, very bright and looks great. I can't comment on interlation as I had an electrition instal it. Would recommend...
                                    I was looking for a bright light for the kitchen but wanted some item more modern than a strip light. this one is perfect, very bright and looks great. I can't comment on interlation as I had an electrition instal it. Would recommend...I was looking for a bright light for the kitchen but wanted some item more modern than a strip light. this one is perfect, very bright and looks great. I can't comment on interlation as I had an electrition instal it. Would recommend...
                                    I was looking for a bright light for the kitchen but wanted some item more modern than a strip light. this one is perfect, very bright and looks great. I can't comment on interlation as I had an electrition instal it. Would recommend...I was looking for a bright light for the kitchen but wanted some item more modern than a strip light. this one is perfect, very bright and looks great. I can't comment on interlation as I had an electrition instal it. Would recommend...
                                    I was looking for a bright light for the kitchen but wanted some item more modern than a strip light. this one is perfect, very bright and looks great. I can't comment on interlation as I had an electrition instal it. Would recommend...I was looking for a bright light for the kitchen but wanted some item more modern than a strip light. this one is perfect, very bright and looks great. I can't comment on interlation as I had an electrition instal it. Would recommend...
                                    I was looking for a bright light for the kitchen but wanted some item more modern than a strip light. this one is perfect, very bright and looks great. I can't comment on interlation as I had an electrition instal it. Would recommend...I was looking for a bright light for the kitchen but wanted some item more modern than a strip light. this one is perfect, very bright and looks great. I can't comment on interlation as I had an electrition instal it. Would recommend...
                                    I was looking for a bright light for the kitchen but wanted some item more modern than a strip light. this one is perfect, very bright and looks great. I can't comment on interlation as I had an electrition instal it. Would recommend...I was looking for a bright light for the kitchen but wanted some item more modern than a strip light. this one is perfect, very bright and looks great. I can't comment on interlation as I had an electrition instal it. Would recommend...
                                    I was looking for a bright light for the kitchen but wanted some item more modern than a strip light. this one is perfect, very bright and looks great. I can't comment on interlation as I had an electrition instal it. Would recommend...I was looking for a bright light for the kitchen but wanted some item more modern than a strip light. this one is perfect, very bright and looks great. I can't comment on interlation as I had an electrition instal it. Would recommend...
                                    I was looking for a bright light for the kitchen but wanted some item more modern than a strip light. this one is perfect, very bright and looks great. I can't comment on interlation as I had an electrition instal it. Would recommend...I was looking for a bright light for the kitchen but wanted some item more modern than a strip light. this one is perfect, very bright and looks great. I can't comment on interlation as I had an electrition instal it. Would recommend...
                                    I was looking for a bright light for the kitchen but wanted some item more modern than a strip light. this one is perfect, very bright and looks great. I can't comment on interlation as I had an electrition instal it. Would recommend...
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ marginTop: '50px' }}>
                <p style={{ textAlign: 'center' }}>Similar Products</p>
                <SliderProduct />
            </div>

        </div>
    )
}