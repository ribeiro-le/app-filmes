import React, { useState, useEffect } from 'react';

import { StatusBar, ActivityIndicator } from 'react-native';
import { Container, ListMovies, LoadingView } from './styles';


import api from '../../services/api';
import Movies from '../../components/Movies';

function Home() {
    let isActive = true;
    const ac = new AbortController();

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getFilmes() {
            const response = await api.get('r-api/?api=filmes');

            if (isActive) {
                const movieList = response.data;

                setMovies(movieList);
                setLoading(false);
            }
        }

        getFilmes();

        return () => {
            isActive = false;
            ac.abort();
        };
    }, []);


    if (loading) {
        return (
            <LoadingView>
                <ActivityIndicator size="large" color={"#06d6a0"}></ActivityIndicator>
            </LoadingView>
        )
    }

    return (
        <Container>
            <StatusBar hidden={true}></StatusBar>
            <ListMovies
                showsVerticalScrollIndicator={false}
                data={movies}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => <Movies data={item} />}></ListMovies>
        </Container>
    );
}

export default Home;
