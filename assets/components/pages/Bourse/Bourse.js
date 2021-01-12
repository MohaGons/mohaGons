import React, { useState, useEffect } from "react";
import axios from "axios";
import './bourse.css'
import { Descriptions } from 'antd';

const Bourse = () => {

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
        <Descriptions title="Bourse de la crypto monnaie" bordered>
            {cryptos && cryptos.map((crypto, i) =>
                <Descriptions.Item label={crypto.name}>{crypto.bourse}</Descriptions.Item>
            )}
        </Descriptions>
    )
};

export default Bourse;