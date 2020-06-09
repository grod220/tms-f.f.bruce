import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from '../components/layout';
import TopText from '../components/menu/top-text';
import ShortHero from '../components/shared/short-hero';
import MenuHero from '../components/menu/food-image-tiles.jpg';
import MenuGrid from '../components/menu/menu-grid';

export default function Menu() {
  return (
    <Layout>
      <Helmet>
        <title>Menu :: The Meatball Stoppe</title>
        <meta name="description" content="We have the best Italian food you'll find in Orlando" />
      </Helmet>
      <ShortHero image={MenuHero} headline="Our delicious menu" />
      <TopText />
      <MenuGrid />
    </Layout>
  );
}
