// React
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Months from './Months.js'
import Customers from './Customers.js';
import { BrowserRouter } from 'react-router-dom';



class Main extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      months: [],
      customers: []

    }
    // console.log(this.state)

  }
  async componentDidMount(){
    const months = (await axios.get('/api/months')).data;
    const customers = (await axios.get('/api/customers')).data;
    // console.log(months);
    this.setState({ months, customers });
  }

  render () {
    return (
      <div id="main" className="container">
        <h2 id="title"> Kettlebell Creamery </h2>
        < Months months= {this.state.months}/>
        < Customers customers = {this.state.customers}/>
      </div>
    )
  }

}



ReactDOM.render(<BrowserRouter> <Main/></BrowserRouter>, document.querySelector('#root'));

export default Main
