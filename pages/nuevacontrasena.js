import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../Components/Layout'
import Formcorreoconfirmado from '../Components/Formcorreoconfirmado'

export default function Home() {
    return (
     <Layout><Formcorreoconfirmado/></Layout>
    )
  }