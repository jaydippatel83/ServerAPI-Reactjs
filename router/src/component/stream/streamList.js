import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStreams } from '../../action';

class StreamList extends React.Component {
    componentDidMount() {
        this.props.fetchStreams();
    }

    randerAdmin(stream) {
        if (this.props.isSignedIn) {
            return (
                <div className="right floated content">
                    <Link to={`/stream/edit/${stream.id}`} className="ui button primary">
                        Edit
                     </Link>
                    <Link to={`/stream/delete/${stream.id}`} className="ui button negative">
                        Delete
                     </Link>
                </div>
            );
        }
    }
    randerList() {
        return this.props.streams.map(stream => {
            return (
                <div className="item" key={stream.id}>
                    {this.randerAdmin(stream)}
                    <i className="large middle aligned icon camera" />
                    <div className="content">
                        <Link to={`/Stream/show/${stream.id}`} className="header">
                           {stream.title}
                        </Link>
                        <div className="description">
                            {stream.Description}
                        </div>

                    </div>
                </div>
            );
        });
    }
    renderCreate() {
        if (this.props.isSignedIn) {
            return (
                <div style={{ textAlign: 'right' }}>
                    <Link to="/stream/new" className="ui button  positive">
                        Create Stream
                </Link>
                </div>
            )

        }
    }
    render() {
         const emptyStream=this.props.renderList;
         if(this.emptyStream === null){
             return <h1>String is Empty {this.renderCreate()}</h1>
         }
         else{
            return (
                <div>
                    <h2>Streams</h2>
                    <div className="ui celled list">
                        {this.randerList()}
                    </div>
                    {this.renderCreate()}
                </div>
            );
         }
      
    }
}
const mapStateToProps = state => {
    return {
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    }

};
export default connect(mapStateToProps, { fetchStreams })(StreamList);