import React from 'react';
import {Button} from "react-bootstrap";
import { useTranslation } from 'react-i18next';


const DownloadButton = () => {
    const { t } = useTranslation();

    const downloadFile = () => {
        const link = document.createElement('a');
        link.href = './src/assets/biuletin.pdf';
        link.download = 'biuletyn.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <Button variant="outline-danger"  onClick={downloadFile}>{t('bulletinButton')}</Button>
    );
};

export default DownloadButton;
