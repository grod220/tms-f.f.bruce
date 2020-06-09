import * as React from 'react';
import styled from 'styled-components';

import MenuItem from './menu-item';
import {OnlineOrderingQuery,} from '../../../../../graphql-types';
import {removeHashes} from '../../../../utilities/contentful-formatter';

const CategoryTitle = styled.h2`
  font-weight: normal;
  margin-bottom: 10px;
`;

const MenuItems = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 20px;
  user-select: none;
`;

export type CtflCategory = OnlineOrderingQuery['allContentfulMenuVersion']['edges'][number]['node']['categories'][number];

const MenuSection = ({ category }: { category: CtflCategory }) => {
  return (
    <>
      <CategoryTitle>{removeHashes(category.title)}</CategoryTitle>
      <MenuItems>
        {category.menuItems.map((item, i) => (
          <MenuItem itemData={item} key={i} />
        ))}
      </MenuItems>
    </>
  );
};

export default MenuSection;
