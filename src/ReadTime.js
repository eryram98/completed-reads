import { useState, useEffect } from "react";

function ReadTime() {
    const [data, setData] = useState([]);

    useEffect(() => {
       fetch('http://localhost:8080/completedreads/totalreadtime')
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
        <h1>{data.data} hours were spent reading this year!</h1>
      </div>
    );
}

export default ReadTime;