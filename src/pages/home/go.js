import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class Go extends PureComponent {
	constructor(){
		super()
		this.state = {
			a: 2
		}
	}
	// state = {
	// 	a: 1
	// }

	render() {
		return (
			<div className='box'>
				{this.props.name}
				{this.state.a}
			</div>
		)
	}

	componentDidMount() {

	}
}

Go.propTypes = {
	name: PropTypes.string.isRequired,
}

Go.defaultProps = {
	name: 'Stranger'
};