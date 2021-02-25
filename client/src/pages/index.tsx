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
      <header>
          <h1>Bem-vindo a plataforma de games.</h1>
          <p>Aqui sera uma listagem de conteúdo!</p>
      </header>
      <main>
        Listagem aqui...
      </main>
    </>
  )
}
