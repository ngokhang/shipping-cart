import React, { useState, useEffect } from 'react';
import { Pagination, Card, Menu } from 'antd';
import { Link } from 'react-router-dom';
import axiosInstance from '../../../shared/services/http-client';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axiosInstance.get('https://edison-shipping-api.savvycom.xyz/api/products');

      const data = response.data
        .filter(({ id }) => id <= 12)
        .map(({ id, attributes: { name, image } }) => ({
          id,
          name,
          image
        }));

      setProducts(data);
      setTotalPages(Math.ceil(data.length / 8)); // Chia mỗi trang 8 sản phẩm
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
          {products.map((product) => (
            <Card key={product.id} style={{ width: 300, margin: '10px' }}>
              <img src={product.image} alt={product.name} style={{ width: '100%' }} />
              <h2>{product.name}</h2>
            </Card>
          ))}
        </div>
      </div>

      <Pagination style={{textalign: "center"}} current={currentPage} total={totalPages * 8} pageSize={8} onChange={handlePageChange} />
    </div>
  );
};

export default ProductList;
