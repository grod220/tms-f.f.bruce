import React from 'react';
import Layout from '../components/layout';
import { Helmet } from 'react-helmet';

const NotFoundPage = () => (
  <Layout>
    <Helmet>
      <title>Page Not Found :: The Meatball Stoppe</title>
    </Helmet>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
);

export default NotFoundPage;
