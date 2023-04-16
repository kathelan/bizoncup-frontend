import React, { useState } from 'react';
import { Badge, Button, ListGroup } from 'react-bootstrap';
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
        <div className="category-filter">
            <div className="category-filter-title">{t('category')}</div>
            <div className="category-filter-items">
                <ListGroup horizontal>
                    {categories.map((category) => (
                        <ListGroup.Item
                            key={category}
                            active={activeCategory === category}
                            onClick={() => handleCategorySelect(category)}
                            style={{ cursor: 'pointer' }}
                        >
                            <Badge bg="danger">{category}</Badge>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </div>
            <div className="category-filter-clear">
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
            </div>
        </div>
    );
};
