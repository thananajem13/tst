import './App.css';
import {connect} from 'react-redux'
import {addToCart} from './actions/index'
import { Component } from 'react';
class App extends Component {
  state = {
    product: [{id:1, price:1000, name:'dell lap', qty:2}],
    total_price : 0
  }
  render(){
    return (
    <div className="App">
      <button onClick={()=>{
        this.setState({
          product: [...this.state.product,{id:2, price:1000, name:'dell lap', qty:2}],
          total_price:0
        })
        console.log(this.state.product)
        console.log(this.props.add_to_cart(this.state.product))
      }}>Appear action in console</button>
    </div>
  );
}
}
function mapDispatchToProps(dispatch) {
    return {
        add_to_cart : () => { 
          dispatch(addToCart())
        }
    }
}

function mapStateToProps(state) {
    return {
        cart: state
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
