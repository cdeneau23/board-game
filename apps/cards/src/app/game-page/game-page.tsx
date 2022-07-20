import styles from './game-page.module.scss';

/* eslint-disable-next-line */
export interface GamePageProps {}

export function GamePage(props: GamePageProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to GamePage!</h1>
    </div>
  );
}

export default GamePage;
