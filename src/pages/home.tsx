import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import logo from '../assets/logo.png';
import Description from '../pages/Description';
import { useTranslation } from 'react-i18next';

export const Home: React.FC = () => {
    const { t } = useTranslation();

    return (
        <>
            <Container className="mt-5 home-container">
                {/* Header section */}
                <Row className="text-center mb-5">
                    <Col>
                        <div className="header-container">
                            <h1 className="header-title">BIZON CUP 2023</h1>
                            <img src={logo} alt="Club Logo" width="150" className="header-logo"/>
                        </div>
                    </Col>
                </Row>

                {/* Description section */}
                <Description />

                {/* Cards section */}
                <Row className="justify-content-center">
                    <Col xs={12} md={6} lg={4}>
                        <Card className="mb-4">
                            <Card.Body>
                                <Card.Title>{t('bulletin')}</Card.Title>
                                <Button href="https://example.com/biuletin" variant="primary" style={{backgroundColor: 'red'}}>{t('goToBulletin')}</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <Card className="mb-4">
                            <Card.Body>
                                <Card.Title>{t('facebookGroup')}</Card.Title>
                                <Button href="https://www.facebook.com/groups/your-group-id" variant="primary" style={{backgroundColor: 'red'}}>{t('visitGroup')}</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <Card className="mb-4">
                            <Card.Body>
                                <Card.Title>{t('resultsSite')}</Card.Title>
                                <Button href="https://example.com/results" variant="primary" style={{backgroundColor: 'red'}}>{t('viewResults')}</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <Card className="mb-4">
                            <Card.Body>
                                <Card.Title>{t('startsList')}</Card.Title>
                                <Button href="https://example.com/starts-list" variant="primary" style={{backgroundColor: 'red'}}>{t('seeStartsList')}</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};
