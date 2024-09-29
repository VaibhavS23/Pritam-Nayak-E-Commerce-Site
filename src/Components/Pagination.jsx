import React from 'react';

const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
    // Function to handle page change
    const goToPage = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <div className="flex justify-center items-center space-x-2 py-6">
            {/* Previous Page Button */}
            <button
                onClick={() => goToPage(currentPage - 1)}
                className={`px-3 py-1 border rounded ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={currentPage === 1}
            >
                Previous
            </button>

            {/* Display page numbers dynamically */}
            {[...Array(totalPages).keys()].map((_, index) => (
                <button
                    key={index}
                    onClick={() => goToPage(index + 1)}
                    className={`px-3 py-1 border rounded ${currentPage === index + 1 ? 'bg-black text-white' : ''}`}
                >
                    {index + 1}
                </button>
            ))}

            {/* Next Page Button */}
            <button
                onClick={() => goToPage(currentPage + 1)}
                className={`px-3 py-1 border rounded ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={currentPage === totalPages}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
