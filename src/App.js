import React from "react";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
//import Slider from "react-slick";
import Intro from "./Intro";
import BookTotal from "./BookTotal";
import ReadTime from "./ReadTime";
import TopGenre from "./TopGenre";
import MostReadMonth from "./MostReadMonth";
import BooksPerMonth from "./BooksPerMonth";
import Recs from "./Recs";
import "./App.css"

function App() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex)
    };

    return  (
        <div className="center">
            <Container>
                <Carousel activeIndex={index} onSelect={handleSelect} data-bs-theme="dark" indicators={false}
                    interval={8000} slide={false}/* wrap={false}*/>
                    <Carousel.Item>
                        <Intro />
                    </Carousel.Item>
                    <Carousel.Item>
                        <BookTotal />
                    </Carousel.Item>
                    <Carousel.Item>
                        <ReadTime />
                    </Carousel.Item>
                    <Carousel.Item>
                        <TopGenre />
                    </Carousel.Item>
                    <Carousel.Item>
                        <MostReadMonth />
                    </Carousel.Item>
                    <Carousel.Item>
                        <BooksPerMonth />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Recs />
                    </Carousel.Item>
                </Carousel>
            </Container>
        </div>
    );
}



export default App;