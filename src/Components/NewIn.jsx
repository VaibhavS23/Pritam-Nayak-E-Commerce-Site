import React, { useState } from 'react';
import Pagination from './Pagination';
import ProductCard from './ProductCard';
import Navbar from './Navbar';
import { FilterIcon } from './Icons/FilterIcon';
import { X, XIcon } from 'lucide-react';
import FilterModal from './Modal/FilterModal';
import { brands, categories, colors, sizes } from '../utils/FIlterData';
import { ComponentIcon } from './Icons/ComponentIcon';
import { LayoutIcon } from './Icons/LayoutIcon';
const products = [
    { id: 1, name: 'Green Western Dress', price: '1000', image: '/Card (1).png' },
    { id: 2, name: 'Green Western Dress', price: '1000', image: '/Card (2).png' },
    { id: 3, name: 'Green Western Dress', price: '1000', image: '/Card (3).png' },
    { id: 4, name: 'Green Western Dress', price: '1000', image: '/Card (4).png' },
    { id: 5, name: 'Green Western Dress', price: '1000', image: '/Frame 43.png' },
    { id: 6, name: 'Green Western Dress', price: '1000', image: '/Frame 44.png' },
    { id: 7, name: 'Green Western Dress', price: '1000', image: '/Frame 45.png' },
    { id: 8, name: 'Green Western Dress', price: '1000', image: '/Frame 46.png' },
    { id: 9, name: 'Green Western Dress', price: '1000', image: '/Card (4).png' },
    { id: 10, name: 'Green Western Dress', price: '1000', image: '/Frame 44.png' },
    { id: 11, name: 'Green Western Dress', price: '1000', image: '/Card (2).png' },
    { id: 12, name: 'Green Western Dress', price: '1000', image: '/Frame 46.png' },
];

const PRODUCTS_PER_PAGE = 8; // Limit products per page

const NewIn = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    // Calculate index range for products to display
    const indexOfLastProduct = currentPage * PRODUCTS_PER_PAGE;
    const indexOfFirstProduct = indexOfLastProduct - PRODUCTS_PER_PAGE;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    // Calculate total pages
    const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);

    const toggleFilterModal = () => {
        setIsFilterOpen(!isFilterOpen);
    };

    return (
        <>

            <Navbar />
            <div className="min-h-screen bg-white">
                <header className="flex justify-between items-center p-4">
                    <div className='relative'>
                        <FilterModal isOpen={isFilterOpen}
                            toggleFilterModal={toggleFilterModal}
                            categories={categories}
                            brands={brands}
                            colors={colors}
                            sizes={sizes} />
                    </div>

                    <div className='flex space-x-2'>
                        <LayoutIcon />
                        <ComponentIcon />
                    </div>

                </header>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
                    {currentProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                {/* Pagination Controls */}
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    setCurrentPage={setCurrentPage}
                />

            </div>
        </>
    );
};

export default NewIn;
