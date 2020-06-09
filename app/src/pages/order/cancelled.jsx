import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import ShortHero from '../../components/shared/short-hero';
import FamilyStorePic from '../../components/about-us/family-drone-pic.jpg';
import Highlight from '../../components/shared/highlight';
import { Link } from 'gatsby';
import Layout from '../../components/layout';

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 0;
  text-align: center;
`;

const Headline = styled.div`
  font-size: 27px;
  font-weight: bold;
`;

export default function Cancelled() {
  return (
    <Layout>
      <Helmet>
        <title>Order Cancelled :: The Meatball Stoppe</title>
      </Helmet>
      <ShortHero image={FamilyStorePic} headline="Order cancelled" />
      <Container>
        <div>
          <Headline>
            Looks like your order was cancelled{' '}
            <span role="img" aria-label="red x">
              ❌
            </span>
          </Headline>
          <div>Feel free to try again</div>
          <Link to="/order/pickup">
            <Highlight underline i>
              <h3>Start a new pickup order</h3>
            </Highlight>
          </Link>
        </div>
      </Container>
    </Layout>
  );
}
