import {Link} from "react-router-dom"
import "./notFound.css"
import { MdOutlinePets } from "react-icons/md"
import { useEffect } from 'react';

const NotFound = () => {
  var pupil = document.getElementsByClassName("pupil");
  
  useEffect(() => {
    const handleMouseMove = (event) => {
      var pos_Xp = event.clientX * 100 / window.innerWidth + "%";
      var pos_Yp = event.clientY * 100 / window.innerWidth + "%";
  
      for (var i = 0; i < 2; i++){
        pupil[i].style.left = pos_Xp;
        pupil[i].style.top = pos_Yp;
        pupil[i].style.transform = "translate(-"+pos_Xp+",-"+pos_Yp+")"; 
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener(
        'mousemove',
        handleMouseMove
      );
    };
  }, []);

  return (
    <div className="notfound__container">
      <div class="cat">
        <div class="ear ear__left"></div>
        <div class="ear ear__right"></div>
        <div class="face">
          <div class="eye eye__left">
             <div class="pupil"></div>
          </div>
          <div class="eye eye__right">
            <div class="pupil"></div>
          </div>
          <div class="nose"></div>
          </div>
      </div>
      <div className="notfound__text">
        <h1>404</h1>
        <h4>Page Not Found</h4>
        <Link to="/" className="home__link">Go Back Home <MdOutlinePets/></Link>
      </div>
    </div>
  )
}

export default NotFound