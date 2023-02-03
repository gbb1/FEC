/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable import/extensions */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import axios from 'axios';

// NAV
import Nav from './navbar';

// BANNER
import Banner from './announcement';

// MAIN IMAGE
import ImageCarousel from './main_image/image_carousel';

// PRODUCT INFO
import ProductInfo from './product_header/product_info';

// STYLES
// eslint-disable-next-line import/no-named-as-default
// import Styles from './styles/styles';
// import Buttons from './buttons/buttons';

// DESCRIPTION
import Description from './product_description/product_description';
import '../../styles/overviewStyles/_overview.scss';

export default function Overview() {
  const [imageIndex, setIndex] = useState(0);
  const [currentStyle, setStyle] = useState(0);
  const [isLoading, setLoading] = useState(true);
  const [styles, setStyles] = useState([]);
  const [imgToStyles, setImgToStyles] = useState([]);
  const [styleObject, setStyleObject] = useState(null);
  const [skus, setSkus] = useState({});
  const [currentSku, setSku] = useState('');
  const [product_id, setProduct] = useState(null);
  const [products, setProducts] = useState([]);

  let iToS = [];

  function getProducts() {
    axios.get('http://127.0.0.1:8081/products')
      .then(({ data }) => {
        setProducts(data);
        return data[0];
      })
      .then((product) => {
        setProduct(product.id);
      });
  }

  function getStyles() {
    axios.get(`http://127.0.0.1:8081/products/${product_id}/styles`)
      .then(({ data }) => {
        data.results.forEach((style, index) => {
          const N = style.photos.length;
          iToS = iToS.concat(Array(N).fill(index));
        });
        return data.results;
      })
      .then((results) => {
        setStyles(results);
        setStyleObject(styles[0]);
        setSkus(results[0].skus);
        setSku(Object.keys(results[0].skus)[0]);
      })
      .then(() => {
        setImgToStyles(iToS);
      });
  }

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    getStyles();
  }, [product_id]);

  useEffect(() => {
    if (Object.keys(skus).length > 0) {
      setLoading(false);
    }
  }, [skus]);

  if (isLoading) {
    return (
      <>
        <Nav />
        <div className="overview-loader" />
      </>
    );
  }

  return (
    <>
      <Nav />
      <Banner />
      <div className="image-and-info">
        <ImageCarousel
          imageIndex={imageIndex}
          setIndex={setIndex}
          setStyle={setStyle}
          styles={styles}
          setSkus={setSkus}
          imgToStyle={imgToStyles}
          currentSku={currentSku}
          setSku={setSku}
          styleObject={styleObject}
          setStyleObject={setStyleObject}
          currentStyle={currentStyle}
        />
        <div className="product-info">
          <ProductInfo
            imageIndex={imageIndex}
            setIndex={setIndex}
            styles={styles}
            imgToStyle={imgToStyles}
            currentStyle={currentStyle}
            setStyle={setStyle}
            styleObject={styleObject}
            setStyleObject={setStyleObject}
            skus={skus}
            setSkus={setSkus}
            isLoading={isLoading}
            currentSku={currentSku}
            setSku={setSku}
          />
        </div>
      </div>
      <Description product_id={product_id} />
    </>
  );
}
