import { useState, useEffect } from "react";
//import ReactTextTransition, { presets } from "react-text-transition";
//import Fade from "react-bootstrap/Fade";
import "./Styles.css";

function BookTotal() {
    const [data, setData] = useState([]);

    useEffect(() => {
       fetch('http://localhost:8080/completedreads/booktotal')
          .then((res) => res.json())
          .then((data) => {
//             console.log(data);
             setData(data);
          })
          .catch((err) => {
             console.log(err.message);
          });
    }, []);




    return  (
      <div className='text'>
        <h1>You read a total of {data} books.</h1>
      </div>
    );
}

export default BookTotal;