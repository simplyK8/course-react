import React from 'react'
import styles from './SpinningLogo.styl'
import PropTypes from 'prop-types'

export default class SpinningLogo extends React.Component {
	render() {
		return (
			<img
				className={`m-a ${styles.logo} ${
					this.props.inverse ? styles.animationRotationInversed : styles.animationRotation
				}`}
				src="https://vignette.wikia.nocookie.net/unisonleague/images/6/6d/Gear-EVA-01_Head_Render.png/revision/latest?cb=20170121160308&format=original"
			/>
		)
	}
}

SpinningLogo.propTypes = { inverse: PropTypes.bool }
SpinningLogo.defaultProps = { inverse: false }
