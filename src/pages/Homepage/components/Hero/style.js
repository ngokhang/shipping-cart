import { Carousel } from 'antd';
import styled from 'styled-components';

export const CarouselWrapper = styled(Carousel)`
  > .slick-dots li button {
    width: 10px;
    height: 10px !important;
    border-radius: 100%;
  }
  > .slick-dots li.slick-active button {
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background: black;
  }

  .slick-next {
    inset-inline-end: 19px !important;
  }

  .slick-arrow {
    z-index: 20;
    inset-inline-start: unset;

    &::before {
      display: inline-block;
      height: 44px;
      font-size: 44px;
      color: black;
    }
  }
`;
