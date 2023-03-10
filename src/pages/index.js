import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data }) {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Events App</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <header>
          <nav>
            <img />

            <Link href="/" passHref>
              Home
            </Link>

            <Link href="/events" passHref>
              Events
            </Link>

            <Link href="/about-us" passHref>
              About us
            </Link>
          </nav>
        </header>

        <main className={styles.main}>
          {data.map((ev) => (
            <Link key={ev.id} href={`/events/${ev.id}`} passHref>
             
                <Image width={300} height={300} alt={ev.title} src={ev.image} />
                <h2>{ev.title}</h2>
                <p>{ev.description}</p>
            
            </Link>
          ))}
        </main>

        <footer className={styles.footer}>
          <p> THE FOOTER IS REAL</p>
        </footer>
      </div>
    </>
  );
}

// here we're use serverside props and up above we're destructing our props so it can grab said prop directly. its all so we can render content server side. this will get ran first before it runs the rest of the components. we can also add a key or a secret where the client itself wont have access to any private info.
export async function getServerSideProps() {
  const { events_categories } = await import("/data/data.json");
  return {
    props: {
      data: events_categories,
    },
  };
}
// THIS IS OUR HOME PAGE
