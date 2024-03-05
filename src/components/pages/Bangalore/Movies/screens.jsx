import React, { useState, useEffect } from "react";
import screenImage from '../../../../assets/screen.png';
import './screens.css';
import axios from "axios";
import { useLocation } from "react-router-dom";
import { HashLoader } from "react-spinners";
import Swal from 'sweetalert2'
function Screens(state) {
    const [loading, setLoading] = useState(false);
    const [screen, updatescreen] = useState(null)
    const [selectedSeats, setSelectedSeats] = useState([]);
    const location = useLocation()
    const screenName = location.state.screen
    const time = location.state.time
    const movieLocation = location.state.location
    const movieName= location.state.moviename
    console.log(screenName, time, movieLocation)

    const updateScreenDetailsState = (data) => {
        updatescreen(data);
    };

    const getData = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/v1/getScreen', {
                "title": movieName
            });
            updateScreenDetailsState(response.data);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        getData();
    }, []);


    // Return loading spinner if movie details are still loading
    if (loading || screen === null) {
        return (
            <div className="loading-spinner-container">
                <HashLoader color={"#36D7B7"} loading={true} size={50} />
            </div>
        );
    }


    console.log(screen)




    const toggleSeatSelection = (seatId) => {
        const index = selectedSeats.indexOf(seatId);
        if (index !== -1) {
            // Seat is already selected, so unselect it
            setSelectedSeats(prevSeats => prevSeats.filter(seat => seat !== seatId));
        } else {
            // Seat is not selected, so select it
            setSelectedSeats(prevSeats => [...prevSeats, seatId]);
        }
    }


    console.log(selectedSeats)

    async function bookTicket() {
        try {
            console.log("button clicked")
            const response = await axios.post('http://127.0.0.1:8000/v1/bookTicket', {
                title: screen[0].title,
                time: time,
                seats: selectedSeats
            });

            console.log(response)
            if (response.status === 200) {
                let timerInterval;
                Swal.fire({
                    title: "Booking Your seats",
                    html: "I will close in <b></b> milliseconds.",
                    timer: 2000,
                    timerProgressBar: true,
                    didOpen: () => {
                        Swal.showLoading();
                        const timer = Swal.getPopup().querySelector("b");
                        timerInterval = setInterval(() => {
                            timer.textContent = `${Swal.getTimerLeft()}`;
                        }, 100);
                    },
                    willClose: () => {
                        clearInterval(timerInterval);
                    }
                }).then((result) => {
                    /* Read more about handling dismissals below */
                    if (result.dismiss === Swal.DismissReason.timer) {
                        console.log("I was closed by the timer");
                    }
                });
                
                setTimeout(()=> window.location.reload(false),1000)
            }

        } catch (err) {
            console.log(err)
        }
    }


    return (
        <div className="mainContainer">
            <div className="headContainer">
                <h2>{screen[0].title}</h2>
                <h3>{movieLocation}</h3>
                <h4>{screenName}</h4>
            </div>

            <div className="timeContainer">
                <div className="timeBox">
                    <h2>{time}</h2>
                </div>
            </div>
            <div className="container">
                <div className="seatContainer">
                    {screen[0].seats.map((seat, index) => (
                        <div
                            key={index}
                            className={`boxStyle ${seat.status === 'available' ? 'available' : 'unavailable'} ${selectedSeats.includes(seat.seatId) ? 'selected' : ''}`}
                            onClick={() => toggleSeatSelection(seat.seatId)}
                        >
                            <p>{seat.seatId}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="footer">
                <img className="screenImage" src={screenImage} alt="helo" />
            </div>
            <div className="bookButton">
                <button
                    className='theme_btn1 linkstylenone'
                    onClick={bookTicket}
                >Book Now</button>
            </div>
        </div>
    );
}

export default Screens;