import React from "react";
import styled from "styled-components";
const OrderItemComp = ({ p }) => {
  return (
    <>
      <OrderItem>
        <ItemImage loading="lazy" srcSet={p.photoUrl} />
        <ItemTitle>{p.name}</ItemTitle>
        <ItemColor>Color: {p.color}</ItemColor>
        <ItemAvailability>
          {p.stock ? "In Stock" : "Will be Avilable Soon"}
        </ItemAvailability>
        <ItemDelivery>
          Estimated delivery:
          <br />
          Monday - FREE Standard Delivery
        </ItemDelivery>
      </OrderItem>
    </>
  );
};


const OrderItem = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2vh;
  padding:2%;
  border: 2px solid #ddd; /* Set the border color and width */
  border-radius: 5px; /* Optional: Add rounded corners */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const ItemImage = styled.img`
  aspect-ratio: 1.02;
  object-fit: contain;
  object-position: center;
  width: 290px;
  overflow: hidden;
  align-self: start;
  max-width: 100%;
`;

const ItemTitle = styled.div`
  color: #000;
  font-weight: 600;
  font-size: 30px;
  line-height: 124%;
  align-self: stretch;
  margin-top: 30px;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const ItemColor = styled.div`
  color: #797979;
  font-weight: 400;
  font-size: 27px;
  line-height: 124%;
  align-self: stretch;
  margin-top: 17px;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const ItemAvailability = styled.div`
  color: #797979;
  font-weight: 400;
  font-size: 27px;
  line-height: 124%;
  align-self: stretch;
  margin-top: 23px;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const ItemDelivery = styled.div`
  color: #000;
  font-weight: 400;
  font-size: 27px;
  line-height: 33px;
  align-self: stretch;
  margin-top: 24px;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export default OrderItemComp;
