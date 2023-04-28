import Head from 'next/head';

import styles from '@/styles/Home.module.css';

import { GameLink } from '@/components/GameLink/GameLink';

import { josefinSans } from './_app';

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
      <p className={`${styles.description} ${josefinSans.className}`}>
        The Dog Quiz made by dogs for humans.
        <br />
        Pick a game to get started!
      </p>
      <div className={styles.linkArray}>
        <GameLink
          destination='quiz'
          title='Quiz'
          blurbPrimary='Test your dog breed knowledge'
          blurbSecondary='15 breed-specific questions in 90 seconds!'
        />
        <GameLink
          destination='/'
          title='Fetch'
          blurbPrimary='Fetch is still in training'
          blurbSecondary="We're excited too!"
          desktopOnly={true}
        />
        <GameLink
          destination='/'
          title='Hide & Seek'
          blurbPrimary="We haven't learnt how to hide yet!"
          blurbSecondary="Once we do you'll never find us!"
          desktopOnly={true}
        />
      </div>
    </>
  );
}
