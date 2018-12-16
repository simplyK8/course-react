import React from 'react'
import SpinningLogo from 'components/SpinningLogo'
import ClickCounter from 'components/ClickCounter'
import Btn from 'components/Btn'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      octopuses: [this.createOctopus()],
    }
  }

  createOctopus = () => {
    return { inversed: Math.random() >= 0.5 }
  }

  handleAdd = () => {
    this.setState({
      octopuses: [...this.state.octopuses, this.createOctopus()],
    })
  }
  handleDelete = () => {
    this.setState({
      octopuses: this.state.octopuses.filter((octo, i) => i !== this.state.octopuses.length - 1),
    })
  }

  handleInvert = () => {
    this.setState({
      octopuses: this.state.octopuses.map(octopus => {
        return { ...octopus, inversed: !octopus.inversed }
      }),
    })
  }

  handleAllRight = () => {
    this.setState({
      octopuses: this.state.octopuses.map(octopus => {
        return { ...octopus, inversed: false }
      }),
    })
  }

  handleAllLeft = () => {
    this.setState({
      octopuses: this.state.octopuses.map(octopus => {
        return { ...octopus, inversed: true }
      }),
    })
  }

  handleDeleteRight = () => {
    this.setState({
      octopuses: this.state.octopuses.filter(octopus => octopus.inversed),
    })
  }

  handleDeleteLeft = () => {
    this.setState({
      octopuses: this.state.octopuses.filter(octopus => !octopus.inversed),
    })
  }

  handleRandomize = () => {
    this.setState({
      octopuses: this.state.octopuses.map(octopus => {
        return { ...octopus, inversed: Math.random() >= 0.5 }
      }),
    })
  }

  render() {
    return (
      <div>
        <h1 className="text-center">So here is some magic</h1>
        <div className="row justify-center wrap">
          <Btn className="m-r m-t" onClick={this.handleAdd}>
            Add
          </Btn>
          <Btn className="m-r m-t" onClick={this.handleDelete}>
            Delete
          </Btn>
          <Btn className="m-r m-t" onClick={this.handleInvert}>
            Invert All
          </Btn>
          <Btn className="m-r m-t" onClick={this.handleAllRight}>
            All Right
          </Btn>
          <Btn className="m-r m-t" onClick={this.handleAllLeft}>
            All Left
          </Btn>
          <Btn className="m-r m-t" onClick={this.handleDeleteRight}>
            Delete Right
          </Btn>
          <Btn className="m-r m-t" onClick={this.handleDeleteLeft}>
            Delete Left
          </Btn>
          <Btn className="m-r m-t" onClick={this.handleRandomize}>
            Randomize
          </Btn>
        </div>
        <div className="row justify-center wrap">
          {this.state.octopuses.map((octopus, i) => (
            <SpinningLogo key={i} inverse={octopus.inversed} />
          ))}
        </div>

        <ClickCounter />
      </div>
    )
  }
}
