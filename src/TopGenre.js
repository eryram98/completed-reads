import { useState, useEffect } from "react";
// need to rename page
function TopGenre() {
    const [data, setData] = useState([]);

    useEffect(() => {
       fetch('http://localhost:8080/completedreads/topgenre')
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
        <h1>{data.data} was your most read genre this year!</h1>
      </div>
    );
}

export default TopGenre;