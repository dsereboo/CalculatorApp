import React,{ Component } from "react"
import{evaluate} from "mathjs"
import Button from "./Button"
import OperatorButton from "./OperatorButton"

class Calculator extends Component{
    constructor(props){
        super(props)
        this.state={
            answer:0,
        }
    }

    handleClick=(event)=>{
        this.setState(
            (prevState)=>( {answer: prevState.answer + event.target.value})
        )
    }

    handleSum=(event)=>{
        this.setState(
            (prevState)=>({answer: evaluate(prevState.answer)})
        )
    }

    handleClear=()=>{
        this.setState(
            {answer: 0}
        )
    }

    render(){
        return(
            <div className="container">
            <div className="row">
              <div className="container">
                <div className="row">
                  <div className="col-md-12 text-center"><h1>Calculator</h1></div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-right" id="answer"><p>{this.state.answer}</p></div>
                </div>
                <div className="row">
                  <div className="col-md-3"><Button value="AC"  symbol="AC" handleClick={this.handleClear}/></div>
                  <div className="col-md-3"><Button value="+/-" symbol="+/-" handleClick={this.handleClick}/></div>
                  <div className="col-md-3"><Button value="/100"symbol="%" handleClick={this.handleClick}/></div>
                  <div className="col-md-3"><OperatorButton value="/"   symbol="÷" handleClick={this.handleClick}/></div>
                </div>
                <div className="row">
                  <div className="col-md-3"><Button value="7" symbol="7" handleClick={this.handleClick}/></div>
                  <div className="col-md-3"><Button value="8" symbol="8" handleClick={this.handleClick}/></div>
                  <div className="col-md-3"><Button value="9" symbol="9" handleClick={this.handleClick}/></div>
                  <div className="col-md-3"><OperatorButton value="*" symbol="x" handleClick={this.handleClick}/></div>
                </div>
                <div className="row">
                  <div className="col-md-3"><Button value="4" symbol="4" handleClick={this.handleClick}/></div>
                  <div className="col-md-3"><Button value="5" symbol="5" handleClick={this.handleClick}/></div>
                  <div className="col-md-3"><Button value="6" symbol="6" handleClick={this.handleClick}/></div>
                  <div className="col-md-3"><OperatorButton value="-" symbol="-" handleClick={this.handleClick}/></div>
                </div>
                <div className="row">
                  <div className="col-md-3"><Button value="1" symbol="1" handleClick={this.handleClick}/></div>
                  <div className="col-md-3"><Button value="2" symbol="2" handleClick={this.handleClick}/></div>
                  <div className="col-md-3"><Button value="3" symbol="3" handleClick={this.handleClick}/></div>
                  <div className="col-md-3"><OperatorButton value="+" symbol="+" handleClick={this.handleClick}/></div>
                </div>
                <div className="row">
                  <div className="col-md-6"><Button value="0" symbol="0" handleClick={this.handleClick}/></div>
                  <div className="col-md-3"><Button value="." symbol="." handleClick={this.handleClick}/></div>
                  <div className="col-md-3"><OperatorButton value="=" symbol="=" handleClick={this.handleSum}/></div>
                </div>
              </div>
      
            </div>
          </div>
          
        )
    }
}
export default Calculator