import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { media } from '../../../utilities/media';
import SectionToggler from './section-toggler';
import SectionDescription from './section-description';
import { setTimeout } from 'timers';
import { graphql, useStaticQuery } from 'gatsby';
import { MenuItemsAndPricesQuery } from '../../../../graphql-types';

const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  margin: 2rem 0;
`;

const TopTitles = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80vw;
  justify-content: space-around;
  border-bottom: 1px solid #ddd;

  ${media.tablet`
    width: 90vw;`}

  ${media.phone`
    width: 94vw;`} 
    
  > span {
    min-width: 12%;
  }
`;

const Descriptions = styled.div`
  display: flex;
  width: 80vw;

  ${media.tablet`
    width: 90vw;`}

  ${media.phone`
    width: 94vw;`};
`;

const MenuWidget = () => {
  const [active, setActive] = useState(undefined);
  const [opacity, setOpacity] = useState(0);

  const toggleSection = (headline) => {
    if (headline === active) return;
    setOpacity(0);
    setTimeout(() => setActive(headline), 200);
    setTimeout(() => setOpacity(1), 201);
  };

  const data: MenuItemsAndPricesQuery = useStaticQuery(graphql`
    query MenuItemsAndPrices {
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

  return (
    <Container>
      <TopTitles>
        {menuCategories.map((section, i) => (
          <SectionToggler
            name={section.title}
            activeSection={active}
            key={i}
            onClick={() => toggleSection(section.title)}
          />
        ))}
      </TopTitles>
      <Descriptions>
        {menuCategories.map((category, i) => (
          <SectionDescription
            category={category.title}
            menuItems={category.menuItems}
            activeSection={active}
            opacity={opacity}
            key={i}
          />
        ))}
      </Descriptions>
    </Container>
  );
};

export default MenuWidget;
