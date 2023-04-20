import React, { useState } from 'react';
import { Badge, Button, ListGroup, Row, Col } from 'react-bootstrap';
import './CategoryFilterStyles.css';
import { useTranslation } from 'react-i18next';

interface Props {
    categories: string[];
    onCategorySelect: (category: string) => void;
    selectedCategory: string;
}

export const CategoryFilter: React.FC<Props> = ({ categories, onCategorySelect, selectedCategory }) => {
    const [activeCategory, setActiveCategory] = useState<string>(selectedCategory);
    const { t } = useTranslation();

    const handleCategorySelect = (category: string) => {
        setActiveCategory(category);
        onCategorySelect(category);
    };

    return (
        <Row className="category-filter">
            <Col xs="auto" className="category-filter-title">
                {t('category')}
            </Col>
            <Col className="category-filter-items">
                <ListGroup horizontal className="flex-wrap">
                    {categories.map((category) => (
                        <ListGroup.Item
                            key={category}
                            active={activeCategory === category}
                            onClick={() => handleCategorySelect(category)}
                            className="mr-2 mb-2"
                            style={{ cursor: 'pointer' }}
                        >
                            <Badge bg="danger">{category}</Badge>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Col>
            <Col xs="auto" className="category-filter-clear">
                {activeCategory && (
                    <Button
                        variant="secondary"
                        onClick={() => {
                            setActiveCategory('');
                            onCategorySelect('');
                        }}
                    >
                        {t('btnClear')}
                    </Button>
                )}
            </Col>
        </Row>
    );
};
