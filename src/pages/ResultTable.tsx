import React from 'react';
import { Table } from 'react-bootstrap';
import { RaceResult } from '../utils/model';
import ResultsPage from "./Results";

interface Props {
    results: RaceResult;
}

export const ResultTable: React.FC<Props> = ({ results }) => {
    const categories = ['W19', 'W21', 'W35']; // categories to filter by

    return (
        <>
            {categories.map((category) => {
                // filter competitors by category
                const competitors = results.COMPETITORS.filter(
                    (competitor) => competitor.CAT === category
                );

                // create table for category
                return (
                    <div key={category}>
                        <h3>Category: {category}</h3>
                        <Table striped bordered hover>
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Start Time</th>
                                <th>Finish Time</th>
                                <th>Runtime</th>
                                <th>Foxes Found</th>
                                <th>Place</th>
                                <th>Station No.</th>
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
                    </div>
                );
            })}
        </>
    );
};
export default ResultTable;

