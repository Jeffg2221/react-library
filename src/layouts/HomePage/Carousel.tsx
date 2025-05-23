// Optionally import the image at the top
import BookImage from './../../Images/BooksImages/book-luv2code-1000.png';
import { ReturnBook } from './ReturnBook';

export const Carousel = () => {
    return (
        <div className="container mt-5" style={{ height: 550 }}>
            <div className="homepage-carousel-title">
                <h3>Find your next "I stayed up too late reading or playing" book or game.</h3>
            </div>

            <div id="carouselExampleControls" className="carousel carousel-dark slide mt-5 d-none d-lg-block" data-bs-interval="false">
                {/* Desktop Carousel */}
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="row d-flex justify-content-center align-items-center">
                            <ReturnBook />
                            <ReturnBook />
                            <ReturnBook />
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="row d-flex justify-content-center align-items-center">
                            <ReturnBook />
                            <ReturnBook />
                            <ReturnBook />
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="row d-flex justify-content-center align-items-center">
                            <ReturnBook />
                            <ReturnBook />
                            <ReturnBook />
                        </div>
                    </div>
                </div>

                {/* Carousel Controls */}
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            {/* Mobile View */}
            <div className="d-lg-none mt-3">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="text-center">
                        <img src={BookImage} width="151" height="233" alt="book" />

                        {/* Move these INSIDE the text-center div */}
                        <h6 className="mt-2">
                            <b>Tech</b>
                        </h6>
                        <p>Tech Spot</p>
                        <a className="btn main-color text-white" href="#!">Reserve</a>
                    </div>
                </div>

                <div className="homepage-carousel-title mt-3 text-center">
                    <a className="btn btn-outline-secondary btn-lg" href="#!">View More</a>
                </div>
            </div>

        </div>
    );
};
