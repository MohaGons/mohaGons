import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from 'antd';
import "../CryptoPage/cryptopage.css"
import banniere from './banniereCrypto.jpg';


const CryptoPage = () => {

    //States initialization
    const [cryptos, setCryptos] = useState();

    //Called each time the page loads
    useEffect(() => {
        //Get all data using the defined route
        axios.get('/api/crypto/read')
            .then(response => {
                //Set the response to cryptos state
                setCryptos(response.data);
            }).catch(error => {
                console.log(error);
            })
    }, []);

    return (

        <div className="site-card-border-less-wrapper">
            <img className="banCrypto" src={banniere} width="800" height="200" />
            {cryptos && cryptos.map((crypto, i) =>
                <Card key={i} title={crypto.name} bordered={false} style={{ width: 1000 }}>
                    <p>Capitalisation : {crypto.capitalisation} Mds€</p>
                    <p>{crypto.description}</p>
                </Card>
            )}
        </div>

    )
};

export default CryptoPage;

