import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
//import Button from 'react-bootstrap/Button';

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
      </div>
    );
}

export default Recs;