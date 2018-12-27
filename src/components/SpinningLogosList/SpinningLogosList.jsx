import React from 'react'
import SpinningLogo from 'components/SpinningLogo'
import ClickCounter from 'components/ClickCounter'
import Btn from 'components/Btn'
import * as sortingHat from 'utils/sortingHat'
const student = {
  cunning: true,
  leadership: true,
  patience: true,
  soft: true,
  nice: true,
  spontanious: true,
  clever: true,
}

const student2 = {
  cunning: true,
  leadership: true,
  patience: true,
  coward: true,
  cruel: true,
  stupid: true,
  communicative: true,
}

console.log(sortingHat.determineHouseAndGiveInfo(student))
console.log(sortingHat.determineHouseAndGiveInfo(student2))

const EVAS = [
  'https://vignette.wikia.nocookie.net/unisonleague/images/9/99/Gear-EVA-03_Head_Render.png/revision/latest?cb=20170121162710',
  'https://vignette.wikia.nocookie.net/unisonleague/images/6/6d/Gear-EVA-01_Head_Render.png/revision/latest?cb=20170121160308&format=original',
  'https://vignette.wikia.nocookie.net/unisonleague/images/9/91/Gear-EVA-02_Head_Render.png/revision/latest?cb=20170122125817',
]
const getRandomBunber = max => Math.floor(Math.random() * max)

export default class SpinningLogosList extends React.Component {
  constructor() {
    super()
    this.state = { octopuses: [this.createOctopus()] }
  }

  createOctopus = () => {
    return { inversed: Math.random() >= 0.5, image: EVAS[getRandomBunber(EVAS.length)] }
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
    console.log(this.state)
    return (
      <div>
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
            <SpinningLogo key={i} image={octopus.image} inverse={octopus.inversed} />
          ))}
        </div>
      </div>
    )
  }
}
