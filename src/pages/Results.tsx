import "./ResultsStyles.css";
import {useEffect, useState} from 'react';
import axios from 'axios';
import {Container} from 'react-bootstrap';
import ResultTable from './ResultTable';
import {Competitor, RaceResult} from "../utils/model";
import {CategoryFilter} from "./CategoryFilter";
import { useTranslation } from 'react-i18next';
const ResultsPage = () => {
    const [results, setResults] = useState<Competitor[] | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<string>('');
    const {t} = useTranslation();
    const apiBaseUrl = import.meta.env.VITE_APP_API_BASE_URL;
    const maxRetries = 3;

    const fetchWithRetry = async (url: string, options = {}, retries = 0): Promise<Response> => {
        try {
            const response = await fetch(url, options);
            if (response.status === 404) {
                if (retries < maxRetries) {
                    const delay = 2 ** retries * 1000;
                    await new Promise(resolve => setTimeout(resolve, delay));
                    return fetchWithRetry(url, options, retries + 1);
                } else {
                    throw new Error('Max retries reached');
                }
            } else {
                return response;
            }
        } catch (error) {
            if (retries < maxRetries) {
                const delay = 2 ** retries * 1000;
                await new Promise(resolve => setTimeout(resolve, delay));
                return fetchWithRetry(url, options, retries + 1);
            } else {
                throw error;
            }
        }
    };

    useEffect(() => {
        const fetchResults = async () => {
            try {
                const response = await fetchWithRetry(`${apiBaseUrl}/api/ardf/results`);
                const data = await response.json();
                setResults(data.COMPETITORS);
            } catch (error) {
                // handle error here
            }
        };
        fetchResults();
    }, []);
    const handleCategoryFilter = (category: string) => {
        setSelectedCategory(category);
    };

    const getCategories = (results: Competitor[]): string[] => {
        const categories = new Set<string>();
        if (results != null) {
            results.forEach((competitor) => {
                categories.add(competitor.CAT);
            });
        }
        return Array.from(categories);
    };

    return (
        <Container>
            <h1 className="my-4">{t('RESULTS')}</h1>
            {results ? (
                <>
                    <CategoryFilter
                        categories={getCategories(results)}
                        onCategorySelect={handleCategoryFilter}
                        selectedCategory={selectedCategory}
                    />
                    {selectedCategory ? (
                        <ResultTable results={results} selectedCategory={selectedCategory}/>
                    ) : (
                        <p>{t('categorySelection')}</p>
                    )}
                </>
            ) : (
                <p>Loading...</p>
            )}
        </Container>
    );
}


export default ResultsPage;
