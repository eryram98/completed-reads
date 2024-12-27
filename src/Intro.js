//import Image from 'react-bootstrap/Image';
//import backgroundImage from './images/completed_reads_bg.gif';

function Intro() {

    const slide = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        height: '100vh',
        paddingLeft: '2em',
        paddingRight: '2em',
        backgroundColor: '#d4e09b',
        // setting background to a gif
/*
        backgroundImage: 'url(https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNms3ZjQ2ZWdtcWVyajA5NHc1eDM5a294cDdxZ3luZHRyeGRpem9qYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/RkyyafAvGm2FD3h8jL/giphy.webp)',
*/
/*        backgroundImage: 'url(/wavy_corners.gif)',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        minHeight: '100vh',*/
    };

//         <Image src={require('./images/completed_reads_bg.gif')} />

// need to add a project description or explanation
    return  (
      <div style={slide}>
        <h1>Completed Reads</h1>
      </div>
    );
}

export default Intro;