import { useState, useEffect } from "react";
// need to rename page
function TopGenre() {
    const [genreData, setGenreData] = useState([]);
    const [total, setTotal] = useState([]);

    useEffect(() => {
       fetch('http://localhost:8080/completedreads/topgenre')
          .then((res) => res.json())
          .then((data) => {
//             console.log(data);
             setGenreData(data);
          })
          .catch((err) => {
             console.log(err.message);
          });

       fetch('http://localhost:8080/completedreads/booktotal')
          .then((res) => res.json())
          .then((data) => {
//             console.log(data);
             setTotal(data);
          })
          .catch((err) => {
             console.log(err.message);
          });
    }, []);


    return  (
      <div>
        <h1>{genreData.genre} was your genre of choice this year.</h1>
        <h3>{genreData.count} out of the {total} you read were {genreData.genre}.</h3>
        <h5>(You love, love.)</h5>
      </div>
    );
}

export default TopGenre;