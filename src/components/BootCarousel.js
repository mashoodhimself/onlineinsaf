import React from 'react'
import { Carousel } from 'react-bootstrap'

export default function BootCarousel() {
    return (
        <Carousel className='c__container'>
            <Carousel.Item>
                <img
                    className="d-block w-100 c__img"
                    src="https://cdn.givingcompass.org/wp-content/uploads/2019/12/19083952/We-Need-an-Attitude-Shift-for-Criminal-Justice-Reform.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>The dead cannot cry out for justice. ...</h3>
                </Carousel.Caption>
            </Carousel.Item>
            
            <Carousel.Item>
                <img
                    className="d-block w-100 c__img"
                    src="https://thecolumnofcurae.files.wordpress.com/2021/09/justice-photo.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>"At his best, man is the noblest of all animals; separated from law and justice he is the worst.</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
