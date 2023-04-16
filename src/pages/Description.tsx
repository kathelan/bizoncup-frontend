import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './description-styles.css';
import { useTranslation } from 'react-i18next';

const Description: React.FC = () => {
    const { t } = useTranslation();
    return (
        <Container className="mt-5">
            <Row>
                <h2 className="section-title">{t('about')}</h2>
                <p className="section-text">{t('competitionDescription1')}</p>
                <p className="section-text">{t('competitionDescription2')}</p>
                <p className="section-text">{t('competitionDescription3')}</p>
                <p className="section-text">{t('additionalInfo')}</p>
            </Row>
        </Container>
    );
};

export default Description;
