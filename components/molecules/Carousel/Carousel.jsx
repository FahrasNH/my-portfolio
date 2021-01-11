import React from 'react'
import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { Image } from '../../atoms'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

const tutorialSteps = [
  {
    imgPath: require("../../../assets/icons/codeLabs/svetle.svg"),
	},
	{
    imgPath: require("../../../assets/icons/codeLabs/babel.svg"),
	},
	{
    imgPath: require("../../../assets/icons/codeLabs/react.svg"),
	},
	{
    imgPath: require("../../../assets/icons/codeLabs/redux.svg"),
	},
	{
    imgPath: require("../../../assets/icons/codeLabs/sass.svg"),
	},
	{
    imgPath: require("../../../assets/icons/codeLabs/webpack.svg"),
	},
	{
    imgPath: require("../../../assets/icons/codeLabs/git.svg"),
	},
	{
    imgPath: require("../../../assets/icons/codeLabs/jquery.svg"),
	},
]

const Carousel = () => {
	return (
		<AutoPlaySwipeableViews
			enableMouseEvents
		>
			{tutorialSteps.map((step, index) => (
				<div key={index}>
					<Image source={step.imgPath} />
				</div>
			))}
		</AutoPlaySwipeableViews>
	)
}
export default Carousel
