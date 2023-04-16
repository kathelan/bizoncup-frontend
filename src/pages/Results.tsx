import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import ResultTable from './ResultTable';
import {RaceResult} from "../utils/model";

const ResultsPage = () => {
    const [results, setResults] = useState([]);

    useEffect(() => {
        const fetchResults = async () => {
            const response = await axios.get('https://example.com/results');
            setResults(response.data.COMPETITORS);
        };
        fetchResults();
    }, []);

    const EXAMPLE_RESULTS: RaceResult = {
        SOURCE: 'ALL',
        CONTEST: '1th Race 2002  Saxony 2-m-band',
        DATE: '25.05.2002',
        BEGIN: '13:00',
        BAND: '2',
        LIMIT: '120',
        COMPETITORS: [
            {
                FIRSTNAME: 'Sarah',
                NAME: 'Lehmann',
                CALL: '',
                CLUB: '',
                CAT: 'W19',
                CARDNO: 410484,
                START: '13:45:00',
                FOX1: '15:27:21',
                FOX3: '14:32:01',
                FOX5: '14:57:41',
                FINISH: '15:38:20',
                RUNTIME: "113'20",
                FOX: 3,
                PLACE: '1.',
                STNO: 58,
            },
            {
                FIRSTNAME: 'Corinna',
                NAME: 'Hauser',
                CALL: '',
                CLUB: 'X41',
                CAT: 'W21',
                CARDNO: 411523,
                START: '14:00:00',
                FOX1: '15:38:38',
                FOX3: '14:41:18',
                FOX5: '15:09:01',
                FINISH: '15:53:34',
                RUNTIME: "113'34",
                FOX: 3,
                PLACE: '2.',
                STNO: 66,
            },
            {
                FIRSTNAME: 'Kathrin',
                NAME: 'Berse',
                CALL: '',
                CLUB: 'N28',
                CAT: 'W35',
                CARDNO: 410485,
                START: '13:30:00',
                FOX3: '14:27:32',
                FINISH: '15:10:20',
                RUNTIME: "100'20",
                FOX: 1,
                PLACE: '3.',
                STNO: 59,
            }
        ]
    };

    return (
        <Container>
            <h1>Results</h1>
            <ResultTable results={EXAMPLE_RESULTS} />
        </Container>
    );
};

export default ResultsPage;
