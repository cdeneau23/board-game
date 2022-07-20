import styles from './home-page.module.scss';

/* eslint-disable-next-line */
export interface HomePageProps {}

export function HomePage(props: HomePageProps) {
  return (
    <main>
      <div className={styles['container']}>
        <h1>Welcome to HomePage!</h1>
      </div>
    </main>
  );
}

export default HomePage;
