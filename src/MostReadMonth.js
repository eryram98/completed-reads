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

    const slide = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        height: '100vh',
        paddingLeft: '2em',
        paddingRight: '2em',
//        backgroundColor: '#a44a3f',
        backgroundImage: 'url(/stripes.gif)',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        minHeight: '100vh',
    };


    return  (
      <div style={slide}>
        <div className='text'>
            <h1>{months[0]}, {months[1]}, and {months[2]} were your most read months.</h1>
        </div>
        <div className='caption'>
            <h3>You completed {count} books in each of those months.</h3>
        </div>
      </div>
    );
}

export default MostReadMonth;