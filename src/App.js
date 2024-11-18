//import React from "react";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import BookTotal from "./BookTotal";
import ReadTime from "./ReadTime";
import TopGenre from "./TopGenre";

function App() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex)
    }

    return  (
        <div>
            <Container>
                <Carousel activeIndex={index} onSelect={handleSelect} data-bs-theme="dark" indicators={false} interval={7000}>
                    <Carousel.Item>
                        <BookTotal />
                    </Carousel.Item>
                    <Carousel.Item>
                        < ReadTime />
                    </Carousel.Item>
                    <Carousel.Item>
                        <TopGenre />
                    </Carousel.Item>
                </Carousel>
            </Container>
        </div>
    );
}



export default App;