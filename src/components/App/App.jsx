import React from 'react'
import SpinningLogo from 'components/SpinningLogo'
import ClickCounter from 'components/ClickCounter'

export default class App extends React.Component {
	render() {
		return (
			<div>
				<h1 className="text-center">So here is some magic</h1>
				<div className="row justify-center wrap">
					<SpinningLogo inverse />

					<ClickCounter />
				</div>
			</div>
		)
	}
}
