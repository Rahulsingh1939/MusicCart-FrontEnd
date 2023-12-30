// Dropdown.js

import React, { useState } from "react";
import styled from "styled-components";

const DropdownButton = styled.button`
  font-size: 16px;
  min-width: 100%;
  border: none;
  cursor: pointer;
  background-color: #d9d9d9;
`;

const DropdownContent = styled.div`
  position: absolute;
  width: 70%;

  border-radius: 34.145px;
  align-self: start;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const DropdownItem = styled.div`
  cursor: pointer;
  white-space: nowrap;
  margin-top: 3px;
  padding: 15px 28px;
  &:hover {
    background-color: #ddd;
  }
`;
const Label = styled.div`
  flex-grow: 1;
  width: 100%;
  white-space: nowrap;
  font: 500 23px Roboto, sans-serif;

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Icon = styled.img`
  aspect-ratio: 1.6;
  object-fit: contain;
  object-position: center;
  width: 16px;
  fill: #000;
  overflow: hidden;
  align-self: start;
  margin-top: 8px;
  max-width: 100%;
`;
const Dropdown = ({ options, label,onChange }) => {
  const [isopen, setIsOpen] = useState(false);
  const [choice, setChoice] = useState("");

  const toggleDropdown = () => {
    setIsOpen(!isopen);
  };

  const handleItemClick = (item) => {
    onChange(item);
    setIsOpen(false);
  };

  return (
    <>
      <DropdownButton onClick={toggleDropdown}>
        <Label>{label}</Label>
        <Icon
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b83855cf41f5fb05ee5bf02397180ca226e09278222588e1a09e927b9d668116?apiKey=c41df0b048fb4bad873f2d9b07bfce38&"
        />
      </DropdownButton>
      <DropdownContent style={{ display: isopen ? "block" : "none" }}>
        {options.map((item, index) => (
          <DropdownItem key={index} onClick={() => handleItemClick(item)}>
            {item}
          </DropdownItem>
        ))}
      </DropdownContent>
    </>
  );
};

export default Dropdown;
