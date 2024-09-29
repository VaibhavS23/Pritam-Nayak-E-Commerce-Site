import React from 'react';
import { Star } from 'lucide-react';
import { TestimonialSlider } from './Slider';
import './Testomonial.css'


const testimonials = [
    {
        text: "Lorem ipsum odor amet, consectetuer adipiscing elit. Nisl porttitor libero etiam in quisque ante donec molestie. Tempus auctor consectetur tempor sem placerat maximus eros.Lorem ipsum odor amet, consectetuer adipiscing elit. Nisl porttitor libero etiam in quisque ante donec molestie. Tempus auctor consectetur tempor sem placerat maximus eros.Lorem ipsum odor amet, consectetuer adipiscing elit. Nisl porttitor libero etiam in quisque ante donec molestie.Lorem ipsum odor amet, consectetuer adipiscing elit. Nisl porttitor libero etiam in quisque ante donec molestie. elit. Nisl porttitor libero etiam in quisque ante donec molestie.Lorem ipsum odor amet, consectetuer adipiscing elit. Nisl porttitor libero etiam in quisque ante donec molestie.",
        author: "LR RIYA",
    },
    {
        text: "Tempor auctor scelerisque pharetra. Sed viverra ipsum.",
        author: "JULIA",
    },
];

const images = [
    { id: 1, src: '/Frame 43.png', alt: 'Model 1' },
    { id: 2, src: '/Frame 44.png', alt: 'Model 2' },
    { id: 3, src: '/Frame 45.png', alt: 'Model 3' },
    { id: 4, src: '/Frame 46.png', alt: 'Model 4' },
];

const TestimonialSection = () => {
    return (
        <div className="min-h-screen">
            <section className="text-center py-12 bg-white relative overflow-hiddenanimate-appear"
                style={{ animation: 'appear linear', animationTimeline: 'view()', animationRange: 'entry 0 cover 40%' }}>
                <div className="absolute inset-0 flex justify-center items-center">
                    <div className="w-[80%] h-[300px] bg-white opacity-60 blur-2xl"></div>
                </div>

                <h2 className="text-sm uppercase tracking-wider relative z-10 slidertxt">Here Us About From</h2>
                <h1 className="text-5xl font-semibold mt-2 relative z-10 sliderauthor ">Happy Folks</h1>

                <div className="flex justify-center mt-10 relative z-10">
                    {[...Array(5)].map((_, index) => (
                        <Star key={index} className="text-black mx-1 font-medium" />
                    ))}
                </div>

                <div className="mt-8 mx-auto max-w-4xl z-10">
                    <TestimonialSlider testimonials={testimonials} />
                </div>
            </section>

            <section id='inputform' className="relative bg-cover bg-center py-16" style={{animation: 'appear linear', animationTimeline: 'view()', animationRange: 'entry 0 cover 40%' }}
            >
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black bg-opacity-50 z-0"></div>

                <div className="relative max-w-xl mx-auto bg-transparent bg-opacity-60 p-8 text-center z-10">
                    <h2 className="text-xl mb-4 text-white slidertxt">Make an Appointment</h2>
                    <p className="text-4xl mb-8 text-white sliderauthor">Get Recommendations from a personal stylist</p>
                    <form>
                        <input type="text" placeholder="Your Name" className=" i1 w-full p-4 mb-4 border bg-transparent border-gray-300 text-white placeholder:text-white  focus:outline-none" />
                        <input type="email" placeholder="Your Email" className=" i1 w-full p-4 mb-4 border bg-transparent border-gray-300 placeholder:text-white  focus:outline-none" />
                        <input type="text" placeholder="Phone Number" className=" i1 w-full p-4 mb-4 border bg-transparent border-gray-300 placeholder:text-white  focus:outline-none" />
                        <textarea placeholder="Your Message" className=" i1 w-full p-4 mb-4 border bg-transparent border-gray-300 placeholder:text-white  focus:outline-none"></textarea>
                        <button className="w-full bg-black text-white p-4 uppercase">Book an Appointment</button>
                    </form>
                </div>
            </section>

            <section className="py-12 px-8 max-w-7x2 mx-auto ">
                <div className="flex items-center mb-8 animate-appear"
                    style={{ animation: 'appear linear', animationTimeline: 'view()', animationRange: 'entry 0 cover 40%' }}>
                    <h2 className="text-4xl font-semibold mr-4 followus">Follow us</h2>
                    <div className="ml-4">
                        <img src="/Arrow.svg" alt="" />
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {images.map((image) => (
                        <div key={image.id} className="overflow-hidden animate-appear"
                            style={{ animation: 'appear linear', animationTimeline: 'view()', animationRange: 'entry 0 cover 40%' }}>
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-auto transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
};

export default TestimonialSection;
