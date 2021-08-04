import React from 'react'
import { Image } from '../../atoms'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

const tutorialSteps = [{
    id: '1',
    imgPath: require("../../../assets/icons/codeLabs/svetle.svg"),
  }, {
    id: '2',
    imgPath: require("../../../assets/icons/codeLabs/babel.svg"),
  }, {
    id: '3',
    imgPath: require("../../../assets/icons/codeLabs/react.svg"),
  }, {
    id: '4',
    imgPath: require("../../../assets/icons/codeLabs/redux.svg"),
  }, {
    id: '5',
    imgPath: require("../../../assets/icons/codeLabs/sass.svg"),
  }, {
    id: '6',
    imgPath: require("../../../assets/icons/codeLabs/webpack.svg"),
  }, {
    id: '7',
    imgPath: require("../../../assets/icons/codeLabs/git.svg"),
  }, {
    id: '8',
    imgPath: require("../../../assets/icons/codeLabs/jquery.svg"),
  },
]

const Carousel = () => {
  const [pause, setPause] = React.useState(false)
  const timer = React.useRef()
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    duration: 1000,
    slidesPerView: 8,
    spacing: 10,
    dragStart: () => {
      setPause(true)
    },
    dragEnd: () => {
      setPause(false)
    },
  })

  React.useEffect(() => {
    sliderRef.current.addEventListener("mouseover", () => {
      setPause(true)
    })
    sliderRef.current.addEventListener("mouseout", () => {
      setPause(false)
    })
  }, [sliderRef])

  React.useEffect(() => {
    timer.current = setInterval(() => {
      if (!pause && slider) {
        slider.next()
      }
    }, 2000)
    return () => {
      clearInterval(timer.current)
    }
  }, [pause, slider])

  return (
    <div ref={sliderRef} className="keen-slider">
      {(tutorialSteps || []).map(dataImg => (
        <div key={dataImg.id} className="keen-slider__slide" style={{ justifyContent: 'center', display: 'flex' }}>
          <Image source={dataImg.imgPath} alt="img-slider"/>
        </div>
      ))}
    </div>
  )
}

export default Carousel
