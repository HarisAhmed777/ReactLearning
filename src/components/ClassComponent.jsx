import { Component } from "react";

class ClassComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            first:1,
            second:100
        }

        // We have to bind the handleclick function to this class
        // then only it will work ,or else ,it will say unknown
        // to bind the handleclick the syntax is 
        this.handleclick1 = this.handleclick1.bind(this);
    }



    handleclick1(){
        this.setState({first:this.state.first+1})
    }
    // component did mount is not but useEffect as empty dependency
    // if will run only the first time the omponent is rendered
    componentDidMount(){
        console.log("Data is received");
    }
    // componentdidupdate is like useEffect with dependencies
    // whenever the value is changed in useEffect the useeffect will run 
    // same as this ,but we have to do it manully
    // The synatx is  compoentdidmount(2 parameters);
    // one is prevprops,second one is prevstate
    
    componentDidUpdate(prevprops,prevestate){
        if(prevestate.first!==this.state.first){
            console.log("First value Changed")
        }
    }
    render(){
        return(
            <div>
                <h1>Helo from class </h1>
                <h1>First:{this.state.first}</h1>
                <h1>Second:{this.state.second}</h1>

                {/* if we directly wanna update a state in inline  */}
                <button onClick={()=>this.setState({first:this.state.first+1})}>Add first Number</button><br/><br/>
                <button onClick={()=>this.setState({second:this.state.second+1})}>Add Second Number</button>

                {/* 'if we call a function to handle this setstate' */}
                <button onClick={this.handleclick1}>Add first by a function</button>

            </div>
        )
    }
}

export default ClassComponent