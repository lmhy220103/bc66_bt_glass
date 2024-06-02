import React, { Component } from 'react'


export default class Product extends Component {
    handleClick = () => {
        let {img, handleChangeGlass} = this.props;
        handleChangeGlass(img)
    }
    render (){

        let{img} = this.props
        return (
            <div className="col-2 py-5" onClick={this.handleClick}>
                <button><img src={img} className='imgGlass' alt="" /></button>
            </div>
        )
    }

}
