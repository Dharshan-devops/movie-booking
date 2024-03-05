import React, { useState ,useEffect} from "react";
import DatePicker from 'react-horizontal-datepicker';
import './buytickets.css'
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { CiMobile1 } from "react-icons/ci";
import { IoFastFoodOutline } from "react-icons/io5";
import {useLocation} from 'react-router-dom';
import { HashLoader } from "react-spinners";
import axios from "axios";
import { BiSolidMoviePlay } from "react-icons/bi";
import { BiCameraMovie } from "react-icons/bi";
function Buyticket(state){
    const location = useLocation();
    const navigateTo=useNavigate()
    let moviename=location.state.movieName
    let movieType=location.state.type
    const [loading, setLoading] = useState(false);
    const [movie,updatemovie]=useState(null)


    //DATE

    const [date,setDate]=useState(null)
    const selectedDay = (val) =>{
        console.log(val)
        setDate(val)
    };


    const updateMovieDetailsState = (data) => {
        updatemovie(data);
    };

    const getData = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/v1/getScreen', {
                "title": "DemonSlayer"
            });
            updateMovieDetailsState(response.data);
            // console.log(response.data)
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    // Return loading spinner if movie details are still loading
    if (loading || movie === null) {
        return (
            <div className="loading-spinner-container">
                <HashLoader color={"#36D7B7"} loading={true} size={50} />
            </div>
        );
    }


    console.log(movie)


    return(
        <div className="buytickets">
            <div className="s1">
                <div className="head">
                    <h2>{moviename}</h2>
                    <h3>{movieType}</h3>
                </div>
                <div className="slick-row">
                    <div className="date-picker">
                        <DatePicker getSelectedDay={selectedDay}
                        endDate={50}
                        selectDate={new Date("2020-04-30")}
                        labelFormat={"MMMM"}
                        color={"rgb(248,68,100)"}          
                    />
                    </div>
                </div>
            </div>
            <div className="screens">
                 {
                    movie.map((screen,index)=>{
                        return( 
                            <div className="screen" key={index}>
                                <div className="left-block">
                                    <h3><CiHeart /> {screen.location}</h3>
                                    <div className="labels">
                                        <p ><CiMobile1 className="mobile-icon"/> M -ticket</p>
                                        <p className="food-icon"><IoFastFoodOutline /> Food & Beverage</p>
                                        <p className="screenName"><BiCameraMovie />{screen.screenName}</p>
                                        <p className="language"><BiSolidMoviePlay /> {screen.language}</p>
                                    </div>
                                </div>

                                <div className="right-block">
                                    <button className="time-button" onClick={()=>{
                                    return(
                                        navigateTo("/pages/screens",{state:{moviename:moviename,screen:screen.screenName,time:screen.time,location:screen.location}})
                                    )}}>{screen.time}<p className="cinemaType">{screen.screenType}</p></button>
                                </div>
                            </div> 
                        )
                    })
                 }
            </div>
        </div>
    )
}

export default Buyticket