import * as React from 'react';
import styled from 'styled-components';

import MenuItem from './menu-item';
import {
    ContentfulAssetFile,
    ContentfulCategory,
    ContentfulMenuItem,
    ContentfulMenuItemDescriptionTextNode,
    Maybe,
} from '../../../../../graphql-types';
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

interface MenuSectionProps {
  category: Pick<ContentfulCategory, 'title'> & {
    menuItems?: Maybe<
      Array<
        Maybe<
          Pick<ContentfulMenuItem, 'title' | 'price'> & {
            description?: Maybe<Pick<ContentfulMenuItemDescriptionTextNode, 'description'>>;
            image?: Maybe<{ file?: Maybe<Pick<ContentfulAssetFile, 'url'>> }>;
          }
        >
      >
    >;
  };
}

const MenuSection = ({ category }: MenuSectionProps) => {
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
