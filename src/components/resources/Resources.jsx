import React from 'react';
//import { useTranslation } from 'react-i18next';
//import { Container, Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap';
import ResourceCarousel from "./ResourceCarousel"
import './Resources.css';

const Resources = () => {
    //const { t } = useTranslation();
    return (
        <div className="container">
           <ResourceCarousel />
        </div>
    )
}

export default Resources;