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
    };

    return  (
      <div style={slide}>
        <h1>Completed Reads</h1>
        <div className='caption'>
            <h3>Here's a breakdown of your 2024 reading.</h3>
        </div>
      </div>
    );
}

export default Intro;