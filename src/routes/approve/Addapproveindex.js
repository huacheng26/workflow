import React from 'react';
import { connect } from 'dva';
import styles from './Addapproveindex.css';

function Addapproveindex() {
  return (
    <div className={styles.normal}>
      Route Component: Addapproveindex
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Addapproveindex);
