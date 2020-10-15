import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 35px 1% 15px 1%;
`;

export const YelpReservations = () => (
  <Container>
    <iframe
      title="yelp reservation"
      frameBorder="0"
      width="100%"
      height="88"
      src="//www.yelp.com/reservations/the-meatball-stoppe-orlando-2/widget?orientation=horizontal&color-scheme=light"
    />
  </Container>
);
