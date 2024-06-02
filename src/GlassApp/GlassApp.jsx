import React, { Component } from 'react'
import Header from './Header'
import Model from './Model'
// import GlassMap from './GlassMap'
import Product from './Product'
import {glassArr} from './data'


export default class GlassApp extends Component {
  state = {
    bgImage : './BTGLass/glassesImage/v1.png'
  }
  handleChangeGlass = (newImage) => {
    this.setState({
      bgImage : newImage,
    })
  }
  renderGlassList = () => {
    return glassArr.map(({id,hinhAnh}) =>{
      return <Product key={id} img={hinhAnh} handleChangeGlass={this.handleChangeGlass}/>
    })
  }

  render() {
    return (
     <div className="container-fluid">
      <Header/>
      <Model bgImage={this.state.bgImage}/>
       <div className="row ">
        {this.renderGlassList()}
        </div>
     </div>
    )
  }
}
