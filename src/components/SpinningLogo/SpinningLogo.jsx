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
				src="https://manychat.com/107994/assets/fonts/logo.51b.svg"
			/>
		)
	}
}

SpinningLogo.propTypes = { inverse: PropTypes.bool }
SpinningLogo.defaultProps = { inverse: false }
