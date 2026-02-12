import React, { useState } from 'react';
import { MENU_ITEMS } from '../../constants';
import { Translations } from '../../types';
import MenuHeader from './components/MenuHeader';
import MenuGrid from './components/MenuGrid';

interface MenuProps {
    t: Translations;
}

const Menu: React.FC<MenuProps> = ({ t }) => {
    const categories = ['all', 'mains', 'dumplings', 'soups', 'drinks'] as const;
    const [activeCategory, setActiveCategory] = useState<string>('all');

    const filteredItems = activeCategory === 'all'
        ? MENU_ITEMS
        : MENU_ITEMS.filter(item => item.category === activeCategory);

    return (
        <div className="bg-qazan-black min-h-screen pb-40 pt-40 md:pt-48 px-6">
            <div className="max-w-7xl mx-auto relative flex flex-col items-center">
                <MenuHeader
                    t={t}
                    categories={categories}
                    activeCategory={activeCategory}
                    setActiveCategory={setActiveCategory}
                />
                <MenuGrid
                    activeCategory={activeCategory}
                    filteredItems={filteredItems}
                />
            </div>
        </div>
    );
};

export default Menu;
