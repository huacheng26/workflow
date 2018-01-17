import React from 'react';
import { connect } from 'dva';
import styles from './Settype.css';

function Settype() {
  return (
    <div className={styles.normal}>
      Route Component: Approve/Settype
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Settype);
