import _ from 'lodash';
import React from 'react';
import {connect} from 'react-redux';
import {fetchStream,editStream} from '../../action';
import StreamForm from './streamForm';

 class StreamEdit extends React.Component{
     componentDidMount(){
         this.props.fetchStream(this.props.match.params.id);
     }
     onSubmit=(formValues)=>{
         this.props.editStream(this.props.match.params.id,formValues);
     }
     render(){
     if(!this.props.stream){
         return <h1>Loading...</h1>
     }
    return  (
        <div>
            <div>
                <h2>Edit a Stream</h2>
                <StreamForm initialValues={_.pick(this.props.stream,'title','Description')}
                onSubmit={this.onSubmit}/>
            </div>
        </div>
    )
     }
};

const mapStateToProps=(state,ownProps)=>{
 
    return {stream:state.streams[ownProps.match.params.id]};
    
};
export default (connect(mapStateToProps,{fetchStream,editStream})) (StreamEdit);