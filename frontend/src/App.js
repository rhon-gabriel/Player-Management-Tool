import React from "react";
import Players from "./containers/Players/Players";
import Header from './containers/Header/Header'
import { Layout } from "antd";

const App = () => {
  return (
    <Layout className={'app'}>
      <Layout.Header style={{background: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)'}}>
        <Header />
      </Layout.Header>
      <Layout.Content style={{ height: '50%' }}>
        <Players />
      </Layout.Content>
      <Layout.Footer style={{backgroundColor: '#141e30'}}><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/rhoneilgabriel/" style={{ color: '#485563'}}>Rhoneil Gabriel</a></Layout.Footer>
    </Layout>
  );
};

export default App;
