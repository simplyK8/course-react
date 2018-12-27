import React from 'react'
import SpinningLogo from 'components/SpinningLogo'
import ClickCounter from 'components/ClickCounter'
import Btn from 'components/Btn'

import * as benders from 'utils/benders'
import SpinningLogosList from 'components/SpinningLogosList'

const randomPerson = {
	ambition: true,
	leadership: true,
	resourcefulness: true,
	stubbornness: true,
	learning: true,
	cheerfullness: true,
	optimism: true,
}

const oneInterestingBoi = {
	cheerfullness: true,
	optimism: true,
	curiosity: true,
	patience: true,
	justice: true,
	calmness: true,
	hardWork: true,
	stubbornness: true,
	learning: true,
	ambition: true,
	leadership: true,
	resourcefulness: true,
	kind: true,
}

console.log(benders.determineEnergyAndGiveInfo(oneInterestingBoi))

export default class App extends React.Component {
	render() {
		return (
			<div>
				<h1 className="text-center">So here is some magic</h1>
				<SpinningLogosList />
			</div>
		)
	}
}
