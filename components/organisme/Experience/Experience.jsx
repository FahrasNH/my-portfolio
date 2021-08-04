import React from 'react'
import { View, Text, Image } from '../../atoms'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'

const Experience = () => {
  return (
    <>
      <View
        margin="300px 0 0 0"
        padding="0 105px"
        display="block"
        textAlign="center"
      >
        <Text
          fontSize="32px"
          color="#1C1E26"
          fontWeight="600"
          marginBottom="20px"
        >
          Experience
        </Text>
        <Text
          fontSize="20px"
          color="#1C1E26"
          fontWeight="100"
          marginBottom="70px"
        >
          I have enough experience to make your website interactive.
        </Text>
      </View>
      <View
        margin="0 0 200px 0"
      >
        <View position="relative">
          <Container fluid>
            <Row>
              <Col style={{ display: 'flex', justifyContent: 'center' }} xs={1} lg={4}>
                <Image classNames="circle-1" source={require('../../../assets/illustrations/Circle-1.svg')}/>
                <View classNames="experience-container">
                  <Text classNames="experience-total">2+</Text>
                  <Row>
                    <Col xs={4}><View classNames="experience-border"/></Col>
                    <Col xs={8}>
                      <Text classNames="experience-name">YEARS OF EXPERIENCE</Text>
                    </Col>
                  </Row>
                </View>
              </Col>
              <Col style={{ display: 'flex', justifyContent: 'center', position:'relative' }} xs={1} lg={4}>
                <Image classNames="circle-2" source={require('../../../assets/illustrations/Circle-2.svg')}/>
                <View classNames="experience-container">
                  <Text classNames="experience-total">5+</Text>
                  <Row>
                    <Col xs={4}><View classNames="experience-border"/></Col>
                    <Col xs={8}>
                      <Text classNames="experience-name">COMPLETED PROJECTS</Text>
                    </Col>
                  </Row>
                </View>
              </Col>
              <Col style={{ display: 'flex', justifyContent: 'center', position:'relative' }} xs={1} lg={4}>
                <Image classNames="circle-3" source={require('../../../assets/illustrations/Circle-3.svg')}/>
                <View classNames="experience-container">
                  <Text classNames="experience-total">5+</Text>
                  <Row>
                    <Col xs={4}><View classNames="experience-border"/></Col>
                    <Col xs={8}>
                      <Text classNames="experience-name">COMPLETED COURSES</Text>
                    </Col>
                  </Row>
                </View>
              </Col>
            </Row>
          </Container>
        </View>
      </View>
    </>
  )
}

export default Experience
