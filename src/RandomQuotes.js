import React, { useState } from 'react';
import './RandomQuotes.css';

const RandomQuotes = () => {
    const [quotes] = useState(
        [
            {
                quote: "Thenceforth they thought that, rationally concluded, doubt could become an instrument of knowledge.",
                author: "Marc Bloch"
            },
            {
                quote: "Luke, I am your father.",
                author: "Darth Vader"
            },
            {
                quote: "You only live once, but if you do it right, once is enough.",
                author: "Mae West"
            },
            {
                quote: "The primary task of a useful teacher is to teach his students to recognize 'inconvenient' facts - I mean facts that are inconvenient for their party opinions.",
                author: "Max Weber"
            },
            {
                quote: "If money comes into the world with a congenital blood-stain on one cheek, then capital comes dripping from head to toe, from every pore, with blood and dirt.",
                author: "Goofy"
            }]
    );
    const [randomNumber, setNewRandomNumber] = useState(0);

    const changeQuote = () => {
        setNewRandomNumber(Math.round(Math.random() * (quotes.length - 1)));
        console.log(randomNumber);
    }

    const squareStyle = {
        background: 'linear-gradient(45deg, #544d48, #544a48)',
        width: 500,
        minHeight: 170,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column',
        position: 'sticky'
    }

    const quoteStyle = {
        width: '100%',
        fontFamily: 'sans-seriff',
        margin: 'auto',
        marginBottom: 0,
        marginTop: 10,
        paddingLeft: '10%',
        paddingRight: '10%',
        color: '#7e7158',
    };

    const socialNetworksStyle = {
        display: 'flex',
        position: 'absolute',
        left: 10,
        bottom: 0,
        width: '15%',
        justifyContent: 'space-between'
    };
    
    let linkToTwitter = "https://twitter.com/intent/tweet?text=\"" + quotes[randomNumber].quote + "\" -" + quotes[randomNumber].author;
    let linkToTumblr = "https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&content=" + quotes[randomNumber].quote + "&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button";
    return (
        <div id="quote-box" style={squareStyle}>
            <p id="text" style={quoteStyle}>"{quotes[randomNumber].quote}"</p>
            <em id="author" className="author">-{quotes[randomNumber].author}</em>
            <button id="new-quote" className="btn btn-success btn-lg" onClick={changeQuote}>Get inspired!!</button>
            <div id="social-networks" style={socialNetworksStyle}>
                <a id="tweet-quote" href={linkToTwitter} target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                <a id="tumblr-quote" href={linkToTumblr} target="_blank" rel="noopener noreferrer"><i className="fab fa-tumblr"></i></a>
            </div>
        </div>
    )
}
export default RandomQuotes;