import { React, useEffect, useState } from 'react'
import { Col, Container, Row } from "react-bootstrap"
import { ArrowRightCircle } from 'react-bootstrap-icons'
import HeaderImg  from '../assets/img/header-img.svg'

export const Banner = () => {

    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"]
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const period = 2000

    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        },delta)
        return() => {clearInterval(ticker)}
    }, [text])

    const tick = () => {
        let index = loopNum % toRotate.length
        let fullText = toRotate[index]
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)
        setText(updatedText)

        if(isDeleting){
            setDelta(prevDelta => prevDelta / 2)
        }
        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true)
            setDelta(period)
        }
        else if(isDeleting && updatedText === ''){
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setDelta(500)
        }
        
    }

    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi I'm King`} <span className="wrap">{text}</span> </h1>
                        <p>
                            Front-End Development:
                            Front-end developers work on the client side of web applications, 
                            focusing on the user interface and user experience.
                            They use languages like HTML (Hypertext Markup Language), CSS (Cascading Style Sheets), 
                            and JavaScript to create interactive and visually appealing web pages.
                            Frameworks and libraries like React, Angular, and Vue.js help streamline front-end development.
                        </p>
                        <button onClick={() => console.log('connect')}>Let's Connect <ArrowRightCircle size={25} /> </button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={HeaderImg} alt="Header image" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}