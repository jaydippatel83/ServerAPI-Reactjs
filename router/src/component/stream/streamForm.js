import React from 'react';
import { Field, reduxForm } from 'redux-form';
 

class StreamForm extends React.Component {
     
    renderError({error,touched}){
        if(touched && error){
            return(
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            )
        };
        

    }
    renderInput=({input, label, meta})=>{

        const className=`field ${meta.error && meta.touched ? 'error':''}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {this.renderError(meta)}
                
            </div>
        );
         
    }
    onSubmit=(formValues)=>{
        const msg='Submited Data Successfully...';
        this.props.onSubmit(formValues);
        alert(msg); 
    }
    render() {
        console.log(this.props);
        
        return (
            <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name="title" component={this.renderInput} label="Name" />
                <Field name="Description" component={this.renderInput} label="City" />
               
                <button className="ui button primary">Submit</button>
            </form>

        );
    }

}

const validate=formValues=>{
    const errors ={};

    if(!formValues.title){
        errors.title='You must Enter a title';
        
    }
    if(!formValues.Description){
        errors.Description='You must Enter a Description';
        
    }
    return errors;
};



export default reduxForm({
    form: 'streamForm',
    validate
  })(StreamForm);