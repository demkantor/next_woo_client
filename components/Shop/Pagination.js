import { useState } from 'react';
import Link from "next/link";

const Pagination = ({ pageTotal }) => {
    console.log('pages', pageTotal);

    const [currentPage, setCurrentPage] = useState(1);

    const newPage = (page) => {
        if(isNaN(page)) {
            if(page === 'next' && currentPage < pageTotal) {
                setCurrentPage(currentPage + 1);
            } else if (page === 'prev' && currentPage > 1){
                setCurrentPage(currentPage - 1);
            }
        } else {
            setCurrentPage(page);
        };
        console.log('current page', currentPage)
    };

    return (
        <div>
            <ul className="pagination">
                <li className={`page-item ${currentPage < 2} ? disabled : ""`} onClick={()=>newPage('prev')}>
                    <a className="page-link" href="#">&laquo;</a>
                </li>
                {[...Array(pageTotal)].map((page, i) => (
                    <li className={`page-item ${currentPage === i + 1} ? active : ""`} key={i} onClick={()=>newPage(i+1)}>
                        <Link
                            href={`/shop`}
                            as={{
                                pathname: `/shop/`,
                                query: { page: (i + 1) }
                                }}>
                                <a className="page-link">{i + 1}</a>
                        </Link>
                    </li>
                ))}
                <li className="page-item">
                    <a className="page-link" href="#">3</a>
                </li>
                <li className="page-item active">
                    <a className="page-link" href="#">4</a>
                </li>
                <li className={`page-item ${currentPage > pageTotal - 1} ? disabled : ""`} onClick={()=>newPage('next')}>
                    <a className="page-link" href="#">&raquo;</a>
                </li>
            </ul>
        </div>
    );
};

export default Pagination;
