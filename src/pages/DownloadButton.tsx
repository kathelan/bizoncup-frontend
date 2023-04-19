import React from 'react';
import {Button} from "react-bootstrap";
import {useTranslation} from 'react-i18next';


const DownloadButton = () => {
    const {t} = useTranslation();

    const downloadFile = async () => {
        const response = await fetch('https://raw.githubusercontent.com/kathelan/bizoncup-frontend/master/src/assets/files/biuletin.pdf');
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'biuletyn.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };


    return (
        <Button variant="outline-danger" onClick={downloadFile}>{t('bulletinButton')}</Button>
    );
};

export default DownloadButton;
