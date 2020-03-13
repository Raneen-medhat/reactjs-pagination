import React, { useState, useEffect } from 'react';
import './pagination.css';

const Pagination = (props) => {
    const { items, itemsPerPage, initialPage } = props;
    const [currentPage, setCurrentPage] = useState(initialPage);
    const [numOfpages, setnumOfpages] = useState(Math.ceil(items.length / itemsPerPage));
    const [itemsPerLastPage, setItemsPerLastPage] = useState(items.length - (numOfpages - 1) * itemsPerPage);
    const [shownItems, setShownItems] = useState(null);
    const nextPage = () => {
        if (currentPage < numOfpages) {
            let endIndex = (currentPage * itemsPerPage) + itemsPerPage;
            endIndex > items.length ? endIndex = items.length : endIndex = endIndex;
            let startIndex = (currentPage * itemsPerPage) + 1;
            setCurrentPage(currentPage+1);
            setShownItems(items.slice(startIndex - 1, endIndex));
        }
    }

    const prevPage = () => {
        if (currentPage > 1) {
            let endIndex = (currentPage * itemsPerPage) - itemsPerPage;
            endIndex > items.length ? endIndex = items.length : endIndex = endIndex;
            const startIndex = (endIndex - itemsPerPage);
            setCurrentPage(currentPage-1);
            setShownItems(items.slice(startIndex, endIndex));
        }

    }

    const goToPage = (page) => {
        let endIndex = (page * itemsPerPage);
        endIndex > items.length ? endIndex = items.length : endIndex = endIndex;
        const startIndex = (endIndex - itemsPerPage);
        setCurrentPage(page);
        setShownItems(items.slice(startIndex, endIndex));
    }

    return (
        <div id="pagination">
            <div className="center">
                <div className="pagination">
                    <a href="#" className='prev'
                       onClick={prevPage} 
                    >&laquo;</a>
                    <a href="#" onClick={() => goToPage(1)}>1</a>
                    <a href="#" className="active" onClick={() => goToPage(2)}>2</a>
                    <a href="#" onClick={() => goToPage(3)}>3</a>
                    <a href="#" onClick={() => goToPage(4)}>4</a>
                    <a href="#" onClick={() => goToPage(5)}>5</a>
                    <a href="#" className='next'
                       onClick={nextPage} 
                    >&raquo;</a>
                </div>
            </div>
        </div>
    );
};

export default Pagination;