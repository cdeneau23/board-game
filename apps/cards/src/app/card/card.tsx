import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from '@mui/material';
import styles from './card.module.scss';
import './card.module.scss';

type CardType = {
  name: string;
};
type CardEffect = {
  name: string;
  value: string;
  description: string;
};

/* eslint-disable-next-line */
export interface CardProps {
  title: string;
  description: string;
  image: any; // Todo: figure out this type
  cardType: CardType[];
  effects: CardEffect[];
}

export function CardDisplay(props: CardProps) {
  return (
    <div className="card">
      <div className="card-title"> {props.title} </div>
      <div className="card-description">{props.description}</div>
    </div>
  );
}

export default Card;
