import Head from 'next/head';
import Link from 'next/link';

import styles from '@/styles/Home.module.css';

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
        <Link
          href='/quiz'
          className={styles.link}
        >
          <p className={styles.game_blurb__primary}>
            Test your dog breed knowledge
          </p>
          <p className={styles.game_blurb__secondary}>
            10 breed-specific questions
            <br/>
            15 seconds per question!
          </p>
          <h3 className={styles.link_label}>Quiz</h3>
        </Link>
        <Link
          href='/Fetch'
          className={styles.link}
        >
          <p className={styles.game_blurb__primary}>
            Fetch is still in training
          </p>
          <p className={styles.game_blurb__secondary}>
            We&apos;re excited too!
          </p>
          <h3 className={styles.link_label}>Fetch</h3>
        </Link>
        <Link
          href='/HideAndSeek'
          className={styles.link}
        >
          <p className={styles.game_blurb__primary}>
            We haven&apos;t learnt how to hide yet!
          </p>
          <p className={styles.game_blurb__secondary}>
            Once we do you&apos;ll never find us!
          </p>
          <h3 className={styles.link_label}>Hide & Seek</h3>
        </Link>
      </div>
    </>
  );
}
