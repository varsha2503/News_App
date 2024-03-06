import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { FaSpinner } from 'react-icons/fa';

const FetchData = ({ cat }) => {
    const [Data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const contentRef = useRef(null);

    const fetchData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&page=${page}&pageSize=12&apiKey=dd659ea07d714425aaf563eb0e086020`;
        if (cat) {
            url = `https://newsapi.org/v2/top-headlines?country=in&category=${cat}&page=${page}&pageSize=12&apiKey=dd659ea07d714425aaf563eb0e086020`;
        }

        try {
            const res = await axios.get(url);
            setData(res.data.articles);
            setLoading(false);
            scrollToTop();
        } catch (error) {
            console.log('Error fetching data:', error);
            setLoading(false);
        }
    };

    const scrollToTop = () => {
        contentRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        fetchData();
    }, [page, cat]);

    const handleNextPage = () => {
        setPage(page + 1);
    };

    const handlePrevPage = () => {
        setPage(page - 1);
    };

    return (
        <div className="container my-4" ref={contentRef}>
            <div className="container my-4 mx-2">
                <h3 className="text-center" style={{ marginBottom: "20px" }}>TOP HEADINGS</h3>
                <div className="row">
                    {loading ? (
                        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "50vh" }}>
                            <FaSpinner className="text-primary" style={{ fontSize: "3rem" }} />
                        </div>
                    ) : (
                        <>
                            {Data.map((item, index) => (
                            <div key={index} className="col-md-3">
                                <div className="card mb-4" style={{ boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.5)', transition: 'box-shadow 0.3s ease' }}>
                                    <img src={item.urlToImage} className=" img-fluid"
                                        alt="..."
                                        style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
                                    <div className="card-body" style={{ minHeight: '270px' }}>
                                        <h5 className="card-title">
                                            <a href={item.url} target="_blank" rel="noopener noreferrer"
                                                style={{ color: "black", textDecoration: "none" }}>
                                                {item.title ? item.title.slice(0, 23) : ""}
                                            </a>
                                        </h5>
                                        <p className="card-text">
                                            {item.description ? item.description.slice(0, 150) + "..." : ""}
                                        </p>
                                        <p className="card-text">
                                            {item.source && item.source.name ? item.source.name.slice(0, 200) : ""}
                                        </p>
                                        <p className="card-text"><strong>{item.publishedAt ? new Date(item.publishedAt).toLocaleString() : ""}</strong></p>
                                    </div>
                                </div>
                            </div>
                        ))
}
                            <div className="col-md-12">
                                <div className="d-flex justify-content-between">
                                    <button className="btn btn-primary" onClick={handlePrevPage} disabled={page === 1}>Previous</button>
                                    <button className="btn btn-primary" onClick={handleNextPage}>Next</button>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FetchData;
