import { Col, Row } from 'antd';
import Title from 'antd/es/typography/Title';
import React, { useEffect, useState } from 'react';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import ProductCard from '../../../../components/ProductCard';
import axiosInstance from '../../../../shared/services/http-client';
import { MySlick } from './style';
import './style.scss';

function SliderProduct({ idProduct, isShowTitle }) {
  const [productList, setProductList] = useState();
  const [title, setTitle] = useState();
  const fetchData = async () => {
    const response = (await axiosInstance.get(`categories?populate=products`));
    const dataClothes = response.data.filter(item => item.id === idProduct);
    const listProducts = dataClothes[0].attributes;
    setTitle(listProducts.name);
    setProductList(listProducts.products.data);
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
      {
        isShowTitle && <Col xs={24}>
          <Title level={1} color="#1D1F22">
            {title}
          </Title>
        </Col>
      }

      <Col xs={24}>
        <MySlick {...settings}>
          {productList?.map((product, index) => (
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
        </MySlick>
      </Col>
    </Row>
  );
}

export default SliderProduct;
