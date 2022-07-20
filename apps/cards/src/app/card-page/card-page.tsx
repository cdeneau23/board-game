import styles from './card-page.module.scss';

/* eslint-disable-next-line */
export interface CardPageProps {}

export function CardPage(props: CardPageProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to CardPage!</h1>
    </div>
  );
}

export default CardPage;
