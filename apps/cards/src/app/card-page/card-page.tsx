import { Divider, Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import { CardDisplay } from '../card/card';
import { Card, CardService } from '../services/card.service';
import styles from './card-page.module.scss';

/* eslint-disable-next-line */
export interface CardPageProps {}

export function CardPage(props: CardPageProps) {
  const [appState, setAppState] = useState<{ loading: boolean; cards: Card[] }>(
    {
      loading: false,
      cards: [],
    }
  );
  useEffect(() => {
    const getCards = async () => {
      const cards = await CardService.getCards();
      console.log(cards);

      setAppState({ loading: false, cards: cards });
    };

    setAppState({ loading: true, cards: [] });

    getCards().catch(console.error);
  }, [setAppState]);

  const displayCards = () => {
    if (appState.cards.length < 1) {
      return null;
    }
    return (
      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        alignItems="center"
        divider={<Divider orientation="vertical" flexItem />}
      >
        {appState.cards.map((x) => (
          <CardDisplay {...x} />
        ))}
      </Stack>
    );
  };
  return (
    <div className={styles['container']}>
      <h1>Welcome to CardPage!</h1>
      {displayCards()}
    </div>
  );
}

export default CardPage;
