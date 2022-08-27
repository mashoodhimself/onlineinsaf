import React from 'react'
import { Carousel } from 'react-bootstrap'
import image1 from '../images/image1.jpg'
import image2 from '../images/image2.jpg'

export default function BootCarousel() {
    return (
        <Carousel className='c__container'>
            <Carousel.Item>
                <img
                    className="d-block w-100 c__img"
                    src={image1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>The dead cannot cry out for justice. ...</h3>
                </Carousel.Caption>
            </Carousel.Item>
            
            <Carousel.Item>
                <img
                    className="d-block w-100 c__img"
                    src={image2}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>"At his best, man is the noblest of all animals; separated from law and justice he is the worst.</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
