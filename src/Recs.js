import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function Recs() {
    const slide = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        height: '100vh',
        paddingLeft: '2em',
        paddingRight: '2em',
//        backgroundColor: '#f6f4d2',
        background: 'linear-gradient(#f6f4d2, 85%, #d4e09b)',
    };
    const replay = () =>{
        window.location.reload();
    }


    return  (
      <div style={slide}>
        <div className='text'>
            <h1>Books you can't stop recommending:</h1>
        </div>
        <Container>
            <Row className="justify-content-md-center">
                <Col className='book1' xs lg='2'>
                    <Image className='cover' src={require("./images/the_husbands.jpg")} />
                </Col>
                <Col className='book2' xs lg='2'>
                    <Image className='cover' src={require("./images/i_who_have_never_known_men.jpg")} />
                </Col>
                <Col className='book3' xs lg='2'>
                    <Image className='cover' src={require("./images/detransition_baby.jpg")} />
                </Col>
            </Row>
        </Container>
        <div className='captionToo'>
            <h3>(Surprisingly, not romance fiction.)</h3>
        </div>
        <Container>
        <Row>
        <Col className='text-center'>
            <Button className='replay' onClick={replay}>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-arrow-clockwise" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"/>
              <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466"/>
            </svg>
            </Button>
        </Col>
        </Row>
        </Container>
      </div>
    );
}

export default Recs;