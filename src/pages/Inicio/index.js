import Banner from "components/Banner";
import Card from "components/Card";
import Titulo from "components/Titulo";
import { useState, useEffect } from "react";
import styles from './Inicio.module.css'

function Inicio() {
    const [videos, setVideos]= useState([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/RaffaelLopes/blues-api/videos')
        .then(resposta => resposta.json())
        .then(dados => {
            setVideos(dados)
        })
    }, [])

    return (
        <>
        
        <Banner imagem="home" />
        <Titulo>
            <h1>O seu melhor Stream de Blues</h1>
        </Titulo>
        <section className={styles.container}>
            {videos.map((video) => {
               return <Card {...video} key={video.id} />
            })}
        </section>
        
        </>

    )
}

export default Inicio;