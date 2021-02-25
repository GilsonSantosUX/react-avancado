import Head from 'next/head'

// import styles from '../styles/Home.module.css' \\ className={styles.container}

type Props = {
    title:string
}

export default function Home({title = "React Avançado!"}:Props) {
  return (
    <>
      <Head >
    <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
          <h2>Index</h2>
      </main>
    </>
  )
}
