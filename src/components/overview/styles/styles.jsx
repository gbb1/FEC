/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-no-comment-textnodes */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { MdCheckCircle } from 'react-icons/md';
import { useDarkMode } from '../../shared/DarkModeProvider';

export default function Styles({
  setIndex, styles, currentStyle, setStyle, clickStyle,
}) {
  const [indeces, setIndeces] = useState([0]);
  const isDark = useDarkMode();
  const iff = (condition, then, otherwise) => (condition ? then : otherwise);

  useEffect(() => {
    const indecesArray = [0];
    styles.forEach((style) => {
      const N = indecesArray.length;
      indecesArray.push(indecesArray[N - 1] + style.photos.length);
    });
    setIndeces(indecesArray);
  }, [styles]);

  // useEffect(() => {
  //   if (styleObject !== undefined) {
  //     setSkus(styleObject.skus);
  //     setSku(Object.keys(styleObject.skus)[0]);
  //   }
  // }, [styleObject]);

  function handleClick(event) {
    setStyle(parseInt(event.target.id, 10));
    setIndex(indeces[event.target.id]);
    clickStyle(true);
  }

  return (
    <div className="styles">
      <h4 className="price">
        {styles[currentStyle].sale_price === 'null'
          ? (
            <span>
              $
              {styles[currentStyle].original_price}
            </span>
          )
          : (
            <div>
              <span className="sale-price">
                $
                {styles[currentStyle].sale_price}
                {' '}
                <span className={`original-price ${isDark ? 'dark-mode' : 'light-mode'}`}>
                  $
                  {styles[currentStyle].original_price}
                </span>
              </span>
            </div>
          )}
      </h4>
      <h2 className="style">
        STYLE
        {' '}
        {'>'}
        {' '}
        <span className="style-name">{styles[currentStyle].name}</span>
      </h2>
      <ul className="style-list">
        {
          styles.map((style, index) => (
            <div key={style.style_id} className="style-container">
              {
                style === styles[currentStyle]
                  ? (
                    <span className="style-checkmark">
                      <MdCheckCircle className={`checkmark-self ${isDark ? 'dark-mode-check' : 'light-mode-check'}`} />
                    </span>
                  ) : null
              }
              <img
                alt="style-thumbnail"
                key={style.style_id}
                id={index}
                onClick={handleClick}
                // testid={`style-${index}`}
                className={
                  `style-thumbnail
                  ${iff(style === styles[currentStyle], iff(isDark, 'style-active-dark', 'style-active-light'), '')}

                  ${isDark ? 'dark-mode-style' : 'light-mode-style'}`
                  }
                src={style.photos[0].thumbnail_url}
              />
            </div>
          ))
        }
      </ul>
    </div>
  );
}
