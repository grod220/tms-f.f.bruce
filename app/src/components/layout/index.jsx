import React from 'react';
import Navigation from '../navigation';

import './global-styles.css';

export const Layout = ({ children }) => (
  <>
    <Navigation />
    {children}
  </>
);
