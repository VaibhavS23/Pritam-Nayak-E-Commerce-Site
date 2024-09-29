import React from 'react';

const NewInPage = () => {
    const products = [
        {
            id: 1,
            title: 'Green Western Dress',
            price: '$1000',
            imageSrc: '/Card.png',
        },
        {
            id: 2,
            title: 'Green Western Dress',
            price: '$1000',
            imageSrc: '/Card (1).png',
        },
        {
            id: 3,
            title: 'Green Western Dress',
            price: '$1000',
            imageSrc: '/Card (2).png',
        },
        {
            id: 4,
            title: 'Green Western Dress',
            price: '$1000',
            imageSrc: '/Card (3).png',
        },
    ];

    return (
        <div className="min-h-screen bg-white py-12 px-8">
            <div className="text-center">
                <h1 className="text-4xl font-serif font-semibold mb-4">New In</h1>
                <p className="max-w-2xl mx-auto text-gray-600">
                    Explore pieces that never go out of style. Our timeless classics ensure you always look elegant, no matter the occasion.
                    Crafted with high-quality materials and a keen eye for detail, these pieces are designed to be wardrobe staples that you can rely on year after year.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                {products.map((product) => (
                    <div key={product.id} className="group animate-appear"
                        style={{ animation: 'appear linear', animationTimeline: 'view()', animationRange: 'entry 0 cover 40%' }}
                    >
                        <div className="aspect-w-3 aspect-h-4 overflow-hidden">
                            <img
                                src={product.imageSrc}
                                alt={product.title}
                                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="mt-4 text-center">
                            <span className="block uppercase font-serif tracking-wider">Couture</span>
                            <h2 className="text-xl mt-2">{product.title}</h2>
                            <p className="text-gray-600">(USD) {product.price}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center mt-12">
                <button className="px-6 py-3 bg-black text-white uppercase font-semibold hover:bg-gray-800 transition">
                    View All
                </button>
            </div>
        </div>
    );
};

export default NewInPage;
