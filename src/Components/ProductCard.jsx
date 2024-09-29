import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div key={product.id} className="group mt-8"
        >
            <div className="aspect-[3/4] overflow-hidden">
                <img
                    src={product.image}
                    alt={product.title}
                    loading='lazy'
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
            </div>
            <div className="mt-4 text-center">
                <span className="block uppercase font-serif tracking-wider">Couture</span>
                <h2 className="text-xl mt-2">{product.title}</h2>
                <p className="text-gray-600">(USD) {product.price}</p>
            </div>
        </div>
    );
};

export default ProductCard;
