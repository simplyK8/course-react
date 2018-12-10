import React from 'react'
import SpinningLogo from 'components/SpinningLogo'
import ClickCounter from 'components/ClickCounter'

const octopuses = [
	{
		inverse: false,
	},
	{
		inverse: true,
	},

	{
		inverse: false,
	},
	{
		inverse: true,
	},
	{
		inverse: false,
	},
	{
		inverse: true,
	},
	{
		inverse: false,
	},
	{
		inverse: true,
	},
	{
		inverse: false,
	},
	{
		inverse: true,
	},
]

export default class App extends React.Component {
	render() {
		return (
			<div>
				<h1 className="text-center">So here is some magic</h1>
				<div className="row justify-center wrap">
					{octopuses.map((octopus, i) => (
						<SpinningLogo key={i} inverse={octopus.inverse} />
					))}
				</div>

				<ClickCounter />
			</div>
		)
	}
}
