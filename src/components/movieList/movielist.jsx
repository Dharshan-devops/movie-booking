import React from "react";
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { useState } from "react";
import './movielist.css'
import { Pagination } from "swiper/modules";
import { Swiper,SwiperSlide } from "swiper/react";
import {BsFillStarFill} from 'react-icons/bs'
import {useNavigate} from "react-router-dom"



function MovieList(){

    const navigateTo=useNavigate()
    const city="Bangalore"
    const movieName="DemonSlayer"
    const [cards,setCards] =useState([
        {
            title: "Article-370",
            imageUrl:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-NDMuM0sgTGlrZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00384444-mzvhsrbbch-portrait.jpg",
            rating: 8.5,
            type: "Drama/political"
        },
        {
            title: "DemonSlayer",
            imageUrl:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC44LzEwICA1LjdLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00388033-zbwdafumem-portrait.jpg",
            rating: 8.5,
            type: "Anime"
        },

        {
            title: "Manjummel Boys",
            imageUrl:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS4yLzEwICA2LjhLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00386670-epsebvgzmv-portrait.jpg",
            rating: 8.5,
            type: "Adventure/Drama/thriller"
        },
        {
            title: "Dune-2",
            imageUrl:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-NjYuNUsgTGlrZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00331567-emeflyzqwh-portrait.jpg",
            rating: 8.5,
            type: "Scifi/Adventure/Drama"
        },
        {
            title: "Bramayugam",
            imageUrl:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS8xMCAgNDEuOEsgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00367666-lqdxdwaryy-portrait.jpg",
            rating: 9,
            type: "thriller"
        },
        {
            title: "Vinnaithaandi Varuvaaya",
            imageUrl:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS8xMCAgMTAuMUsgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00038721-clrcxusyvu-portrait.jpg",
            rating: 9,
            type: "love"
        }
    ])




    return(
        <>
    <div className="container">
        <div className="block1" onClick={()=>{
            navigateTo("/pages/"+city+"/"+movieName)
        }}>
            <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC44LzEwICA1LjdLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00388033-zbwdafumem-portrait.jpg" alt=""/>
            <p className="title">Demon Slayer</p>
            <p className="type">Action/Adventure/Anime</p>
        </div>
        <div className="block2" onClick={()=>{
            navigateTo("/pages/"+city+"/"+movieName)
        }}>
            <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC44LzEwICA1LjdLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00388033-zbwdafumem-portrait.jpg" alt=""/>
            <p className="title">Demon Slayer</p>
            <p className="type">Action/Adventure/Anime</p>
        </div>
        <div className="block3" onClick={()=>{
            navigateTo("/pages/"+city+"/"+movieName)
        }}>
            <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC44LzEwICA1LjdLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00388033-zbwdafumem-portrait.jpg" alt=""/>
            <p className="title">Demon Slayer</p>
            <p className="type">Action/Adventure/Anime</p>
        </div>
        <div className="block4" onClick={()=>{
            navigateTo("/pages/"+city+"/"+movieName)
        }}>
            <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC44LzEwICA1LjdLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00388033-zbwdafumem-portrait.jpg" alt=""/>
            <p className="title">Demon Slayer</p>
            <p className="type">Action/Adventure/Anime</p>
        </div>
        <div className="block5" onClick={()=>{
            navigateTo("/pages/"+city+"/"+movieName)
        }}>
            <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC44LzEwICA1LjdLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00388033-zbwdafumem-portrait.jpg" alt=""/>
            <p className="title">Demon Slayer</p>
            <p className="type">Action/Adventure/Anime</p>
        </div>

    </div>
        </>
    )
}

export default MovieList