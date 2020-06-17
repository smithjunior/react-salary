import React, { Component } from 'react'
import InputFullSalary from './components/inputs/InputFullSalary'
import InputReadOnly from './components/inputs/InputReadOnly'
import calculateSalaryFrom from './helpers/salaryHelper'
import ProgressBarSalary from './components/progressbar/ProgressBarSalary'
export default class App extends Component {
  constructor() {
    super()
    this.state = {
      fullSalary: 0
    }
  }
  
  onChangeFullSalary = (newFullSalary) => {
    this.setState({
      fullSalary: newFullSalary
    })
  }

  render () {
    const {fullSalary} = this.state
    const {baseINSS, baseIRPF, discountINSS, discountIRPF, netSalary} = calculateSalaryFrom(parseFloat(fullSalary))

    return (
      <div className='container'>
        <h2 style={{ textAlign: 'center' }}>React Salário</h2>
        <InputFullSalary fullSalary={fullSalary} onChangeFullSalary={this.onChangeFullSalary}/>
        <div className='row'>
          <InputReadOnly fullSalary={fullSalary} showPercent={false} value={baseINSS} label='Base INSS' color='black' />
          <InputReadOnly fullSalary={fullSalary} showPercent={true} value={discountINSS} label='Desconto INSS' color='#e67e22' />
          <InputReadOnly fullSalary={fullSalary} showPercent={false} value={baseIRPF} label='Base IRPF' color='black' />
          <InputReadOnly fullSalary={fullSalary} showPercent={true} value={discountIRPF} label='Desconto IRPF' color='#c0392b' />
          <InputReadOnly fullSalary={fullSalary} showPercent={true} value={netSalary} label='Sálario Liquido' color='#16a085' />
        </div>
        <div className="row">
          <ProgressBarSalary 
            fullSalary={fullSalary} 
            discountINSS={discountINSS} 
            discountIRPF={discountIRPF} 
            netSalary={netSalary} />
        </div>
      </div>
    )
  }
}
