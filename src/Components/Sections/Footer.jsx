import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className="footer bg-base-200 text-base-content p-10 dark:bg-black dark:text-white">
            <aside>
                <Link to='/' className="text-xl font-bold">Chill <span className='text-red-500'>Gamer.</span></Link>
                <p>
                    Explore the vibrant world of game development with <br /> gamequ br - your ultimate destination <br />for innovative games and industry insights.
                    <br />
                    Providing reliable tech since 2024.
                </p>
            </aside>
            <nav>
                <h6 className="footer-title">Game Links</h6>
                <a className="link link-hover">Master Billiard</a>
                <a className="link link-hover">Maximum Speed</a>
                <a className="link link-hover">Rush and Rush</a>
                <a className="link link-hover">Let's Play Poker</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    );
};

export default Footer;