import React from 'react';
import '../App.css';


const Home = props => {
    return (
        <div className="home">
            <div className="intro">
                <p>Hello.</p>
            </div>
            <div className="description">
                <div className="space"/>
                <p>Hey there! I'm Mark. I'm a Computer Science<br />student at Dartmouth, a music producer, among<br />other things. Welcome to my website!</p>
                <div className="space"/>
            </div>
            <ul className="content">
                <li>
                <a href="https://github.com/markgitau/" className="github" target="_blank" rel='noreferrer noopener'>
                    View my GitHub profile →
                </a>
                </li>
                <li>
                <a href="https://soundcloud.com/markgitau" className="soundcloud" target="_blank" rel='noreferrer noopener'>
                    View my SoundCloud profile →
                </a>
                </li>
                <li>
                <a href="https://www.linkedin.com/in/markgitau/" className="linkedin" target="_blank" rel='noreferrer noopener'>
                    View my LinkedIn profile →
                </a>
                </li>
                <li>
                <a href="mailto:mark.gitau.9@gmail.com" className="mail" target="_blank" rel='noreferrer noopener'>
                    Contact me →
                </a>
                </li>
            </ul>
        </div>
    );
};


export default Home;