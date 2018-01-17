import React from 'react';
import { connect } from 'dva';
import { Layout } from 'antd';
import Siderlayout from '../../components/work/Siderwork';
import styles from './Work.css';


function Work(props) {
  return (
    <Layout className={styles.main_bottom_all}>
      <Siderlayout />
      <Layout className={styles.content} >
        {props.children}
      </Layout>
    </Layout>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Work);
