import React, { Component } from 'react'

export default class InputFullSalary extends Component {
  handleInputChange = (event) => {
    this.props.onChangeFullSalary(event.target.value)
  }
  render () {
    const { fullSalary } = this.props
    return (
      <div className='row'>
        <div className='col s12'>
          <label>Sálario Bruto
            <input 
              placeholder='2000' 
              type='number' 
              value={fullSalary} 
              onChange={this.handleInputChange}
              />
          </label>
        </div>
      </div>
    )
  }
}
