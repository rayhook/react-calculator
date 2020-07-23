
import React, {Component} from 'react';
import "./App.css";

class Calculator extends Component {
  constructor(props){
    super(props);
    this.array =[]
    this.inputType = []
    this.toNumber = []
    this.combine = []
    this.operationArray = []
    this.state = {
      input: [],
      operation: '', 
      display2: []
    }
    this.handleZero = this.handleZero.bind(this);
    this.handleOne = this.handleOne.bind(this);
    this.handleTwo = this.handleTwo.bind(this);
    this.handleThree = this.handleThree.bind(this);
    this.handleFour = this.handleFour.bind(this);
    this.handleFive = this.handleFive.bind(this);
    this.handleSix = this.handleSix.bind(this);
    this.handleSeven = this.handleSeven.bind(this);
    this.handleEight = this.handleEight.bind(this);
    this.handleNine = this.handleNine.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleSubtract = this.handleSubtract.bind(this);
    this.handleMultiply = this.handleMultiply.bind(this);
    this.handleDivide = this.handleDivide.bind(this);
    this.handleDecimal = this.handleDecimal.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleEquals = this.handleEquals.bind(this);
  }



    handleOne () {
      this.array = [ ...this.array, "1"]
      this.inputType = [...this.inputType, "num"]
      this.setState({
       input: this.array,
       display2: [...this.state.display2, '1']
     })
    }
    
    handleTwo () {
      this.array = [ ...this.array, "2"]
      this.inputType = [...this.inputType, "num"]
      this.setState({
       input: this.array,
       display2: [...this.state.display2, '2']
     })
    }

    handleThree () {
      this.array = [ ...this.array, "3"]
      this.inputType = [...this.inputType, "num"]
      this.setState({
       input: this.array,
       display2: [...this.state.display2, '3']
     })
    }

    handleFour () {
      this.array = [ ...this.array, "4"]
      this.inputType = [...this.inputType, "num"]
      this.setState({
       input: this.array,
       display2: [...this.state.display2, '4']
     })
    }

    handleFive () {
      this.array = [ ...this.array, "5"]
      this.inputType = [...this.inputType, "num"]
      this.setState({
       input: this.array,
       display2: [...this.state.display2, '5']
     })
    }

    handleSix () {
      this.array = [ ...this.array, "6"]
      this.inputType = [...this.inputType, "num"]
      this.setState({
       input: this.array,
       display2: [...this.state.display2, '6']
     })
    }

    handleSeven () {
      this.array = [ ...this.array, "7"]
      this.inputType = [...this.inputType, "num"]
      this.setState({
       input: this.array,
       display2: [...this.state.display2, '7']
     })
    }

    handleEight () {
      this.array = [ ...this.array, "8"]
      this.inputType = [...this.inputType, "num"]
      this.setState({
       input: this.array,
       display2: [...this.state.display2, '8']
     })
    }

    handleNine () {
      this.array = [ ...this.array, "9"]
      this.inputType = [...this.inputType, "num"]
      this.setState({
       input: this.array,
       display2: [...this.state.display2, '9']
     })
    }

    handleZero() {
        let findZero = this.array.indexOf('0')
        let findDecimal = this.array.indexOf('.')

        if(findZero !== 0 || findDecimal === 1){
          this.array = [...this.array, '0']
          this.inputType = [...this.inputType, "num"]
            this.setState({
             input: this.array,
             display2: [...this.state.display2, '0']
           })
        } else{
          console.log('Mutiple Zeros')
        }
      
    };

    handleDecimal () {
      let dublicateDecimal = this.array.filter((element) => element === '.')
      
      if(dublicateDecimal.length === 0) {
        this.array = [...this.array, "."]
        this.inputType = [...this.inputType, "num"]
        
        this.setState({
          input: this.array,
          display2: [...this.state.display2, '.']
        })
      }
      else{
        this.array = [...this.array]
        this.setState({
          input: this.array, 
          display2: [...this.state.display2]
        })  
      }
    }

