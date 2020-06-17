import React, { Component } from 'react'
import { formatNumber } from '../../helpers/formatHelper'
export default class InputReadOnly extends Component {
  render () {
    const { label, value, color, fullSalary, showPercent } = this.props
    let formattedValue = `R$ ${formatNumber(value)}`

    if (showPercent && value) {
      const percent = (value * 100) / fullSalary
      formattedValue += ` (${percent.toFixed(2)} %)`
    }

    return (
      <div className='col s3'>
        <label>{label}:
          <input
            type='text'
            readOnly
            value={formattedValue}
            style={{ color: color, fontWeight: 'bold' }}
          />
        </label>
      </div>
    )
  }
}
