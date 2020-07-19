import React from 'react'
import './inspire.css'
import Button from 'react-bootstrap/Button';
export default function inspire() {
    return (
        <div className='inspire_Home'>
             <h2 className="inspireHeader"><span className="purpleSpanInspire">Give hope.</span> <span className="pinkSpanInspire">Inspire.</span><span className="purpleSpanInspire"> Change lives.</span> <span className="pinkSpanInspire">Share your story today</span></h2>
            <p className="greyParaInspire"> YOU have a powerful story to share. Your story can help women girls <br/>
             around the world. Please help build our inspiring collection of stories by <br/>
             sharing some aspects of your journey to empowerment</p>
             <Button className="InspireButton">Share</Button>{' '}
             
        </div>
    )
}
