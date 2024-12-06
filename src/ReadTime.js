import { useState, useEffect } from "react";
// don't have to import style sheet??

function ReadTime() {
//    const [data, setData] = useState([]);
    const [wknd, setWknd] = useState(0);
    const [hrs, setHrs] = useState(0);
    const [min, setMin] = useState(0);

    useEffect(() => {
       fetch('http://localhost:8080/completedreads/totalreadtime')
          .then((res) => res.json())
          .then((data) => {
//             console.log(data);
//             setData(data);
             const d = data;
//             console.log(data.data);
             const time = d.data.split(":");
//             console.log(time);
             setHrs(time[0]);
             setMin(time[1]);
//             wknd = Math.round(((hrs + (min / 60)) / 24) / 2);
//             wknd = Math.round(wknd);
             setWknd(Math.round(((hrs + (min / 60)) / 24) / 2))
//             console.log(wknd);
          })
          .catch((err) => {
             console.log(err.message);
          });
    });

    return  (
      <div>
        <div className='text'>
            <h1>You spent {hrs} hours and {min} minutes reading.</h1>
        </div>
        <div className='caption'>
            <h3>That's {wknd} out of the 52 weekends.</h3>
        </div>
        <div className='captionToo'>
            <h5>You've spent more time with fictional characters than real people.</h5>
        </div>
      </div>
    );
}

export default ReadTime;