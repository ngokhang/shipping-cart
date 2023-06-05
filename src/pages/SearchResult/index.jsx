import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../store/Context';
import { Col, Pagination, Row } from 'antd';
import './style.scss';
import ProductCard from '../../components/ProductCard';
import axiosInstance from '../../shared/services/http-client';

function SearchResult(props) {
  const searchResultContext = useContext(Context);
  const searchResult = searchResultContext.searchResult;
  const searchKeyword = searchResultContext.searchKeyword;
  const totalProduct = searchResultContext.totalProductSearch;

  const [currentPage, setCurrentPage] = useState(1);

  const handleOnChange = (page) => {
    setCurrentPage(page);
    searchResultContext.setCurrentPage(page);
  }

  return (
    <Row className="search-result-page" justify={'center'}>
      <Col>
        {searchResult.length === 0 ? (
          <div className="empty">
            <p className="empty-title">{`We couldn’t find anything for “${searchKeyword}”`}</p>
            <p className="empty-text">These popular items might interest you</p>
          </div>
        ) : (
          <Row>
            <Col xs={24} style={{ display: 'flex', justifyContent: 'center' }}>
              <Row justify={'start'} style={{ maxWidth: '768px' }}>
                <Col xs={24}>
                  <p className="show-title">{`Showing ${searchResult.length} results for "${searchResultContext.searchKeyword}"`}</p>
                </Col>
                {searchResult.map((item, index) => (
                  <Col
                    key={index}
                    className="product"
                    xs={24}
                    sm={24}
                    md={12}
                    lg={8}
                  >
                    <ProductCard
                      name={item.attributes.name}
                      price={item.attributes.price}
                      imgUrl={item.attributes.image}
                    />
                  </Col>
                ))}
              </Row>
            </Col>
            <Col style={{ margin: '0 auto' }}>
              <Pagination current={currentPage} total={totalProduct} pageSize={9} onChange={handleOnChange} />
            </Col>
          </Row>
        )}
      </Col>
    </Row>
  );
}

export default SearchResult;