    handleClear () {
      this.array = []
      this.toNumber = []
      this.combine = []
      this.inputType = []
      this.operationArray = []
      this.setState({
        input: 0,
        operation: '', 
        display2: []

    })
  }

  // Adding 
  // joined = string number, Number() to convert string to number - number pushed into array, finally reduce()
   
  handleAdd () {
    if(this.toNumber.length !== 0) { 
      
      if(this.array.length === 0) { // if chaining after equal
        this.combine = this.handleOperation(this.state.operation)
        this.combine = Number(this.combine.toFixed(4))
        this.toNumber = [this.combine]
      }else{
        this.toNumber.push(Number(this.array.join(''))) 
        this.array = []
        this.combine = this.handleOperation(this.state.operation)
        this.combine = Number(this.combine.toFixed(4))
        this.toNumber = [this.combine]
      }
    }
    else{
      this.toNumber.push(Number(this.array.join('')))
      this.array = []
      this.combine = this.toNumber.reduce((a,b)=> a + b)
      this.combine = Number(this.combine.toFixed(4))
      this.toNumber = [this.combine]
      }
      this.operationArray.push("add")
      this.inputType = [...this.inputType, "opr"]
      this.setState({
        input: this.combine,
        operation: 'add',
        display2: [...this.state.display2, '+']
    })
  }

    handleSubtract () {
       // chain operation
       if(this.toNumber.length !== 0) { 
        if(this.array.length === 0) {
        this.combine = this.handleOperation(this.state.operation)
        this.combine = Number(this.combine.toFixed(4))
        this.toNumber = [this.combine]

        }else{
        let createNumber = Number(this.array.join(''))
        this.toNumber.push(createNumber) 
        this.array = []
        this.combine = this.handleOperation(this.state.operation)
        this.combine = Number(this.combine.toFixed(4))
        this.toNumber = [this.combine]
      }
    }
      else{
      // If its first entry
      let makeNumber = Number(this.array.join(''))
      this.toNumber.push(makeNumber)
      this.array = []
      this.combine = this.toNumber.reduce((a,b) => a - b)
      this.combine =  Number(this.combine.toFixed(4))
      this.toNumber = [this.combine]
      }
      this.operationArray.push("subtract")
      this.inputType = [...this.inputType, "opr"]
      this.setState({
        input: this.combine,
        operation: 'subtract',
        display2: [...this.state.display2, '-']
    })
  }

    handleDivide () {
           // chain operation
        if(this.toNumber.length !== 0) { 
          if(this.array.length === 0) {
            this.combine = this.handleOperation(this.state.operation)
            this.combine =  Number(this.combine.toFixed(4))
            this.toNumber = [this.combine]
          }else{
          let createNumber = Number(this.array.join(''))
          this.toNumber.push(createNumber) 
          this.array = []
          this.combine = this.handleOperation(this.state.operation)
          this.combine = Number(this.combine.toFixed(4))
          this.toNumber = [this.combine]
          }
        }
       else{
       // If its first entry
        this.toNumber.push(Number(this.array.join('')))
        this.array = []
        this.combine = this.toNumber.reduce((a,b) => a / b)
        this.combine = Number(this.combine.toFixed(4))
        this.toNumber = [this.combine]
       }
       this.operationArray.push("divide")
       this.inputType = [...this.inputType, "opr"]
       this.setState({
         input: this.combine,
         operation: 'divide',
         display2: [...this.state.display2, '/']
     })
    }

