import React from 'react'
import { View, Text, Image } from '../../atoms'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'

const About = () => {
  return (
    <Row>
      <Col>
        <View classNames="wrap-about">
          <Text
            fontSize="32px"
            color="#1C1E26"
            fontWeight="600"
            marginBottom="20px"
          >
            Short Story
          </Text>
          <Text
            fontSize="20px"
            color="#1C1E26"
            fontWeight="100"
            marginBottom="20px"
            letterSpacing="1px"
          >
            As a front end developer based in Jakarta, Indonesia. I create
            user-friendly experiences, designing and building on the principles
            of clarity, simplicity and elegance.
          </Text>
        </View>
      </Col>
      <Col>
        <View
          classNames="personal-wrap"
          margin="300px 0 0 0"
          padding="0 0 105px 0"
          display="block"
        >
          <Text
            fontSize="32px"
            color="#1C1E26"
            fontWeight="600"
            marginBottom="20px"
          >
            Personal Info
          </Text>
          <Row>
            <Col>
              <Text classNames="personal-text">
                First Name : <span>Fahras Nur</span>
              </Text>
            </Col>
            <Col>
              <Text classNames="personal-text">
                Last Name : <span>Hidayat</span>
              </Text>
            </Col>
          </Row>
          <Row>
            <Col>
              <Text classNames="personal-text">
                Address : <span>East Jakarta </span>
              </Text>
            </Col>
            <Col>
              <Text classNames="personal-text">
                Phone : <span>+62 817 7056 1844</span>
              </Text>
            </Col>
          </Row>
          <Row>
            <Col>
              <Text classNames="personal-text">
                Birth : <span>1998</span>
              </Text>
            </Col>
            <Col>
              <Text classNames="personal-text">
                Email : <span>fahras.fnh@gmail.com</span>
              </Text>
            </Col>
          </Row>
          <Row>
            <Col>
              <Text classNames="personal-text">
                Nationaly : <span>Indonesian</span>
              </Text>
            </Col>
            <Col>
              <Text classNames="personal-text">
                Languages : <span>Indonesian, English</span>
              </Text>
            </Col>
          </Row>
          <Row>
            <Col>
              <Text classNames="personal-text">
                Academic :{' '}
                <span>Informatics Engineering in Mercubuana University</span>
              </Text>
            </Col>
          </Row>
        </View>
      </Col>
    </Row>
  )
}

export default About
