import { useState, useEffect } from "react";
import "./Styles.css";

function BooksPerMonth() {
    const [data, setData] = useState([]);

    useEffect(() => {
       fetch('http://localhost:8080/completedreads/bookspermonth')
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
      <div>
        <div className='text'>
            <h1>On average, you read {Number(data).toFixed(2)} books per month.</h1>
        </div>
        <div className='caption'>
            <h3>A bookworm in training.</h3>
        </div>
      </div>
    );
}

export default BooksPerMonth;