    handleMultiply () {
      // chain operation
      if(this.toNumber.length !== 0){ 
       
        if(this.array.length === 0) {
          this.combine = this.handleOperation(this.state.operation)
          this.combine = Number(this.combine.toFixed(4))
          this.toNumber = [this.combine]
        }else{
        let createNumber = Number(this.array.join(''))
        this.toNumber.push(createNumber) 
        this.array = []
        this.combine = this.handleOperation(this.state.operation)
        this.combine = Number(this.combine.toFixed(4))
        this.toNumber = [this.combine]
      }
    }
       else{
       // If its first entry
       this.toNumber.push(Number(this.array.join('')))
       this.array = []
       this.combine = this.toNumber.reduce((a,b)=> a * b)
       this.combine = Number(this.combine.toFixed(4))
       this.toNumber = [this.combine]
       }
       this.operationArray.push("multiply")
       this.inputType = [...this.inputType, "opr"]
       this.setState({
         input: this.combine,
         operation: 'multiply',
         display2: [...this.state.display2, '*']
     })
    }
    
    // engine for calculation
    handleOperation(operation) {
      switch(operation){
        case 'add':
          return this.combine =  this.toNumber.reduce((a, b)=> a + b)
          break;
        case 'subtract':
        
        let limit = this.inputType.length
        let repeatedIndex = []
        for(let i = 0; i < limit; i++){
          let nextIndex = i + 1
          if(this.inputType[i] === 'opr' && this.inputType[i] === this.inputType[nextIndex]) {
            repeatedIndex.push(i)
          }  
        }
        if(repeatedIndex.length!== 0 && this.operationArray.length > 1 && this.operationArray.findIndex(element => element === 'subtract') === this.operationArray.findIndex(element => element === 'multiply') + 1) {
              
          return this.combine = this.toNumber.reduce((a, b)=> a * - b)

          }else if(repeatedIndex.length!== 0 && this.operationArray.length > 1 && this.operationArray.findIndex(element => element === 'subtract') === this.operationArray.findIndex(element => element === 'divide') + 1) {
            
            return this.combine = this.toNumber.reduce((a, b)=> a / - b)
        }
          else if(repeatedIndex.length === 0){
          return this.combine =  this.toNumber.reduce((a, b)=> a - b)
          }
          break;
        
        // Runs codition for consecutive operators 
        case 'divide':
          return this.combine =  this.toNumber.reduce((a, b)=> a / b)
          break;
        case 'multiply':
          return this.combine =  this.toNumber.reduce((a, b)=> a * b )
          break;
        default:
          console.log("no operations selected");

    }
  }

  // Equal
    handleEquals () {
      this.toNumber.push(Number(this.array.join('')))
      this.array = []
      this.combine = this.handleOperation(this.state.operation)
      this.combine = Number(this.combine.toFixed(4))
      this.toNumber = [this.combine]
      this.setState({
        input: this.combine,
        display2: [this.combine]
   })
      
    }
  render(){
    return(
      <div>
        <div id="container">
          <div id="calculator">
            <div id="display">{this.state.input}</div>  
            <div id="display2">{this.state.display2}</div>  
            <button id="seven" onClick={this.handleSeven}>7</button>
            <button id="eight" onClick={this.handleEight}>8</button>
            <button id="nine" onClick={this.handleNine}>9</button> 
            <button id="clear" onClick={this.handleClear}>AC</button>     
            <button id="four" onClick={this.handleFour}>4</button>
            <button id="five" onClick={this.handleFive}>5</button>
            <button id="six" onClick={this.handleSix}>6</button>
            <button id="divide" onClick={this.handleDivide}>/</button>      
            <button id="one" onClick={this.handleOne}>1</button>
            <button id="two" onClick={this.handleTwo}>2</button>
            <button id="three" onClick={this.handleThree}>3</button>
            <button id="multiply" onClick={this.handleMultiply}>*</button>         
            <button id="zero" onClick={this.handleZero}>0</button> 
            <button id="decimal" onClick={this.handleDecimal}>.</button>      
            <button id="add" onClick={this.handleAdd}>+</button>  
            <button id="equals" onClick={this.handleEquals}>=</button>
            <button id="subtract" onClick={this.handleSubtract}>-</button>    
          </div>
        </div>
      </div>
    )
  }

}
  export default Calculator;