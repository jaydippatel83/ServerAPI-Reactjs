import React from 'react';
import {connect} from 'react-redux';
import {createStream} from '../../action';
import StreamForm from './streamForm';

class StreamCreate extends React.Component {
    
    onSubmit=(formValues)=>{
        const msg='Submited Data Successfully...';
        this.props.createStream(formValues);
        alert(msg); 
    }
    render() {
        return (
            <div>
                <h2>Create A Stream</h2>
                <StreamForm onSubmit={this.onSubmit}/>
            </div>
            

        );
    }

} 
export default connect(null,{createStream})(StreamCreate);