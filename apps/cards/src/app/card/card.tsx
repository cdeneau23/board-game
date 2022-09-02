import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from '@mui/material';
import styles from './card.module.scss';

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
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        {/* <CardMedia
          component="img"
          height="140"
          image={props.image}
          alt="green iguana"
        /> */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Card;