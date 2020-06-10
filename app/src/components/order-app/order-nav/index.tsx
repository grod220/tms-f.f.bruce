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

const CATERING_MENUS = ['Catering Menu'];
const NORMAL_MENUS = ['Full menu', 'Vegetarian', 'Vegan', 'Gluten Free #meat'];

const menuComparator = (menus: string[], a: string, b: string): number => {
  return menus.indexOf(a) - menus.indexOf(b);
};

const OrderNav = observer(({ catering }: { catering: boolean }) => {
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
  const menus = catering ? CATERING_MENUS : NORMAL_MENUS;

  return (
    <Container>
      <Content>
        <MenuNavItemsWrapper>
          {allMenuVersions
            .filter((menuVersion) => menus.includes(menuVersion))
            .sort((a, b) => menuComparator(menus, a, b))
            .map((menuVersion) => (
              <SectionTab key={menuVersion} menuVersion={menuVersion} />
            ))}
        </MenuNavItemsWrapper>
        <CheckoutTab />
      </Content>
    </Container>
  );
});

export default OrderNav;
