import React from 'react';
import { connect } from 'dva';
import styles from './Setprocess.css';

function Setprocess() {
  return (
    <div className={styles.normal}>
      Route Component: Approve/Setprocess
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Setprocess);
