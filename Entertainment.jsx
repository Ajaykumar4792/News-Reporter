import React, { useEffect, useState } from "react";
import axios from "axios";
import AOS from "aos";
const Entertainment = () => {
  const [entertainmentdata,setEntertainmentData]=useState([]);
  const EntertainmentData = async()=>{
    const url =`
    https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=eb9916a0cb9a47518f801eaa73c91d6b`;
    await axios.get(url).then((response)=>{
      console.log(response.data.articles);
      setEntertainmentData(response.data.articles);
    }).catch((err)=>{
      console.log('result not found',err);
    })
  }
  useEffect(()=>{
    EntertainmentData();
  },[]);

  useEffect(()=>{
    AOS.init({
      delay:100
      
    });
  })
  return (
    <div>
      <div className="display-news">
        <div className="news-content">
          {entertainmentdata.map((items)=>(
            <div className="inner-news-content" data-aos='zoom-in'>
              <div className="news-title"><h1>{items?.title}</h1></div>
              <img src={items?.urlToImage} alt="" className="news-pic" />
              <div className="author"><h2>{items?.author}</h2></div>
              <div className="content"><h2>{items?.content}</h2></div>
              <div className="descripttion"><h2>{items?.description}</h2></div>
              <a href={items?.url} target='blank'>Read More</a>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
}

export default Entertainment;

