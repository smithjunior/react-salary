import React, { Component } from 'react'
import Bar from './Bar'

export default class ProgressBarSalary extends Component {
  calculatePercent = (fullSalary, value) => {
    return (( value* 100 ) /fullSalary).toFixed(2)
  }
  render () {
    const { fullSalary, discountINSS, discountIRPF, netSalary } = this.props

    const discountINSSPercent = this.calculatePercent(fullSalary, discountINSS)
    const discountIRPFPercent = this.calculatePercent(fullSalary, discountIRPF)
    const netSalaryPercent = this.calculatePercent(fullSalary, netSalary)
    return (
      <div 
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <Bar value={discountINSSPercent} color='#e67e22'/>
        <Bar value={discountIRPFPercent} color='#c0392b'/>
        <Bar value={netSalaryPercent} color='#16a085'/>
      </div>
    )
  }
}
