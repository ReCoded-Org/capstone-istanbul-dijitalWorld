import React from 'react';
import './Inspire.css';
import { useTranslation } from 'react-i18next';

export default function Inspire(props) {
  const { t } = useTranslation();
  return (
    <div className="inspireContainer" data-testid="inspireContainer">
      <h2 className="inspireHeader">
        <span className="purpleInspire">{t('home.inspire.header.header0')}</span>{' '}
        <span className="pinkInspire">{t('home.inspire.header.header1')}</span>{' '}
        <span className="purpleInspire">{t('home.inspire.header.header2')}</span>{' '}
        <span className="pinkInspire">{t('home.inspire.header.header3')}</span>
      </h2>
      <p className="heroText">
        {t('home.inspire.heroText')} <br />
      </p>
      <button className="shareButton">{t('home.inspire.button')}</button>
    </div>
  );
}
