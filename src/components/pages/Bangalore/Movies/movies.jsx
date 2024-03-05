// Bangalore.js
import { React, useEffect, useState } from "react";
import { BsShare } from "react-icons/bs";
import { BsFillStarFill } from "react-icons/bs";
import './movies.css'
import MovieList from "../../../movieList/movielist";
import Buyticket from "./buytickets";
import { Outlet } from "react-router-dom/dist";
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { useNavigate, useParams } from "react-router-dom";

import axios from "axios";
import { HashLoader } from "react-spinners";
import { useSearchParams } from "react-router-dom";

function Movies() {
    const city = "Bangalore"
    const navigateTo = useNavigate();
    const [loading, setLoading] = useState(false);
    const params = useParams();
    const movieName = params.movies;
    const [movie_details, updateMovieDetails] = useState(null);

    const updateMovieDetailsState = (data) => {
        updateMovieDetails(data);
    };

    const getData = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/v1/getMovie', {
                "movie": movieName
            });
            updateMovieDetailsState(response.data);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    // Return loading spinner if movie details are still loading
    if (loading || movie_details === null) {
        return (
            <div className="loading-spinner-container">
                <HashLoader color={"#36D7B7"} loading={true} size={50} />
            </div>
        );
    }

    return (
        <>
            <div className="moviepage" >
                <div className="c1" style={{ backgroundImage: `url(${movie_details.wideposter})` }}>
                    <div className="c11">

                        <div className="left">
                            <div className="movie_poster" style={{ backgroundImage: `url(${movie_details.potraitposter})` }}>
                                <p>In cinemas</p>
                            </div>

                            <div className="moviedetails">
                                <p className="movie-title">{movie_details.title}</p>
                                <p className="rating"><BsFillStarFill className="star" />&nbsp;&nbsp;
                                    {movie_details.rating}/10</p>
                                <div className="horizontal-flex">
                                    <p className="halls">
                                        {
                                            movie_details.halls.map((hall, index) => {
                                                return (
                                                    <span key={index}>{hall} </span>
                                                )
                                            })
                                        }
                                    </p>

                                    <p className="languages">
                                        {
                                            movie_details.languages.map((language, index) => {
                                                return (
                                                    <span key={index}>{language}</span>
                                                )
                                            })
                                        }
                                    </p>


                                </div>

                                <p className="duration_type_releasedate">
                                    <span className="duration">{movie_details.duration}</span>
                                    <span>•</span>
                                    <span className="movie-type">{movie_details.type}</span>
                                    <span>•</span>
                                    <span className="releasedate">{movie_details.releasedate}</span>
                                </p>

                                <button className="bookbtn" onClick={() => navigateTo( '/pages/buyticket',{state:{movieName:movieName,type:movie_details.type,city:city}})}>Book Tickets</button>

                            </div>
                        </div>

                        <div className="right">
                            <button className="sharebtn"><BsShare className="shareicon" />Share</button>
                        </div>
                    </div>
                </div>

                <div className="c2">
                    <h2>About the Movie</h2>
                    <p>{movie_details.about}</p>
                    <div className="divider"></div>
                    <h2>Cast</h2>
                    <div className="circlecardslider">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={1}
                            pagination={{
                                clickable: true,
                            }}
                            breakpoints={{
                                '@0.00': {
                                    slidesPerView: 1,
                                    spaceBetween: 2,
                                },
                                '@0.75': {
                                    slidesPerView: 2,
                                    spaceBetween: 2,
                                },
                                '@1.00': {
                                    slidesPerView: 3,
                                    spaceBetween: 2,
                                },
                                '@1.50': {
                                    slidesPerView: 6,
                                    spaceBetween: 2,
                                },
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            {
                                movie_details.cast.map((cast, index) => {
                                    return (
                                        <SwiperSlide key={index}>
                                            <div className="celebcard">
                                                <img src={cast.imageurl} alt="" width={200} height={200} />
                                            </div>
                                            <h3 style={{ color: "black", fontSize: "15px", fontWeight: 600 }}>{cast.name}</h3>
                                            <h4 style={{ color: "gray", fontSize: "13px", fontWeight: 400 }} >{cast.role}</h4>
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                    </div>
                    <div className="divider"></div>
                    {/* <h2>You might also like</h2> */}
                </div>
                {/* <MovieList />  */}
            </div>

            {/* <h2>{movieName}</h2> */}
        </>
    )


}

export default Movies;