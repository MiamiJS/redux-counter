import React from 'react'
import { connect } from 'react-redux'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import * as actions from '../actions/counterActions'



const App = React.createClass({
  mixins: [PureRenderMixin],
  render (){
    const {onIncrement, onDecrement, currentNumber } =this.props
    return(
      <div className='is-flex' style={styles.container}>

        <p style={styles.text}>{currentNumber}</p>

        <p>
          <button className="button is-large is-success" onClick={onIncrement}>+</button> &nbsp;
          <button className="button is-large is-danger" onClick={onDecrement} >-</button>
        </p>
      </div>
    )
  }
})

const styles = {
  container:{
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '80vh',
  },
  text:{
    fontSize: 75,
  },

}

const mapStateToProps = (state) => ({currentNumber: state.counter.get('currentNumber')})
export default connect(mapStateToProps, actions)(App)
