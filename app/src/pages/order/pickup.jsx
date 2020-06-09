import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from '../../components/layout';
import ShortHero from '../../components/shared/short-hero';
import MeatballHero from '../../components/order-online/five-ball.jpg';
import OrderApp from '../../components/order-app';

export default function Pickup() {
  return (
    <Layout>
      <Helmet>
        <title>Pickup :: The Meatball Stoppe</title>
        <meta name="description" content="Order a pickup so it'll be ready when you arrive" />
      </Helmet>
      <ShortHero image={MeatballHero} headline="Pickup Order" />
      <OrderApp />
    </Layout>
  );
}
