import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'
import Go from './go'
import './style.less'

class Home extends PureComponent { 

	render() {
		return (
			<div className='box'>
				{this.props.pname}
				<div onClick={() => this.props.changeData(1)}>点击</div>
				<Go name='NAME'></Go>
			</div>
		)
	}

	componentDidMount() {
		console.log(this.props)		
	}
}

Home.propTypes = {
	pname: PropTypes.string.isRequired,
}

Home.defaultProps = {
	pname: 'Home-Stranger'
};

const mapState = (state) => ({
	name: state.home.name
})

const mapDispatch = (dispatch) => ({
	changeData(params) {
		dispatch(actionCreators.change(params))
	}
});

export default connect(mapState, mapDispatch)(Home)
