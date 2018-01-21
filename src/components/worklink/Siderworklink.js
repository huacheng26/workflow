import React from 'react';
import { Layout, Menu, Icon, Button } from 'antd';
import { Link } from 'dva/router';
import styles from './Siderworklink.css';

const { SubMenu } = Menu;
const { Sider } = Layout;

function Siderworklink() {
  return (
    <Sider width={200} className={styles.leftall}>
      <div className={styles.userInfo}>
        <div className={styles.userdetails}>
          <Button type="primary" icon="plus">新建工作链</Button>
        </div>
      </div>
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        style={{ borderRight: 0 }}
      >
        <Menu.Item key="1">
          <Link to="/worklink/allworklink">
            <Icon type="bars" />
            <span>全部工作链</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/worklink/myworklink">
            <Icon type="user" />
            <span>我的工作链</span>
          </Link>
        </Menu.Item>
        <SubMenu key="3" title={<span><Icon type="setting" /> 功能设置</span>}>
          <Menu.Item key="4"> <Link to="/worklink/typemanage">分类管理</Link></Menu.Item>
          <Menu.Item key="5"> <Link to="/worklink/formmanage">表单管理</Link></Menu.Item>
          <Menu.Item key="6"> <Link to="/worklink/templatemanage">模板管理</Link></Menu.Item>
          <Menu.Item key="7"> <Link to="/worklink/exportlist">导出列表</Link></Menu.Item>
        </SubMenu>
        <Menu.Item key="8">
          <Link to="/worklink/templatemarket">
            <Icon type="shopping-cart" />
            <span>模板市场</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="10">
          <Link to="/worklink/delete">
            <Icon type="delete" />
            <span>回收站</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="9">
          <Link to="/worklink/help">
            <Icon type="question-circle-o" />
            <span>新手帮助</span>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default Siderworklink;
