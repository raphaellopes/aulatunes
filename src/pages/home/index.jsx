import React from 'react';

import {
  Header, Container, CardList, CardMusic,
} from '../../components';
import { HomeControlContainer } from './containers';

// @TODO: Rename this page to Main and implements the routes here
const Home = () => {
  const cards = [
    {
      id: 'a1',
      title: 'Love & Hate',
      subtitle: 'By Michael Kiwanuka',
      image: {
        src: 'https://is2-ssl.mzstatic.com/image/thumb/Music124/v4/dc/1f/cb/dc1fcbe6-7ff3-7064-e0da-4ce65ee89efb/00602547859044.rgb.jpg/60x60bb.png',
        alt: 'image of Love & Hate',
      },
    },
    {
      id: 'a2',
      title: 'KIWANUKA',
      subtitle: 'By Michael Kiwanuka',
      image: {
        src: 'https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/c0/2f/c1/c02fc198-2a88-d53e-afec-75c546817d65/19UMGIM61784.rgb.jpg/60x60bb.png',
        alt: 'image of KIWANUKA',
      },
    },
  ];

  const renderList = (
    <CardList>
      {cards.map((card) => (
        <CardMusic
          key={`card-item-${card.id}`}
          title={card.title}
          subtitle={card.subtitle}
          image={card.image}
        />
      ))}
    </CardList>
  );

  return (
    <>
      <Header />
      <Container>
        <HomeControlContainer />
        {renderList}
      </Container>
    </>
  );
};

export default Home;
