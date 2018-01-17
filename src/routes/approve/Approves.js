import React from 'react';
import { connect } from 'dva';
import { Layout } from 'antd';
import Siderapprove from '../../components/approve/Siderapprove';
import styles from './Approves.css';

function Approves(props) {
  return (
    <Layout className={styles.main_bottom_all}>
      <Siderapprove />
      <Layout className={styles.content}>
        {props.children}
      </Layout>
    </Layout>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Approves);
