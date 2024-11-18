import { useState, useEffect } from "react";

function MostReadMonth() {
    const [data, setData] = useState([]);

    useEffect(() => {
       fetch('http://localhost:8080/completedreads/mostreadmonth')
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
        <h1>{data[0]}, {data[1]}, and {data[2]} were your most read months this year!</h1>
      </div>
    );
}

export default MostReadMonth;