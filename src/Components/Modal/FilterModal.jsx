import React, { useState } from 'react';
import { FilterIcon } from '../Icons/FilterIcon';
import { DownIcon } from '../Icons/DownIcon';
import { UpIcon } from '../Icons/UpIcon';

const FilterModal = ({ isOpen, toggleFilterModal, categories, brands, colors, sizes }) => {
    const [showMoreCategories, setShowMoreCategories] = useState(false);
    const [showMoreBrands, setShowMoreBrands] = useState(false);
    const [showMoreColors, setShowMoreColors] = useState(false);

    const limit = 2;

    return (
        <>
            <button
                className="flex items-center space-x-2 text-gray-700 focus:outline-none"
                onClick={toggleFilterModal}
            >
                <FilterIcon className="w-5 h-5 text-gray-700" />
                <span className="font-medium">Show Filters</span>
                {isOpen ? <DownIcon /> : <UpIcon />}
            </button>

            <div
                className={`absolute bg-white text-black mt-6 rounded-lg shadow-lg p-6 w-80 overflow-y-auto transition-all duration-300 ease-in-out
                     z-10 custom-scrollbar ${isOpen ? 'translate-x-0 opacity-100 shadow-lg shadow-black' : '-translate-y-2 opacity-0 pointer-events-none'}`}
            >
                {/* Categories Section */}
                <div className="mb-6">
                    <h3 className="text-lg font-medium">CATEGORY</h3>
                    <ul className="space-y-2 mt-2">
                        {(showMoreCategories ? categories : categories.slice(0, limit)).map((category, index) => (
                            <li key={index}>
                                <input type="radio" id={category} name="category" className="mr-2" />
                                <label htmlFor={category}>{category}</label>
                            </li>
                        ))}
                    </ul>
                    {categories.length > limit && (
                        <button
                            className="text-sm text-gray-600 mt-2 flex items-center"
                            onClick={() => setShowMoreCategories(!showMoreCategories)}
                        >
                            <span className="mr-1">
                                {showMoreCategories ? '- View Less' : '+ View More'}
                            </span>
                        </button>
                    )}
                </div>

                {/* Brands Section */}
                <div className="mb-6">
                    <h3 className="text-lg font-medium">BRANDS</h3>
                    <ul className="space-y-2 mt-2">
                        {(showMoreBrands ? brands : brands.slice(0, limit)).map((brand, index) => (
                            <li key={index}>
                                <input type="radio" id={brand} name="brands" className="mr-2" />
                                <label htmlFor={brand}>{brand}</label>
                            </li>
                        ))}
                    </ul>
                    {brands.length > limit && (
                        <button
                            className="text-sm text-gray-600 mt-2 flex items-center"
                            onClick={() => setShowMoreBrands(!showMoreBrands)}
                        >
                            <span className="mr-1">
                                {showMoreBrands ? '- View Less' : '+ View More'}
                            </span>
                        </button>
                    )}
                </div>

                {/* Colors Section */}
                <div className="mb-6">
                    <h3 className="text-lg font-medium">COLOR</h3>
                    <ul className="space-y-2 mt-2">
                        {(showMoreColors ? colors : colors.slice(0, limit)).map((color, index) => (
                            <li key={index} className="flex items-center space-x-2">
                                <span
                                    className="w-4 h-4 rounded-full"
                                    style={{ backgroundColor: color.hex }}
                                ></span>
                                <label htmlFor={color.name} className="ml-2">{color.name}</label>
                            </li>
                        ))}
                    </ul>
                    {colors.length > limit && (
                        <button
                            className="text-sm text-gray-600 mt-2 flex items-center"
                            onClick={() => setShowMoreColors(!showMoreColors)}
                        >
                            <span className="mr-1">
                                {showMoreColors ? '- View Less' : '+ View More'}
                            </span>
                        </button>
                    )}
                </div>

                {/* Size Section */}
                <div className="mb-6">
                    <h3 className="text-lg font-medium">SIZE</h3>
                    <ul className="space-y-2 mt-2">
                        {sizes.map((size, index) => (
                            <li key={index}>
                                <input type="radio" id={size} name="size" className="mr-2" />
                                <label htmlFor={size}>{size}</label>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default FilterModal;
