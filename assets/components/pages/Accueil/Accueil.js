import React from "react";
import { Carousel } from 'antd';
import "../Accueil/accueil.css";
import banniere2 from './banniere2.jpg';
import banniere3 from './banniere3.jpg';
import banniere4 from './banniere4.jpg';

const Accueil = () => {

    const contentStyle = {
        height: '300px',
        width: '800px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };

    return (
        <div className="Carousel">
            <h2 className="TextBienvenue">Bienvenue !</h2>
            <Carousel autoplay>
                <div>
                    <h3 style={contentStyle}><img src={banniere2} width="800" height="300" /></h3>
                </div>
                <div>
                    <h3 style={contentStyle}><img src={banniere3} width="800" height="300" /></h3>
                </div>
                <div>
                    <h3 style={contentStyle}><img src={banniere4} width="800" height="300" /></h3>
                </div>
            </Carousel>
            <div className="Description">
                <p>
                    Après le sommet spéculatif de 2017, les crypto monnaies ont enclenché un processus de correction assez sain.
                    Avec la crise du Covid-19, l’aversion au risque intense du début d’année a provoqué un point bas majeur sur
                    de nombreuses crypto monnaies. La détente du stress financier qui a suivi, les injections massives de liquidités,
                    ainsi que les récentes volontés d’institutionnalisation ont provoqué un rallye extrêmement puissant des monnaies
                    virtuelles. Les cryptos avec des performances à 3 ou 4 chiffres ne manquent pas. L’enjeu 2021 sera de saisir
                    d’éventuelles opportunités haussières ou baissières.
                </p>
            </div>
        </div>
    )
};

export default Accueil;



