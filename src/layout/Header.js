import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import CreatePost from '../containers/CreatePost'
import PostList from '../containers/PostList'
class Header extends React.Component {
    
 state = {
    key: 1,
  };

  handleSelect = (key) => {
     this.setState({ key });
  }

  render() {
    return ( 
      <div>  
        <Tabs activeKey={this.state.key} id="controlled-tab-example" onSelect={this.handleSelect}>
          <Tab eventKey={1} title="Local Queue">
            <CreatePost/>    
          </Tab>
          <Tab eventKey={2} title="Global View">
          <PostList/>
          </Tab>
          <Tab eventKey={3} title="Printer Alert">
          Added soon
          </Tab>
        </Tabs>
    </div>
    );
  }
}


export default Header;