import React from 'react';
import { Layout, Menu, Icon, Avatar } from 'antd';
import { Link } from 'dva/router';
import styles from './Siderwork.css';

const { SubMenu } = Menu;
const { Sider } = Layout;

function Siderwork() {
  return (
    <Sider width={200} className={styles.leftall}>
      <div className={styles.userInfo}>
        <div className={styles.userdetails}>
          <Avatar className={styles.headpic} style={{ backgroundColor: '#f56a00', verticalAlign: 'middle' }} size="large">
            王宁
          </Avatar>
          <div className={styles.name}>
            <div title="技术部">技术部</div>
            <div title="管理员">管理员</div>
          </div>
          <div className={styles.clear}></div>
        </div>
      </div>
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        style={{ borderRight: 0 }}
      >
        <Menu.Item key="1">
          <Link to="/work/workmessage">
            <Icon type="bars" />
            <span>工作动态</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/work/myfollow">
            <Icon type="star-o" />
            <span>我的关注</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/work/contact">
            <Icon type="contacts" />
            <span>联系人</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="/help">
            <Icon type="question-circle-o" />
            <span>新手帮助</span>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default Siderwork;
