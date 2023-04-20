import Head from 'next/head';

import styles from '@/styles/Home.module.css';

import { GameLink } from '@/components/GameLink/GameLink';

export default function Home() {
  return (
    <>
      <Head>
        <title>Whoofer</title>
        <meta
          name='description'
          content='A quiz made by dogs, for humans'
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        />
      </Head>
      <h1 className={styles.title}>Whoofer</h1>
      <p className={styles.description}>
        The Dog Quiz made by dogs for humans.
        <br />
        Pick a game to get started!
      </p>
      <div className={styles.buttonArray}>
        <GameLink
          destination='quiz'
          title='Quiz'
          blurbPrimary='Test your dog breed knowledge'
          blurbSecondary='15 breed-specific questions in 90 seconds!'
        />
        <GameLink 
          destination='fetch'
          title='Fetch'
          blurbPrimary='Fetch is still in training'
          blurbSecondary='We&apos;re excited too!'
        />
        <GameLink 
          destination='HideAndSeek'
          title='Hide & Seek'
          blurbPrimary='We haven&apos;t learnt how to hide yet!'
          blurbSecondary='Once we do you&apos;ll never find us!'
        />
      </div>
    </>
  );
}
