import React from 'react'
import Btn from 'components/Btn'
const MAX_VALUE = 20
const STEP = 1
const CLICKS_COUNT = 0

export default class ClickCounter extends React.Component {
  state = {
    clicks: CLICKS_COUNT,
    maxValue: MAX_VALUE,
    step: STEP,
  }

  handleReset = () => {
    this.setState({
      clicks: CLICKS_COUNT,
      step: STEP,
      maxValue: MAX_VALUE,
    })
  }

  handleClick = () => {
    this.setState({
      clicks: this.state.clicks + this.state.step,
    })
  }
  handleIncreaseMaxValue = () => {
    this.setState({
      maxValue: this.state.maxValue + STEP,
    })
  }

  handleIncreaseStep = () => {
    this.setState({
      step: this.state.step + STEP,
    })
  }
  render() {
    return (
      <div className="row justify-center p-t bg-tertiary section">
        <div className="card standard-border card-narrow shadow">
          <div className="info">
            <div>Clicks</div>

            <div className="m-t">
              <span className="info-key">Max Value:</span>
              <span className="text-accent">{this.state.maxValue}</span>
            </div>

            <div className="m-t">
              <span className="info-key">clicks:</span>
              <span className="text-accent">
                {this.state.clicks >= this.state.maxValue ? 'max value reached' : this.state.clicks}
              </span>
            </div>

            <div className="m-t">
              <span className="info-key">clicks left:</span>
              <span className="text-accent">
                {this.state.clicks >= this.state.maxValue
                  ? '0'
                  : this.state.maxValue - this.state.clicks}
              </span>
            </div>

            <div className="m-t">
              <span className="info-key">step:</span>
              <span className="text-accent">{this.state.step}</span>
            </div>
          </div>

          <Btn
            disabled={this.state.clicks >= this.state.maxValue}
            onClick={this.handleClick}
            className="m-t d-block"
          >
            Click
          </Btn>

          <Btn
            disabled={this.state.step >= this.state.maxValue - this.state.clicks}
            onClick={this.handleIncreaseStep}
            className="m-t d-block"
          >
            Increase Step
          </Btn>

          <Btn onClick={this.handleIncreaseMaxValue} className="m-t d-block">
            Increase Max
          </Btn>

          <Btn onClick={this.handleReset} className="m-t d-block">
            Reset
          </Btn>
        </div>
      </div>
    )
  }
}
