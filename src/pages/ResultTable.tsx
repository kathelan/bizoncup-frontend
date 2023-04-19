import './ResultTableStyles.css'
import React from 'react';
import { Table } from 'react-bootstrap';
import {Competitor, RaceResult} from '../utils/model';
import { useTranslation } from 'react-i18next';
interface Props {
    results: Competitor[];
    selectedCategory: string;
}

const ResultTable: React.FC<Props> = ({ results, selectedCategory }) => {
    const { t } = useTranslation();
    const getCompetitorsByCategory = () => {
        if (!selectedCategory) {
            return results;
        }

        const sortedCompetitors = results.filter((competitor) => competitor.CAT === selectedCategory)
            .sort((a, b) => {
                const aRuntime = timeStringToSeconds(a.RUNTIME);
                const bRuntime = timeStringToSeconds(b.RUNTIME);

                if (a.FOX !== b.FOX) {
                    return b.FOX - a.FOX; // sort by max number of FOX
                } else {
                    return aRuntime - bRuntime; // sort by lowest RUNTIME
                }
            });

        return sortedCompetitors;
    };

    const timeStringToSeconds = (timeString: string): number => {
        const [hours, minutes, seconds] = timeString.split(':').map(Number);
        return (hours * 60 + minutes) * 60 + seconds;
    };

    const competitors = getCompetitorsByCategory();

    return (
        <>
            <h3>{selectedCategory}</h3>
            <Table striped bordered hover className="result-table table-responsive">
                <thead>
                <tr>
                    <th>#</th>
                    <th>{t('tableName')}</th>
                    <th>{t('tableStartTime')}</th>
                    <th>{t('tableFinishTime')}</th>
                    <th>{t('tableRunTime')}</th>
                    <th>{t('foxesFound')}</th>
                    <th>{t('tableStationNo')}</th>
                </tr>
                </thead>
                <tbody>
                {competitors.map((competitor, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                            {competitor.FIRSTNAME} {competitor.NAME}
                        </td>
                        <td>{competitor.START}</td>
                        <td>{competitor.FINISH}</td>
                        <td>{competitor.RUNTIME}</td>
                        <td>{competitor.FOX}</td>
                        <td>{competitor.STNO}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </>
    );
};

export default ResultTable;
