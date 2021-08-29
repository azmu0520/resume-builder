import React from 'react';
import styled from 'styled-components';
import Section from './Section';

function Home() {
  return (
    <Container>
      <Section
        title='Model S'
        description='Order Online for Touchless Delivery'
        backgroundImg='https://tesla-cdn.thron.com/delivery/public/image/tesla/32e5e0f3-5c04-42ef-8f8f-c6b1c26f8a9e/bvlatuR/std/2880x1800/ms-main-hero-desktop'
        leftBtnText='Custom Order'
        rightBtnText='Existing Inventory'
      />
      <Section
        title='Model Y'
        description='Order Online for Touchless Delivery'
        backgroundImg='model-y.jpg'
        leftBtnText='Custom Order'
        rightBtnText='Existing Inventory'
      />
      <Section
        title='Model 3'
        description='Order Online for Touchless Delivery'
        backgroundImg='model-3.jpg'
        leftBtnText='Custom Order'
        rightBtnText='Existing Inventory'
      />
      <Section
        title='Model X'
        description='Order Online for Touchless Delivery'
        backgroundImg='model-x.jpg'
        leftBtnText='Custom Order'
        rightBtnText='Existing Inventory'
      />
      <Section
        title='Lowest Cost Solar Panels in America'
        description='Money-back guarantee'
        backgroundImg='solar-panel.jpg'
        leftBtnText='Order Now'
        rightBtnText='Learn More'
      />
      <Section
        title='Solar for New Roofs'
        description='Solar Roof Costs Less Than a New Roof'
        backgroundImg='solar-roof.jpg'
        leftBtnText='Order Now'
        rightBtnText='Learn More'
      />
      <Section
        title='Accessories'
        description=' '
        backgroundImg='accessories.jpg'
        leftBtnText='Order Now'
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  width: 100vw;
`;
