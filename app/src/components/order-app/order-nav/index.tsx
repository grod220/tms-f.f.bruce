import * as React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';

import SectionTab from './section-tab';
import CheckoutTab from './checkout-tab';
import { graphql, useStaticQuery } from 'gatsby';
import { MenuVersionDataQuery } from '../../../../graphql-types';

const Container = styled.div`
  height: 7rem;
  background-color: #e0e0e0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  width: 90%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;

  div + div {
    margin-left: 20px;
  }
`;

const MenuNavItemsWrapper = styled.div`
  display: flex;
`;

const MENU_SORT_ORDER = ['Meat', 'Vegetarian', 'Vegan', 'Gluten Free'];

const menuComparator = (a: string, b: string): number => {
  return MENU_SORT_ORDER.indexOf(a) - MENU_SORT_ORDER.indexOf(b);
};

const OrderNav = observer(() => {
  const menuVersionData: MenuVersionDataQuery = useStaticQuery(graphql`
    query MenuVersionData {
      allContentfulMenuVersion {
        edges {
          node {
            type
          }
        }
      }
    }
  `);
  const allMenuVersions = menuVersionData.allContentfulMenuVersion.edges.map((edge) => edge.node.type);
  return (
    <Container>
      <Content>
        <MenuNavItemsWrapper>
          {allMenuVersions.sort(menuComparator).map((menuVersion) => (
            <SectionTab>{menuVersion}</SectionTab>
          ))}
        </MenuNavItemsWrapper>
        <CheckoutTab />
      </Content>
    </Container>
  );
});

export default OrderNav;
