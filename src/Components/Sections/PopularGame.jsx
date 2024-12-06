import React from 'react';
import { Slide } from 'react-awesome-reveal';

const PopularGame = () => {
    return (
        <div className='my-12 w-11/12 mx-auto text-center'>
            <h1 className='text-xl md:text-4xl font-bold border-b border-green-500 inline-block pb-3'>Action Games</h1>
            <Slide duration={2000} delay={200}>
                <div className='md:flex justify-between items-center text-left gap-5 my-8'>
                    <div className='space-y-2 mb-4 p-4 md:w-[50%]'>
                        <h1 className='text-xl md:text-4xl font-bold'>God of War</h1>
                        <p className='text-sm'>The new God of War brings many changes to Sony's iconic action series. Kratos is older, wiser, and more mature. The game trades the Greek gods for a gloomy take ...</p>
                        <a className='btn mb-5 md:mb-2 border-none rounded-none bg-slate-600 text-white' href='https://en.wikipedia.org/wiki/God_of_War_(2018_video_game)' target='_blank'>View Details</a>
                    </div>
                    <div className='md:w-[50%]'>
                        <iframe width="560" className='rounded-xl w-full' height="245" src="https://www.youtube.com/embed/g1wr0DfV73E?si=DEYGRfIumLeDNzUd&amp;start=2" title="YouTube video player"></iframe>
                    </div>
                </div>
            </Slide>
            <Slide direction='right' duration={2000} delay={200}>
                <div className='md:flex justify-between gap-5 my-12'>
                    <div className='md:w-[50%]'>
                        <iframe width="560" className='rounded-xl w-full' height="245" src="https://www.youtube.com/embed/Mxv9AM397Y8?si=STFOB-JjP3HAU1Ww" title="YouTube video player"></iframe>                </div>
                    <div className='space-y-2 mb-4 p-4 text-left md:w-[50%]'>
                        <h1 className='text-xl md:text-4xl font-bold'>Monster Hunter World</h1>
                        <p className='text-sm'>If you're after an action game that can hold your attention for months at a time, you can stop your search at Monster Hunter World...</p>
                        <div className='text-right'>
                            <a className='btn mb-5 md:mb-2  border-none rounded-none bg-slate-600 text-white' href='https://en.wikipedia.org/wiki/Monster_Hunter:_World' target='_blank'>View Details</a>
                        </div>
                    </div>
                </div>
            </Slide>
        </div>
    );
};

export default PopularGame;