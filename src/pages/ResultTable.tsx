import React from 'react';
import { Table } from 'react-bootstrap';
import { RaceResult } from '../utils/model';
import { useTranslation } from 'react-i18next';
interface Props {
    results: RaceResult;
    selectedCategory: string;
}

const ResultTable: React.FC<Props> = ({ results, selectedCategory }) => {
    const { t } = useTranslation();
    const getCompetitorsByCategory = () => {
        if (!selectedCategory) {
            return results.COMPETITORS;
        }

        return results.COMPETITORS.filter((competitor) => competitor.CAT === selectedCategory);
    };

    const competitors = getCompetitorsByCategory();

    return (
        <>
            <h3>{selectedCategory}</h3>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>{t('tableName')}</th>
                    <th>{t('tableStartTime')}</th>
                    <th>{t('tableFinishTime')}</th>
                    <th>{t('tableRunTime')}</th>
                    <th>{t('foxesFound')}</th>
                    <th>{t('tablePlace')}</th>
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
                        <td>{competitor.PLACE}</td>
                        <td>{competitor.STNO}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </>
    );
};

export default ResultTable;
