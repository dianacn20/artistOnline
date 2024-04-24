import './Gallery.css';
import React, { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';

import Img1 from "../assets/img/img1.jpg";
import Img2 from "../assets/img/img2.jpg";
import Img3 from "../assets/img/img3.jpg";
import Img4 from "../assets/img/img4.jpg";
import Img5 from "../assets/img/img5.jpg";
import Img6 from "../assets/img/img6.jpg";
import Img7 from "../assets/img/img7.jpg";
import Img8 from "../assets/img/img8.jpg";
import Img9 from "../assets/img/img9.jpg";
import Img10 from "../assets/img/img10.jpg";
import Img11 from "../assets/img/img11.jpg";
import Img12 from "../assets/img/img12.jpg";
import Img13 from "../assets/img/img13.png";

export const Gallery = () =>{
    let data = [
        {
            id: 1,
            imgSrc: Img1,
        },
        {
            id: 2,
            imgSrc: Img2,
        },
        {
            id: 3,
            imgSrc: Img3,
        },
        {
            id: 4,
            imgSrc: Img4,
        },
        {
            id: 5,
            imgSrc: Img5,
        },
        {
            id: 6,
            imgSrc: Img6,
        },
        {
            id: 7,
            imgSrc: Img7,
        },
        {
            id: 8,
            imgSrc: Img8,
        },
        {
            id: 9,
            imgSrc: Img9,
        },
        {
            id: 10,
            imgSrc: Img10,
        },
        {
            id: 11,
            imgSrc: Img11,
        },
        {
            id: 12,
            imgSrc: Img12,
        },
        {
            id: 13,
            imgSrc: Img13,
        }
    ]
    
    const [model, setModel] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState('');
    
    const getImg = (imgSrc) =>{
        setTempImgSrc(imgSrc);
        setModel(true);
        } 

    const handleClose = () => {
        setModel(false);
           };
      
    return(
        <>
        
        <div className={model ? "model open" : "model"}>
            <img src={tempImgSrc} alt="Imagine mare" />
            <CloseIcon onClick={handleClose} />
        </div>
        <div className="gallery">
           { data.map((item, index) =>{
                return(
                    <div className="foto" key={index} onClick={()=>getImg(item.imgSrc)}>
                        <img src={item.imgSrc} alt={`Image ${item.id}`} style={{width: '100%'}}/>
                    </div>
                )
           })}
        </div>
        
        </>
    )
}
