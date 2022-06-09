import Data from './carInfo2.json';
import React, { Component } from "react";
import ConfirmModal from '../../Modal/confirmModal';


export class CarComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      year1:'2022',
      make1:'Audi',
      size1:'Coupe',
      model1:'R8',
      unqiueTags:[]
    };
    this.onYearChange = this.onYearChange.bind(this);
    this.onMakeChange = this.onMakeChange.bind(this);
    this.onSizeChange = this.onSizeChange.bind(this);
    this.onModelChange = this.onModelChange.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
    // for (x in Data){
    //   this.onYearChange
    // }
  }

  onYearChange(event) {

    this.setState({
      year1: event.target.value,
      model1:1,
      make1:1,
      size1:1,
      unqiueTags:[]
    });
  }

    onMakeChange(event) {

    this.setState({
      make1: event.target.value,
            model1:1,
      size1:1,
      unqiueTags:[]
    });


  }

    onSizeChange(event) {
console.log(this.state.size1);
    this.setState({
      
      size1: event.target.value,
      model1:1,
      unqiueTags:[]
    });

    // console.log(Data[this.state.year1][this.state.make1].length)
  }

    onModelChange(event) {

    this.setState({
      model1: event.target.value
    });
  }
  onInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });


  }

  onSubmitForm() {
    //this.props.onFormSubmit(this.state)
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <ConfirmModal year1={this.state.year1}/>
        <ConfirmModal model1={this.state.model1}/>
        <ConfirmModal size1={this.state.size1}/>
        <ConfirmModal make1={this.state.make1}/>
        <select value={this.state.year1} name="Year" onChange={this.onYearChange} className="form-select my-3" aria-label="Default select example">
            {/* {Data[0][2005]} */}
            
             {Object.keys(Data).map((opt)=>(
              <option value={opt}>{opt}</option>
            ))} 
            
        </select>

        <select value={this.state.make1} name="Make" onChange={this.onMakeChange} className="form-select my-3" aria-label="Default select example">
            <option>Select Make</option>
             {Object.keys(Data[this.state.year1]).map((opt)=>(
              <option value={opt}>{opt}</option>
            ))} 
        </select>

        <select value={this.state.size1} name="Size" onChange={this.onSizeChange} className="form-select my-3" aria-label="Default select example">
            <option>Select Size</option>

            { Data[this.state.year1][this.state.make1] ? Object.keys(Data[this.state.year1][this.state.make1]).map((opt)=>(
              <option value={opt}>{opt}</option>
            )) : null }
            
        </select>

        <select value={this.state.model1} name="Model" onChange={this.onModelChange} className="form-select my-3" aria-label="Default select example">
            <option>Select Model</option> 
            { Data[this.state.year1]?.[this.state.make1]?.[this.state.size1] ? (Data[this.state.year1][this.state.make1][this.state.size1]).map((opt)=>(
              <option value={opt}>{opt}</option>
            )) 
            
        //     : 
        //      Data[this.state.year1]?.[this.state.make1] ? Object.keys(Data[this.state.year1][this.state.make1]).map((opt)=>{
        //       // let unqiueTags=[];
        //        let arr= Data[this.state.year1][this.state.make1][opt];
        //       for (var x in arr){
        //         {(this.state.unqiueTags.indexOf(arr[x])===-1)?
        //           <option value={arr[x]}>{arr[x]}</option>
        //           : null} 
        //     //console.log(arr[x])
        //     //console.log(this.state.unqiueTags.length)
        //     // console.log(Data[this.state.year1][this.state.make1][opt][x])
        //   }
         
        // })


            //  ))                
               : null }

        </select>
        
              <button onClick={this.onSubmitForm}>Submit</button>
      </div>
    );
  }
}

