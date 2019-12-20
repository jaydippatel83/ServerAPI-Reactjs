import React from 'react';

import {Router, Switch} from 'react-router-dom';
import {Route} from 'react-router-dom';
import StreamCreate from './stream/streamCreate';
import StreamDelete from './stream/streamDelete';
import StreamEdit from './stream/streamEdit';
import StreamShow from './stream/streamShow';
import StreamList from './stream/streamList';
import Header from './header';
import history from '../history';
 
const App =()=>{
   return (
        <div className="ui container">
            
            <Router history={history}>
            <div>
             <Header/>
             <switch>
                <Route path="/" exact component={StreamList}/>
                <Route path="/Stream/new" exact component={StreamCreate}  />
                <Route path="/Stream/edit/:id" exact component={StreamEdit}  />
                <Route path="/Stream/delete/:id" exact component={StreamDelete}  />
                <Route path="/Stream/show/:id" exact component={StreamShow}  />
            </switch>    
            </div>
            </Router>
        </div>
    )
 }
   


export default App;