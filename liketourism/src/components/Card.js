import React,{useState,useEffect} from "react";
import axios from "axios"
import {Link} from 'react-router-dom'
import "../assets/sass/card.scss";

function Card() {

  const [posts,setPosts]=useState([])
  useEffect(()=>{
    axios.get('https://localhost:44315/api/Card/GetAll')
    .then(res=>{
      console.log(res)
      setPosts(res.data)
    })
    .catch(err=>{
      console.log(err)
    })
  })
  return (
    <section id="cards">
      <div className="container mt-5">
        <div className="row">
         {
           posts.map(post=>(
            <div className="col-lg-6 col-md-6 col-sm-12 exam">
            <img src={require("../assets/img/home/afina.jpg")} alt="" />
            <Link>
            <h3>
                <b>{post.title}</b>
              </h3>
            </Link>
            
            
          </div>
           ))
         }
          
          <div className="col-lg-4 col-md-6 col-sm-12 mt-3 exam">
            <img src={require("../assets/img/home/sofya.jpg")} alt="" />
            <a href="">
              <h3>
                <b>Bakı</b>
              </h3>
            </a>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mt-3 exam">
            <img src={require("../assets/img/home/budapest.avif")} alt="" />
            <a href="">
              <h3>
                <b>Bakı</b>
              </h3>
            </a>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mt-3 exam">
            <img src={require("../assets/img/home/bukres.webp")} alt="" />
            <a href="">
              <h3>
                <b>Bakı</b>
              </h3>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Card;
