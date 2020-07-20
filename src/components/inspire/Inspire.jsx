import React from 'react';
import './Inspire.css'
import Button from 'react-bootstrap/Button';


export default function Inspire(props) {

    return (
        <div className='inspireHome'>
            <h2 className="inspireHeader"><span className="purpleSpanInspire">{props.header1}</span> <span className="pinkSpanInspire">{props.header2}</span><span className="purpleSpanInspire">{props.header3}</span> <span className="pinkSpanInspire">{props.header4}</span></h2>
            <p className="greyParaInspire"> {props.par1} <br />
                {props.par2} <br />
                {props.par3}</p>
            <Button className="inspireButton">{props.button}</Button>{' '}

        </div>
    )
}
