import { Col, Row } from 'antd';
import Title from 'antd/es/typography/Title';
import React, { useEffect, useState } from 'react';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import ProductCard from '../../../../components/ProductCard';
import axiosInstance from '../../../../shared/services/http-client';
import { MySlick } from './style';
import './style.scss';
import { useNavigate } from 'react-router-dom';

function SliderProduct({ title }) {
  const [productList, setProductList] = useState([]);
  const navigate = useNavigate();
  const handleOnClickProduct = (index) => {
    navigate(`products/${index}`);
  }
  const fetchData = async () => {
    const response = (await axiosInstance.get(`products`)).data;
    const _productsList = response.filter(item => item.id < 13).map(item => item.attributes);
    setProductList(_productsList);
  };
  const settings = {
    arrows: true,
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Row>
      <Col xs={24}>
        <Title level={1} color="#1D1F22">
          {title}
        </Title>
      </Col>
      <Col xs={24}>
        <MySlick {...settings}>
          {productList.map((product, index) => (
            <ProductCard
              name={product.name}
              price={product.price}
              imgUrl={product.image}
              id={index + 1}
              key={index}
            />
          ))}
        </MySlick>
      </Col>
    </Row>
  );
}

export default SliderProduct;
