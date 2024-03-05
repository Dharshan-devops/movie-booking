import { React, useState } from "react";
import { useLocation } from "react-router-dom";
// import screenImage from '../../../../assets/screen.png';
import "./screenLayout.css"
function ScreenLayout(state) {
    const location = useLocation()
    console.log(location.state.screen)

    const movie = {
        moviename: "Demon Slayer",
        screen: "4DX",
        date: new Date(),
        language: "English",
        type: "Anime",
        screens: [
            {
                name: "Screen 1",
                location: "Nexus Mall Bangalore"
            }
        ]

    }

    const screen = {
        "name": "Screen-1",
        "location": "Nexus Mall , Banagalore",
        "timeslots": [
            {
                "time": "10:00 AM",
                "seats": [
                    {
                        "type": "platinum",
                        "rows": [
                            {
                                "rowname": "H",
                                "cols": [
                                    {
                                        "seats": [
                                            {
                                                "status": "not-available",
                                                "seat_id": "1"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "2"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "3"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "4"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "5"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "6"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "7"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "8"
                                            },
                                            {
                                                "status": "not-available",
                                                "seat_id": "9"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "10"
                                            }
                                        ]
                                    },
                                    {
                                        "seats": [
                                            {
                                                "status": "available",
                                                "seat_id": "1"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "2"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "3"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "4"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "5"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "6"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "7"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "8"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "9"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "10"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "rowname": "G",
                                "cols": [
                                    {
                                        "seats": [
                                            {
                                                "status": "available",
                                                "seat_id": "1"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "2"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "3"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "4"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "5"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "6"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "7"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "8"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "9"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "10"
                                            }
                                        ]
                                    },
                                    {
                                        "seats": [
                                            {
                                                "status": "available",
                                                "seat_id": "1"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "2"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "3"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "4"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "5"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "6"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "7"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "8"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "9"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "10"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "rowname": "F",
                                "cols": [
                                    {
                                        "seats": [
                                            {
                                                "status": "available",
                                                "seat_id": "1"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "2"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "3"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "4"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "5"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "6"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "7"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "8"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "9"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "10"
                                            }
                                        ]
                                    },
                                    {
                                        "seats": [
                                            {
                                                "status": "available",
                                                "seat_id": "1"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "2"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "3"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "4"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "5"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "6"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "7"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "8"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "9"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "10"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ],
                        "price": 500
                    },
                    {
                        "type": "gold",
                        "rows": [
                            {
                                "rowname": "E",
                                "cols": [
                                    {
                                        "seats": [
                                            {
                                                "status": "available",
                                                "seat_id": "1"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "2"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "3"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "4"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "5"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "6"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "7"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "8"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "9"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "10"
                                            }
                                        ]
                                    },
                                    {
                                        "seats": [
                                            {
                                                "status": "available",
                                                "seat_id": "1"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "2"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "3"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "4"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "5"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "6"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "7"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "8"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "9"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "10"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "rowname": "D",
                                "cols": [
                                    {
                                        "seats": [
                                            {
                                                "status": "available",
                                                "seat_id": "1"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "2"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "3"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "4"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "5"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "6"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "7"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "8"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "9"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "10"
                                            }
                                        ]
                                    },
                                    {
                                        "seats": [
                                            {
                                                "status": "available",
                                                "seat_id": "1"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "2"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "3"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "4"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "5"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "6"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "7"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "8"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "9"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "10"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "rowname": "C",
                                "cols": [
                                    {
                                        "seats": [
                                            {
                                                "status": "available",
                                                "seat_id": "1"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "2"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "3"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "4"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "5"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "6"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "7"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "8"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "9"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "10"
                                            }
                                        ]
                                    },
                                    {
                                        "seats": [
                                            {
                                                "status": "available",
                                                "seat_id": "1"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "2"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "3"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "4"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "5"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "6"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "7"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "8"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "9"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "10"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ],
                        "price": 300
                    },
                    {
                        "type": "silver",
                        "rows": [
                            {
                                "rowname": "B",
                                "cols": [
                                    {
                                        "seats": [
                                            {
                                                "status": "available",
                                                "seat_id": "1"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "2"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "3"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "4"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "5"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "6"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "7"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "8"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "9"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "10"
                                            }
                                        ]
                                    },
                                    {
                                        "seats": [
                                            {
                                                "status": "available",
                                                "seat_id": "1"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "2"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "3"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "4"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "5"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "6"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "7"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "8"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "9"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "10"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "rowname": "A",
                                "cols": [
                                    {
                                        "seats": [
                                            {
                                                "status": "available",
                                                "seat_id": "1"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "2"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "3"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "4"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "5"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "6"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "7"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "8"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "9"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "10"
                                            }
                                        ]
                                    },
                                    {
                                        "seats": [
                                            {
                                                "status": "available",
                                                "seat_id": "1"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "2"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "3"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "4"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "5"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "6"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "7"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "8"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "9"
                                            },
                                            {
                                                "status": "available",
                                                "seat_id": "10"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ],
                        "price": 150
                    }
                ]
            }
        ]
    }


    const generateSeatLayout = () => {
        const x = screen.timeslots.findIndex((t) => t.time === selectedTime.time)
        return screen.timeslots[x].seats.map((seatType) => (
            <div className="seat-type">
                <h2>{seatType.type}-Rs{seatType.price}</h2>


                <div className="seat-rows">
                    {
                        seatType.rows.map((rows) => (
                            <div className="seat-row">
                                <p className="rowname">{rows.rowname}</p>
                                <div className="seat-cols">
                                    {
                                        rows.cols.map((col, colIndex) => (
                                            <div className="seat-col" key={colIndex}>
                                                {col.seats.map((seat, seatIndex) => (
                                                    <div key={seatIndex}>
                                                        {
                                                            seat.status == "available" &&
                                                            <span className={
                                                                selectedseat.find((s) => (
                                                                    s.row === rows.rowname &&
                                                                    s.seat_id === seat.seat_id &&
                                                                    s.col === colIndex
                                                                )) ? "seat-selected" : "seat-available"
                                                            }
                                                                onClick={() => selectdeselectseat({
                                                                    type: seatType.type,
                                                                    row: rows.rowname,
                                                                    col: colIndex,
                                                                    seat_id: seat.seat_id,
                                                                    price: seatType.price
                                                                })}
                                                            >
                                                                {seatIndex + 1}
                                                            </span>
                                                        }
                                                        {
                                                            seat.status == "not-available" &&
                                                            <span className="seat-unavailable"
                                                            >
                                                                {seatIndex + 1}
                                                            </span>

                                                        }

                                                    </div>
                                                ))}
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        ))
    }

    const [selectedTime, setselectedTime] = useState(screen.timeslots[0])
    const [selectedseat, setselectedseat] = useState([])
    const selectdeselectseat = (seat) => {
        // console.log(seat)
        const isselected = selectedseat.find((s) => (
            s.row === seat.row &&
            s.col === seat.col &&
            s.seat_id === seat.seat_id
        ))

        if (isselected) {
            setselectedseat(selectedseat.filter((s) => (
                s.row !== seat.row ||
                s.col !== seat.col ||
                s.seat_id !== seat.seat_id
            )))
        }

        else {
            setselectedseat([...selectedseat, seat])
        }

    }

    console.log(selectedseat)
    return (
        <div className="selectseatpage">
            <div className="s1">
                <div className="head">
                    <h1>{movie.moviename}-{movie.language}</h1>
                    <h3>{movie.type}</h3>
                </div>
            </div>

            <div className="selectseat">
                <div className="timecontainer">
                    {screen.timeslots.map((time) => (
                        <div className="movie-location">
                            <h2>{location.state.location}</h2>
                            <div className="screen-details">
                                <p>{location.state.time}</p>
                                <p>{location.state.screen}</p>
                            </div>

                        </div>
                    ))}
                </div>
                <div className="indicators">
                    <div>
                        <span className="seat-unavailable"></span>
                        <p>Not available</p>
                    </div>
                    <div>
                        <span className="seat-available"></span>
                        {/* <p>available</p> */}
                    </div>
                    <div>
                        <span className="seat-selected"></span>
                        <p>selected </p>
                    </div>
                </div>
                {generateSeatLayout()}
                {/* <img className="screenImage" src={screenImage} alt="helo" /> */}
                <div className="totalcontainer">
                    <div className='total'>
                        <h2>Total</h2>
                        <h3>Rs. {selectedseat.reduce((acc, seat) => acc + seat.price, 0)}</h3>
                    </div>
                    <button
                        className='theme_btn1 linkstylenone'
                        onClick={()=>{}}
                    >Book Now</button>
                </div>
            </div>
        </div>
    )

}

export default ScreenLayout