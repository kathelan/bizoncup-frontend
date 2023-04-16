import React from 'react';
import { Container } from 'react-bootstrap';

const Footer: React.FC = () => {
    return (
        <footer className="bg-light py-3">
            <Container>
                <p className="text-center mb-0">© 2023 Bizon Cup. All rights reserved.</p>
            </Container>
        </footer>
    );
};

export default Footer;
