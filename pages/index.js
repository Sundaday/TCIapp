import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { fetcher } from '../utils/fetcher.js'
import { Container, Form, Header } from 'semantic-ui-react'


export default function Home() {
    return ( 
    <div className = {styles.container} >
        <Head>
            <title>Alliance TCI</title> 
            <meta name = "description"content = "Generated by create next app"/>
            <link rel = "icon" href = "/logotci.png"/>
        </Head>

        <main className = {styles.main}>
            <h1 className = {styles.title}>
                Bienvenue dans l'alliance{' '}<a href = "https://nextjs.org">TCI</a>
            </h1>
                <p className = {styles.description}>Edit by{' '}
                    <code className = {styles.code}>Sundaday</code>
                </p>
            <div className = {styles.grid}>
                <a href = "https://nextjs.org/docs"className = {styles.card}>
                    <h2> Impératrice &rarr; </h2>
                        <p> Liste User + teams + types + scores + classement</p>
                </a>

                <a href = "https://nextjs.org/learn"className = {styles.card}>
                    <h2> Tempérance &rarr; </h2>
                        <p> Liste User + teams + types + scores + classement + académie </p>
                </a>

                <a href = "https://github.com/vercel/next.js/tree/master/examples"className = {styles.card}>
                    <h2> Equilibrage &rarr; </h2> 
                        <p> Users + Position + Boss + Pv + SortBy()</p>
                </a>

                <a href = "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"className = {styles.card}>
                    <h2> Stats Raid &rarr; </h2> 
                        <p> Users + teams + type + scores + date </p>
                </a> 
            </div> 
        </main>

        <footer className = {styles.footer}>
            <a href = "https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target = "_blank"
                rel = "noopener noreferrer">Powered by {' '}
                    <span className = {styles.logo}>
                        <Image 
                            src = "/logotci.png"
                            alt = "Vercel Logo"
                            width = {70}
                            height = {70}
                        /> 
                    </span > 
            </a>    
        </footer > 
    </div>
    )
}