import { Divider, Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import { CardDisplay } from '../card/card';
import { CardService } from '../services/card.service';
import { Card } from '@two-dogs-studios/card';
import styles from './card-page.module.scss';
import Subheader from '../subheader/subheader';

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
      // <Stack
      //   direction="row"
      //   spacing={2}
      //   justifyContent="center"
      //   alignItems="center"
      //   divider={<Divider orientation="vertical" flexItem />}
      // >
      //   {appState.cards.map((x) => (
      //     <CardDisplay {...x} />
      //   ))}
      // </Stack>

      appState.cards.map((x) => <CardDisplay {...x} />)
    );
  };
  return (
    <div className={styles['container']}>
      <Subheader title="Card List"></Subheader>
      <div className="container flex-wrap">{displayCards()}</div>
    </div>
  );
}

export default CardPage;
