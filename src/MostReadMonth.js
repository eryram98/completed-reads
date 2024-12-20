import { useState, useEffect } from "react";

function MostReadMonth() {
    const [months, setMonths] = useState([]);
    const [count, setCount] = useState([]);

    useEffect(() => {
       fetch('http://localhost:8080/completedreads/mostreadmonth')
          .then((res) => res.json())
          .then((data) => {
//             console.log(data);
             setMonths(data);
          })
          .catch((err) => {
             console.log(err.message);
          });

       fetch('http://localhost:8080/completedreads/mostreadmonthcount')
          .then((res) => res.json())
          .then((data) => {
//             console.log(data);
             setCount(data);
          })
          .catch((err) => {
             console.log(err.message);
          });
    }, []);


    return  (
      <div>
        <h1>{months[0]}, {months[1]}, and {months[2]} were your most read months this year.</h1>
        <h3>You completed {count} books in each of those months.</h3>
      </div>
    );
}

export default MostReadMonth;