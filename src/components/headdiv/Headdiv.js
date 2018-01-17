import React from 'react';
import { Link } from 'dva/router';
import { Layout, Menu, Input, Icon, Avatar } from 'antd';
import styles from './Headdiv.css';

const { Header } = Layout;
const Search = Input.Search;

function Headdiv() {
  return (
    <Header className={styles.header} >
      <div className={styles.logo} />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '52px' }}
      >
        <Menu.Item key="1"><Link to="/work">工作</Link></Menu.Item>
        <Menu.Item key="2"><Link to="/worklink">工作链</Link></Menu.Item>
        <Menu.Item key="3"><Link to="/approve">审批</Link></Menu.Item>
        <Avatar className={styles.headpic} size="large">
          王宁
        </Avatar>
        <Icon mode="horizontal" className={styles.iconstyle} type="bell" />
        <Icon mode="horizontal" className={styles.iconstyle} type="search" />
      </Menu>
    </Header>
  );
}

export default Headdiv;
