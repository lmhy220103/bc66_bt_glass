import React, { Component } from 'react'

export default class Model extends Component {
  render() {
    return (
      <div className="row">
       

        <div className="glassPosition col-6 ">
            <img className='w-25 py-5' src="./BTGlass/glassesImage/model.jpg" alt="" />
            <div style = {{backgroundImage: `url(${this.props.bgImage})`}} className='modelGlass'></div>
        </div>

      
        <div className="col-6 ">
            <img className='w-25 py-5' src="./BTGlass/glassesImage/model.jpg" alt="" />
        </div>
       
      </div>
    )
  }
}
