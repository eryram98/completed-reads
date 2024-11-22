import { useState, useEffect } from "react";

function ReadTime() {
    const [data, setData] = useState([]);
    const [wknd, setWknd] = useState(0);

    useEffect(() => {
       fetch('http://localhost:8080/completedreads/totalreadtime')
          .then((res) => res.json())
          .then((data) => {
//             console.log(data);
             setData(data);
//             console.log(data.data);
             const time = data.data.split(":");
//             console.log(time);
             const hrs = time[0];
             const min = time[1];
//             wknd = Math.round(((hrs + (min / 60)) / 24) / 2);
//             wknd = Math.round(wknd);
             setWknd(Math.round(((hrs + (min / 60)) / 24) / 2))
//             console.log(wknd);
          })
          .catch((err) => {
             console.log(err.message);
          });
    }, []);

    return  (
      <div>
        <h1>You spent {data.data} hours reading.</h1>
        <h3>That's {wknd} out of the 52 weekends.</h3>
        <h5>You've spent more time with fictional characters than real people.</h5>
      </div>
    );
}

export default ReadTime;