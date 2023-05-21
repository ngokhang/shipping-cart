import React, { useState, useEffect } from 'react';
import { Pagination, Card, Menu, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import axiosInstance from '../../../shared/services/http-client';
import ProductCard from '../../../components/ProductCard'

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [quantityProduct, setQuantityProduct] = useState(0);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axiosInstance.get('https://edison-shipping-api.savvycom.xyz/api/products');
      const data = response.data.filter(item => item.id < 13).map(item => item.attributes);
      setProducts(data);
      setQuantityProduct(data.length);
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
        <Menu mode="vertical" style={{ marginRight: '20px', width: "45%" }}>
          <Menu.Item key="clothes">
            <Link to="/clothes">Clothes</Link>
          </Menu.Item>
          <Menu.Item key="shoes">
            <Link to="/sportshoes">Shoes</Link>
          </Menu.Item>
        </Menu>

        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <div style={{ position: 'absolute', top: '50px', right: '20px', margin: '20px 60px 20px 0' }}>
            <h1>Product found: {quantityProduct}</h1>
          </div>

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
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', padding: '20px 0' }}>
        <Pagination style={{ textalign: "center" }} current={currentPage} total={totalPages * 8} pageSize={8} onChange={handlePageChange} />
      </div>
    </div>
  );
};

export default ProductList;
