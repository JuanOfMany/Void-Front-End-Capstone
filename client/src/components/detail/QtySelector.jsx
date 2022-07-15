import React, { useState, useEffect } from 'react';
import {
  SelectSize,
  SelectQuantity,
  AddItem,
  FavIcon
} from '../styles/Select.styled';

export default function QtySelector({
  selectedQuantity,
  defaultQty,
  onQtyChangeHandler
}) {
  const [selectedQty, setSelectedQty] = useState(Number(defaultQty));
  useEffect(() => {
    setSelectedQty(defaultQty);
  }, [defaultQty]);
  const changeQty = (e) => {
    setSelectedQty(e.target.value);
    onQtyChangeHandler(e.target.value);
  };
  return (
    <SelectQuantity name="quantity" onChange={changeQty} value={selectedQty}>
      {selectedQuantity.map((q, index) => (
        <option value={q} key={index} data-testid="qty-options">
          {q}
        </option>
      ))}
    </SelectQuantity>
  );
}
