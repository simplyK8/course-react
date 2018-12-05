import React from 'react'
import Btn from 'components/Btn'

export default class ClickCounter extends React.Component {
	render() {
		return (
			<div className="row justify-center p-t bg-tertiary section">
				<div className="card standard-border card-narrow shadow">
					<div className="info">
						<div>Clicks</div>

						<div className="m-t">
							<span className="info-key">Max Value:</span>
							<span className="text-accent">20</span>
						</div>

						<div className="m-t">
							<span className="info-key">clicks:</span>
							<span className="text-accent">0</span>
						</div>

						<div className="m-t">
							<span className="info-key">clicks left:</span>
							<span className="text-accent">20</span>
						</div>

						<div className="m-t">
							<span className="info-key">step:</span>
							<span className="text-accent">1</span>
						</div>
					</div>

					<Btn className="m-t d-block">Click</Btn>
					<Btn className="m-t d-block">Reset</Btn>
					<Btn className="m-t d-block">Increase Step</Btn>
					<Btn className="m-t d-block">Increase Max</Btn>
				</div>
			</div>
		)
	}
}
