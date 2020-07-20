import React from 'react';
import Inspire from '../../components/inspire/Inspire';
import { useTranslation } from 'react-i18next';

export default function Home() {
    const { t } = useTranslation();

    return (
        <div>
            <Inspire
                header1={t('home.inspire.header.header1')}
                header2={t('home.inspire.header.header2')}
                header3={t('home.inspire.header.header3')}
                header4={t('home.inspire.header.header4')}
                par1={t('home.inspire.paragraph.par1')}
                par2={t('home.inspire.paragraph.par2')}
                par3={t('home.inspire.paragraph.par3')}
                button={t('home.inspire.button')}
            />
        </div>
    )
}
