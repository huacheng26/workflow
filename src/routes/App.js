import React from 'react';
import { connect } from 'dva';
import { Layout } from 'antd';

import Headdiv from '../components/headdiv/Headdiv';
import styles from './App.css';

function App(props) {
  return (
    <Layout className={styles.main_all}>
      <Headdiv />
      {props.children}
    </Layout>
  );
}

App.propTypes = {
};

export default connect()(App);
