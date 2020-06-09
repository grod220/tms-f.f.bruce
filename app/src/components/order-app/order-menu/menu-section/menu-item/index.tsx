import * as React from 'react';
import {useState} from 'react';
import styled from 'styled-components';

import formatPrice from '../../../../../utilities/add-zero';
import {
  ContentfulMenuItem,
  ContentfulMenuItemDescriptionTextNode,
  ContentfulSizes,
  Maybe,
} from '../../../../../../graphql-types';
import {removeHashes} from '../../../../../utilities/contentful-formatter';

const ItemContainer = styled.div`
  border: ${({ hasItem }) => (hasItem ? '3px solid #84bf5b' : '1px solid #cecece')};
  min-height: 120px;
  display: flex;
  justify-content: space-between;
  position: relative;

  ${({ isPromo }) =>
    !isPromo &&
    `
    &:hover {
        cursor: pointer;
    }`}
`;

const ItemCounter = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 30px;
  height: 30px;
  background-color: #84bf5b;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const ItemTitle = styled.h5`
  margin: 0;
  color: #902e2d;
`;

const Price = styled.span`
  font-size: 18px;
`;

const Description = styled.p`
  margin: 8px 0 0 0;
  font-size: 16px;
  color: #4c4c4c;
`;

const Details = styled.div`
  margin: 8px 0 0 0;
  display: flex;
  align-items: center;
`;

const LeftSide = styled.div`
  padding: 12px;
`;

const RightSide = styled.div`
  flex: 0 0 160px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  background-image: url(${({ image }) => image});
`;

interface MenuItemProps {
  itemData: Pick<ContentfulMenuItem, 'title' | 'price'> & {
    description?: Maybe<Pick<ContentfulMenuItemDescriptionTextNode, 'description'>>;
    image?: Maybe<{ sizes?: Maybe<Pick<ContentfulSizes, 'src'>> }>;
  };
}

const MenuItem = ({ itemData }: MenuItemProps) => {
  const [modal, setModal] = useState(false);
  // const itemCount = OrderStore.shoppingCart.filter((item) => item.dishName === itemData.name).length;
  return (
    <>
      {/*{modal && <MenuItemModal {...itemData} category={category} closeFunc={() => setModal(false)} />}*/}
      <ItemContainer
        // hasItem={OrderStore.shoppingCart.map((item) => item.dishName).includes(itemData.name)}
        onClick={() => setModal(!modal)}
      >
        {/*{itemCount > 0 && <ItemCounter>{itemCount}</ItemCounter>}*/}
        <LeftSide>
          <ItemTitle>{removeHashes(itemData.title)}</ItemTitle>
          <Description>{itemData.description?.description}</Description>
          <Details>
            <Price>${formatPrice(itemData.price)}</Price>
          </Details>
        </LeftSide>
        {itemData.image && <RightSide image={itemData.image.sizes.src} />}
      </ItemContainer>
    </>
  );
};

export default MenuItem;
