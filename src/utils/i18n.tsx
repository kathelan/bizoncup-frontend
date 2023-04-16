import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import React from "react";

const resources = {
    en: {
        translation: {
            home: 'HOME',
            about: 'About the competition',
            language: 'Language',
            competitionDescription1: "Welcome to the Bizon Cup 2023 - a competition in radioorienteering sport in Poland! This year's edition includes not only the traditional radio orienteering sport competition, but also the Polish Sprint Championships. Athletes from all over Poland will compete to become the Polish champion in this exciting and demanding sport.",
            competitionDescription2: "The competition will take place in the beautiful surroundings of Sztutowo, where the beauty of nature will merge with the passion for radio orienteering sports. We can expect difficult but satisfying routes that require precision, speed, and concentration from the competitors.",
            competitionDescription3: "Radio orienteering sports is a discipline that requires not only physical fitness, but also strategic thinking and navigational skills. The competitors will need to use radio signals to find their way to specific points on the course, all while racing against the clock. It's a thrilling and challenging sport that demands the best from its athletes.",
            additionalInfo: "Please check our Facebook group for any additional information.",
            bulletin: 'Bulletin',
            facebookGroup: 'Facebook Group',
            resultsSite: 'Results Site',
            startsList: 'Starts List',
            bulletinButton: 'Download PDF',
            RESULTS: 'Race Results',
            categorySelection: 'Choose category',
            category: 'Category:',
            btnClear: 'Clear',
            tableName: 'Name',
            tableStartTime: 'Start Time',
            tableFinishTime: 'Finish Time',
            tableRunTime: 'Run Time',
            foxesFound: 'Foxes Found',
            tablePlace: 'Place',
            tableStationNo: 'Station No.'
        },
    },
    pl: {
        translation: {
            home: 'STRONA GŁÓWNA',
            about: 'O zawodach',
            language: 'Język',
            competitionDescription1: "Witajcie na Bizon Cup 2023 - zawodach radioorientacji sportowej w Polsce! Tegoroczna edycja to nie tylko tradycyjne zawody w radioorientacji sportowej, ale również Mistrzostwa Polski w sprincie. Zawodnicy z całej Polski będą rywalizować, by zdobyć tytuł mistrza Polski w tej ekscytującej i wymagającej dyscyplinie sportowej.",
            competitionDescription2: "Zawody odbędą się w przepięknej okolicy Sztutowa, gdzie piękno natury złączy się z pasją do radioorientacji sportowej. Czekają nas trudne, ale satysfakcjonujące trasy, które wymagają od zawodników precyzji, szybkości i skupienia.",
            competitionDescription3: "Radioorientacja sportowa to dyscyplina, która wymaga nie tylko dobrej kondycji fizycznej, ale także umiejętności strategicznego myślenia i orientacji na terenie.",
            additionalInfo: "Proszę sprawdzić naszą grupę na Facebooku dla dodatkowych informacji.",
            bulletin: 'Biuletyn',
            facebookGroup: 'Grupa na Facebooku',
            resultsSite: 'Strona wyników',
            startsList: 'Lista startowa',
            bulletinButton: 'Pobierz PDF',
            RESULTS: 'Wyniki biegu',
            categorySelection: 'Wybierz kategorię',
            category: 'Kategorie:',
            btnClear: 'Wyczyść',
            tableName: 'Imie i Nazwisko',
            tableStartTime: 'Czas startu',
            tableFinishTime: 'Czas mety',
            tableRunTime: 'Czas biegu',
            foxesFound: 'Liczba znalezionych lisów',
            tablePlace: 'Miejsce',
            tableStationNo: 'Number startowy'
        },
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
