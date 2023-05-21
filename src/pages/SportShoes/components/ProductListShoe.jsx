import { Col, Menu, Pagination, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../../../components/ProductCard';
import axiosInstance from '../../../shared/services/http-client';
import './style.scss';

const ProductListShoes = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axiosInstance.get('https://edison-shipping-api.savvycom.xyz/api/products');
      const data = response.data.filter(item => item.id >= 13).map(item => item.attributes);
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <Menu mode="vertical" style={{ marginRight: '20px', width: "300px" }}>
          <Menu.Item key="clothes">
            <Link to="/clothes">Clothes</Link>
          </Menu.Item>
          <Menu.Item key="shoes">
            <Link to="/sportshoes">Shoes</Link>
          </Menu.Item>
        </Menu>
        <Row gutter={[16, 24]}>
          {
            products.map((item, index) => (
              <Col key={index} md={6}>
                <ProductCard imgUrl={item.image} name={item.name} price={item.price} id={index + 1} />
              </Col>
            ))
          }
        </Row>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', padding: '20px 0' }}>
        <Pagination style={{ textalign: 'center' }} current={currentPage} total={totalPages * 8} pageSize={8} onChange={handlePageChange} />
      </div>
    </div>
  );
};

export default ProductListShoes;
