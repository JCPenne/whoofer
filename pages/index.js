import Head from 'next/head';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';

import Button from '@/components/Button/Button';

const inter = Inter({ subsets: ['latin'] });

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
      <main className={styles.main}>
        <h1 className={styles.title}>Whoofer</h1>
        <p className={styles.description}>
          Welcome to Whoofer!
          <br />
          The Dog Quiz made by dogs for humans.
          <br />
          Pick a game to get started!
        </p>
        <div className={styles.buttonArray}>
          <Link href='/quiz'>
            <Button>Quiz</Button>
          </Link>
          <Link href='/Fetch'>
            <Button>Fetch</Button>
          </Link>
          <Link href='/HideAndSeek'>
            <Button>Hide & Seek</Button>
          </Link>
        </div>
      </main>
    </>
  );
}
