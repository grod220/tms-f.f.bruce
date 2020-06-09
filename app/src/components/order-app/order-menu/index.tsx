import * as React from 'react';
import {observer} from 'mobx-react-lite';
import styled from 'styled-components';
import MenuSection from './menu-section';
import {graphql, useStaticQuery} from 'gatsby';
import {OnlineOrderingQuery} from '../../../../graphql-types';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  width: 90%;
  max-width: 1200px;
  margin-bottom: 20px;
  position: relative;
`;

const OrderMenu = observer(({ activeTab }: { activeTab: string }) => {
  const allMenus: OnlineOrderingQuery = useStaticQuery(graphql`
    query OnlineOrdering {
      allContentfulMenuVersion {
        edges {
          node {
            type
            categories {
              title
              menuItems {
                title
                price
                description {
                  description
                }
                image {
                  fluid(maxWidth: 590) {
                    src
                  }
                }
                options {
                  title
                  maximum
                  minimum
                  freeOptionItem {
                    ... on ContentfulOptionItem {
                      id
                      title
                      price
                    }
                    ... on ContentfulMenuItem {
                      id
                      title
                      price
                    }
                  }
                  pricedOptionItems {
                    title
                    price
                  }
                }
              }
            }
          }
        }
      }
    }
  `);
  const activeMenuData = allMenus.allContentfulMenuVersion.edges
    .map((edge) => edge.node)
    .filter((menu) => menu.type === activeTab)[0];

  return (
    <Container>
      <Content>
        {/*<Legend />*/}
        {activeMenuData?.categories.map((category, i) => (
          <MenuSection category={category} key={i} />
        ))}
      </Content>
    </Container>
  );
});

export default OrderMenu;
