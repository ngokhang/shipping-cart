import { Col, Row } from 'antd';
import Title from 'antd/es/typography/Title';
import React, { useEffect, useState } from 'react';
import axiosInstance from '../../../../shared/services/http-client';
import ProductCard from '../../../../components/ProductCard';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style.scss';

function SliderProduct({ title }) {
  const [productList, setProductList] = useState([]);
  const fetchData = async () => {
    setProductList((await axiosInstance.get('products')).data);
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
        <Slider {...settings}>
          {productList.map((product, index) => (
            <div>
              <ProductCard
                name={product.attributes.name}
                price={product.attributes.price}
                imgUrl={product.attributes.image}
                id={product.id}
                key={index}
              />
            </div>
          ))}
        </Slider>
      </Col>
    </Row>
  );
}

export default SliderProduct;
