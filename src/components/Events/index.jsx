import React from 'react';
import {RecipeReviewCard} from '../Card'
import {useEffect, useState} from "react";
import {Container} from '@mui/material';
import Grid from '@mui/material/Grid';
import md5 from "md5";
import axios from "axios";
import {CircularIndeterminate} from "../Feedback/Loading";

export const Events = () => {


    const [items, setItems] = useState([]);
    const [opss, setOpss] = useState(false);
    useEffect(() => {
        getAllItems();
    }, []);


    const getAllItems = () => {
        axios
            .get(
                `http://gateway.marvel.com/v1/public/events?ts=${
                    process.env.REACT_APP_TS
                }&apikey=${process.env.REACT_APP_PUBLIC_KEY}&hash=${md5(
                    process.env.REACT_APP_TS +
                    process.env.REACT_APP_PRIVATE_KEY +
                    process.env.REACT_APP_PUBLIC_KEY
                )}`
            )
            .then((res) => res.data)
            .then((res) => {
                setItems(res.data.results.map((el) => ({...el, title: el.name})));
            }).catch((err) => {
            console.log(err);
            setOpss(true);
        });
    };
    if (items.length === 0 && opss === false) {
        return <CircularIndeterminate/>
    }
    if (opss) return <h1 style={{
        position: "relative",
        marginTop: "23%",
        color: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center"
    }}>
        Opsss...
        <br/>
        Page not found!
    </h1>
    return (
        <Container maxWidth="xl">
            <center>
                <br/>
                <h1 style={{
                    color: "black",
                    fontSize: "2.3rem",
                    margin: "50px 50px 50px",
                    marginTop: "9%"
                }}>Welcome to Marvel Events</h1>
            </center>
            <Grid container spacing={2}>
                {items.map((item) => (
                    <Grid item xs={3} key={item.id}>
                        <RecipeReviewCard item={item}/>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};


