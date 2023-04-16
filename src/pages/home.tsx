import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import logo from '../assets/logo.png';
import Description from '../pages/Description';
import { useTranslation } from 'react-i18next';
import DownloadButton from "./DownloadButton";

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
                                <DownloadButton />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <Card className="mb-4">
                            <Card.Body>
                                <Card.Title>{t('facebookGroup')}</Card.Title>
                                <Button href="https://www.facebook.com/profile.php?id=100063597109867" variant="outline-danger" target="_blank" rel="noopener noreferrer">{t('visitGroup')}</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <Card className="mb-4">
                            <Card.Body>
                                <Card.Title>{t('resultsSite')}</Card.Title>
                                <Button href="/results" variant="outline-danger">{t('viewResults')}</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <Card className="mb-4">
                            <Card.Body>
                                <Card.Title>{t('startsList')}</Card.Title>
                                <Button variant="outline-danger" onClick={() => alert("The start list is not ready yet!")}>
                                    {t('downloadList')}
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};
