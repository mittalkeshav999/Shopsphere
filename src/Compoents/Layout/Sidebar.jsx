import React, { useState, useMemo } from 'react';
import { useTranslation } from '../Translation/TranslationContext';
import Button from './Button';

const priorityColors = ["Black", "White", "Red", "Blue", "Green"];
const discountRanges = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90];

export default function Sidebar({ categoryProducts, filters, handleBrandChange, handleColorChange, handleDiscountChange, removeAllFilters }) {
  const { t } = useTranslation();
  const [showAll, setShowAll] = useState(false);

  const uniqueColors = useMemo(() => {
    const colors = [...new Set(categoryProducts.flatMap(product => product.colors.map(color => color.name)))];
    return colors.sort((a, b) => {
      const indexA = priorityColors.indexOf(a);
      const indexB = priorityColors.indexOf(b);
      if (indexA === -1 && indexB === -1) return 0;
      if (indexA === -1) return 1;
      if (indexB === -1) return -1;
      return indexA - indexB;
    });
  }, [categoryProducts]);

  const uniqueBrands = useMemo(() => [...new Set(categoryProducts.map(product => product.brand))], [categoryProducts]);

  const visibleColors = showAll ? uniqueColors : uniqueColors.slice(0, 5);

  return (
    <div className='w200 p-3'>

      <div className='categories d-flex flex-column'>
        <div className='d-flex'>
          <h5 className='fw-semibold'>{t("BRANDS")}</h5>

          <Button className='ms-auto text-danger border-0 bg-white fw-semibold'
            onClick={removeAllFilters}
            text={`${t("Clear")} ${t("All")}`} />
        </div>
        {uniqueBrands.map((brand) => (
          <label key={brand} className='cursorPointer' >
            <input
              type="checkbox"
              className='mx-2'
              checked={filters.brands.includes(brand)}
              onChange={() => handleBrandChange(brand)}
            />
            {t(brand)}
          </label>
        ))}
      </div>

      <hr />

      <div className='color d-flex flex-column'>
        <h5>{t("COLOR")}</h5>
        {visibleColors.map((color) => (
          <label key={color} className='cursorPointer'>
            <input
              type="checkbox"
              className='mx-2'
              checked={filters.colors.includes(color)}
              onChange={() => handleColorChange(color)}
            />
            {t(color)}
          </label>
        ))}

        {uniqueColors.length > 5 && (
          <Button className='border-0 bg-white text-danger'
            onClick={() => setShowAll(!showAll)}
            text={showAll ? `${t("Show Less")}` : `+ ${uniqueColors.length - 5} ${t("More")}`} />
        )}
      </div>

      <hr />

      <div className='discount'>
        <h5>{t("DISCOUNT RANGE")}</h5>
        {discountRanges.map((discount) => (
          <div key={discount}>
            <input
              name='discount'
              value={discount}
              type='radio'
              className='mx-2'
              checked={filters.discount === String(discount)}
              onChange={handleDiscountChange}
            />
            {discount === 0 ? t("No Discount") : `${discount}% ${t("and above")}`}
          </div>
        ))}
      </div>
    </div>
  );
}
