import React from 'react';
import loadingGIF from '../assets/loader.gif';

export default function Loader() {
    return (
        <div className="loader">
            <img src={loadingGIF} alt="Loading..."/>
        </div>
    );
}