import React, { useState } from 'react';
import './Trendingsec.css'

const accessories = [
    { id: 1, category: 'Brooch', name: 'Western Brooch', price: 1000, imageUrl: '/Card (4).png' },
    { id: 2, category: 'Necklace', name: 'Elegant Necklace', price: 1500, imageUrl: '/Card (5).png' },
    { id: 3, category: 'Clutches', name: 'Classic Clutch', price: 2000, imageUrl: '/Card (6).png' },
    { id: 4, category: 'Bracelet', name: 'Silver Bracelet', price: 800, imageUrl: '/Card (7).png' },
    { id: 5, category: 'Ring', name: 'Diamond Ring', price: 5000, imageUrl: '/Card (7).png' },
    { id: 6, category: 'Tie', name: 'Silk Tie', price: 600, imageUrl: '/Card (4).png' },
    { id: 7, category: 'Brooch', name: 'Modern Brooch', price: 1200, imageUrl: '/Card (6).png' },
    { id: 8, category: 'Necklace', name: 'Pearl Necklace', price: 1800, imageUrl: '/Card (5).png' },
    { id: 9, category: 'Necklace', name: 'Western Brooch', price: 1000, imageUrl: '/Card (4).png' },
    { id: 10, category: 'Brooch', name: 'Elegant Necklace', price: 1000, imageUrl: '/Card (5).png' },
    { id: 11, category: 'Ring', name: 'Classic Clutch', price: 1000, imageUrl: '/Card (6).png' },
    { id: 12, category: 'Brooch', name: 'Silver Bracelet', price: 1000, imageUrl: '/Card (7).png' }
];

const TrendingSection = () => {
    const [selectedCategory, setSelectedCategory] = useState('Brooch');

    const filteredAccessories = accessories.filter(
        (item) => item.category === selectedCategory
    );

    const handleNav = (category) => {
        setSelectedCategory(category);
    };

    const categories = ['Brooch', 'Necklace', 'Clutches', 'Bracelet', 'Ring', 'Tie'];

    return (
        <div className="min-h-screen bg-white animate-appear"
            style={{ animation: 'appear linear', animationTimeline: 'view()', animationRange: 'entry 0 cover 40%' }}>
            <header className="text-center my-8">
                <h1 className="text-4xl tracking-wide headtrendingsec">Trending Accessories</h1>
                <nav className="mt-4 space-x-6 text-sm uppercase">
                    {categories.map((category) => (
                        <button
                        
                            key={category}
                            onClick={() => handleNav(category)}
                            className={`${selectedCategory === category ? 'border-b-2 border-black' : ''
                                }` }
                                id='.navtrendingsec'
                        >
                            {category}
                        </button>
                    ))}
                </nav>
            </header>

            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-8">
                {filteredAccessories.map((item) => (
                    <div key={item.id} className="text-center">
                        <img
                            src={item.imageUrl}
                            alt={item.name}
                            className="mx-auto"
                        />
                        <h3 className="text-sm mt-4 uppercase">{item.category}</h3>
                        <h2 className="text-lg font-medium mt-2">{item.name}</h2>
                        <p className="text-sm mt-1">(USD) ${item.price}</p>
                    </div>
                ))}
            </section>

            <div className="flex justify-center my-10">
                <button className="bg-black text-white px-8 py-2 uppercase">
                    View All Accessories
                </button>
            </div>
        </div>
    );
};

export default TrendingSection;
