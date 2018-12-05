import React from 'react'
import styles from './Btn.styl'
import PropTypes from 'prop-types'

export default class Btn extends React.Component {
	render() {
		const { className, secondary, ...rest } = this.props
		return (
			<button
				{...rest}
				className={`${secondary ? styles.secondary : styles.primary} ${className} shadow`}
			>
				{this.props.children}
			</button>
		)
	}
}

Btn.propTypes = { secondary: PropTypes.bool }
Btn.defaultProps = { secondary: false, className: '' }
