import { useState, useEffect } from "react";

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
        <h1>On average, you read {data} books per month.</h1>
      </div>
    );
}

export default BooksPerMonth;