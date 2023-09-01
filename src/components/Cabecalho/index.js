import React from "react";
import { Link } from "react-router-dom";
import bluesLogo from './blues.png'; // Importe a imagem "blues.png"
import styles from './Cabecalho.module.css';
import CabecalhoLink from "components/CabecalhoLink";

function Cabecalho() {
    return (
        <header className={styles.cabecalho}>
            <Link to="./" className={styles.logoText}>
                <img src={bluesLogo} alt="Logo" className={styles.logoImage} />
                ALURAFLIX Blues Stream
            </Link>
            <nav>
                <CabecalhoLink url="./">
                    Home
                </CabecalhoLink>
                <CabecalhoLink url="./Favoritos">
                    Favoritos
                </CabecalhoLink>
            </nav>
        </header>
    )
}

export default Cabecalho;
