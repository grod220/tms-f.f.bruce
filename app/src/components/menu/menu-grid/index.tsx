import * as React from 'react';
import styled from 'styled-components';

import MenuItem from './menu-item';
import FoodPicData from './food-pic-data';
import FoodPicSquare from './food-pic-square';
import { MenuItemsAndPricesQuery } from '../../../../graphql-types';
import { graphql, useStaticQuery } from 'gatsby';

const Container = styled.div`
  column-width: 35rem;
  column-gap: 1.5rem;
  width: 93%;
  column-fill: auto;
  margin: 0 auto;

  > div {
    break-inside: avoid-column;
    margin: 0 0.2rem 1.5rem;
    transition: all 0.5s;
    -webkit-backface-visibility: hidden;
  }
`;

const shuffle = (array) => {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
};

const interweaveData = () => {
  const data: MenuItemsAndPricesQuery = useStaticQuery(graphql`
    query MenuPreviewPanels {
      allContentfulMenuVersion(filter: { type: { eq: "Meat" } }) {
        edges {
          node {
            type
            categories {
              title
              menuItems {
                title
                price
              }
            }
          }
        }
      }
    }
  `);
  const menuCategories = data.allContentfulMenuVersion.edges[0].node.categories;

  const MenuArr = menuCategories.map((categoryData, i) => (
    <MenuItem category={categoryData.title} menuItems={categoryData.menuItems} key={i + FoodPicData.length} />
  ));
  const FoodPicArr = shuffle(FoodPicData.map((foodObj, i) => <FoodPicSquare {...foodObj} key={i} />));
  const largerLength = MenuArr.length > FoodPicArr.length ? MenuArr.length : FoodPicArr.length;
  const interwoven = [];
  for (let i = 0; i < largerLength; i++) {
    interwoven.push(MenuArr[i]);
    interwoven.push(FoodPicArr[i]);
  }
  return interwoven;
};

const MenuGrid = () => <Container>{interweaveData()}</Container>;

export default MenuGrid;
