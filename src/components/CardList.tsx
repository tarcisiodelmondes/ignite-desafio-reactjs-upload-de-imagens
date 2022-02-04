import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const [imgUrl, setImgUrl] = useState('');

  function handleViewImage(img: string): void {
    setImgUrl(img);
    onOpen();
  }

  return (
    <>
      <SimpleGrid templateColumns="repeat(3, 1fr)" spacing="10">
        {cards.map(card => (
          // eslint-disable-next-line react/jsx-no-bind
          <Card key={card.ts} data={card} viewImage={handleViewImage} />
        ))}
      </SimpleGrid>

      <ModalViewImage imgUrl={imgUrl} isOpen={isOpen} onClose={onClose} />
    </>
  );
}
