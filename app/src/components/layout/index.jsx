import React from 'react';
import Navigation from '../navigation';

import './global-styles.css';

const Layout = ({ children }) => (
  <>
    <Navigation />
    {children}
  </>
);

export default Layout;
