import { NavLink } from 'react-router-dom';
import { Navbar, Container, Nav, Dropdown, DropdownButton } from 'react-bootstrap';
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

export const NavBar = () => {
    const { t, i18n } = useTranslation();

    const handleLanguageChange = (language: string | undefined) => {
        i18n.changeLanguage(language);
    };

    useEffect(() => {
        i18n.changeLanguage('pl');
    }, [i18n]);

    return (
        <Navbar bg="red" variant="dark" className="nav-container" style={{ borderBottom: 'none', height: '70px' }}>
            <Container>
                <Navbar.Brand as={NavLink} to="/">
                    Bizon Cup 2023
                </Navbar.Brand>
                <Nav.Link as={NavLink} to="/">
                    {t('HOME')}
                </Nav.Link>
                <Nav.Link as={NavLink} to="/results">
                    {t('RESULTS')}
                </Nav.Link>
                <Nav className="ms-auto">
                    <DropdownButton variant="outline-light" title={t('language')} id="language-dropdown">
                        <Dropdown.Item onClick={() => handleLanguageChange('en')}>English</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleLanguageChange('pl')}>Polski</Dropdown.Item>
                    </DropdownButton>
                </Nav>
            </Container>
        </Navbar>
    );
};
