import React, { useState } from 'react';
import Banner from './Banner';
import TopGames from './TopGames';
import FeaturedGames from './FeaturedGames';
import PopularGame from './PopularGame';
import { useLoaderData } from 'react-router-dom';
import NewRelease from './NewRelease';

const Home = () => {
    let loadedData = useLoaderData()
    return (
        <section className='w-11/12 mx-auto dark:bg-black'>
            <Banner></Banner>
            <TopGames loadedReview={loadedData}></TopGames>
            <FeaturedGames></FeaturedGames>
            <NewRelease></NewRelease>
            <PopularGame></PopularGame>
        </section>
    );
};

export default Home;