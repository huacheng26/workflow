import React from 'react';
import { connect } from 'dva';
import { Layout } from 'antd';
import Siderworklink from '../../components/worklink/Siderworklink';
import styles from './Worklinks.css';

function Worklinks(props) {
  return (
    <Layout className={styles.main_bottom_all}>
      <Siderworklink />
      <Layout className={styles.content}>
        {props.children}
      </Layout>
    </Layout>
  );
}

Worklinks.propTypes = {
};
function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Worklinks);
