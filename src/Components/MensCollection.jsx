import React from 'react';
import './MensCollectionPage.css';
import Trending from './TrendingSection.jsx'

const Txt = ()=>{
    return(<div className='mencollection'>
        <p className='mencollectiontxt1' >Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p className='mencollectiontxt2' >Latest Collections</p>
        </div>);
}

const CollectionSection = ({ mainImage, smallImage, title, description, reversed = false }) => {
    return (<>
        <div className={`collection-section ${reversed ? 'collection-section-reversed' : ''}`}>
            <div className="w-full md:w-3/5">
                <img
                    src={mainImage}
                    alt="Main Collection"
                    className="w-full h-full object-cover animate-appear"
                />
            </div>

            <div className={`w-full md:w-2/5 flex flex-col mt-6 md:mt-0`}>
                <img
                    src={smallImage}
                    alt="Small Collection"
                    className="w-full md:w-100 object-cover mb-50 flex-grow animate-appear"
                />

                <h2 className="title animate-appear">{title}</h2>

                <p className="description animate-appear">
                    {description}
                </p>

                <button className="view-now-button animate-appear">
                    View Now
                </button>
            </div>
        </div></>
    );
};

const MensCollectionPage = () => {
    return (<>
    
        <Txt/>
        <div className="py-12 px-4 md:px-10 bg-white">
            <CollectionSection
                mainImage="/mens(1).png"
                smallImage="/mens(2).png"
                title="MEN'S COLLECTION"
                description="Timeless elegance meets modern sophistication. Meticulously crafted for style and comfort, our premium pieces elevate the discerning gentleman’s wardrobe."
            />

            <CollectionSection
                mainImage="/wm(1).png"
                smallImage="/wm(2).png"
                title="WOMEN'S COLLECTION"
                description="Discover our luxurious women's collection, where elegance meets comfort and timeless design."
                reversed={true}
            />

            <div className="video-section animate-appear">
                <video
                    className="video"
                    src="/video.mp4"
                    autoPlay
                    loop
                    muted
                />

                <div className="absolute inset-0 flex flex-col justify-end items-start p-4 md:p-16">
                    <h1 className="text-white text-2xl md:text-6xl font-semibold mb-4 videohead">
                        Conscious Couture
                    </h1>
                    <p className="text-white text-sm md:text-md videodiscription">
                        Fashion with a conscience. We upcycle and recycle to create stylish, sustainable clothing.
                    </p>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start mx-auto gap-6 pt-16">
                <div className="w-full md:w-2/3 grid-images">
                    <div className="w-full h-full">
                        <img
                            src="/image 16.png"
                            alt="Small Collection"
                            className="w-full h-full object-cover rounded-lg animate-appear"
                        />
                    </div>

                    <div className="w-full h-full">
                        <img
                            src="/image 16.png"
                            alt="Small Collection"
                            className="w-full h-full object-cover rounded-lg animate-appear"
                        />
                    </div>

                    <div className="col-span-2 w-full">
                        <img
                            src="/image 14.png"
                            alt="Main Collection"
                            className="w-full object-cover rounded-lg animate-appear large-image"
                        />
                    </div>
                </div>

                <div className="w-full md:w-5/1 flex flex-col justify-start items-start mt-6 md:mt-0 h-50%">
                    <img
                        src="/image 16.png"
                        alt="Detailed View"
                        className="w-full h-auto object-cover rounded-lg mb-6 animate-appear"
                    />

                    <div className="flex flex-col p-4 mt-6 md:mt- animate-appear">
                        <p className="text-md text-gray-500 uppercase mb-2 tracking-wide msec5disc">
                            Find the best accessories piece for any occasion
                        </p>
                        <h2 className="text-2x2 md:text-4xl font-serif font-bold leading-tight mb-6 msec5head "  >
                            Timeless Accessories <br /> Crafted With Love!
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed msec5disc">
                            Each piece of Accessories is handmade in our production workshops where we maintain a close relationship with our manufacturers who keep the production process as sustainable and transparent as possible.
                        </p>
                    </div>
                </div>
            </div>
            <Trending/>
        </div>
        </>
    );
};

export default MensCollectionPage;
