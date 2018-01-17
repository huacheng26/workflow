import React from 'react';
import { Layout, Menu, Icon, Button } from 'antd';
import { Link } from 'dva/router';
import styles from './Siderapprove.css';

const { SubMenu } = Menu;
const { Sider } = Layout;

function Siderapprove() {
  return (
    <Sider width={200} className={styles.leftall}>
      <div className={styles.userInfo}>
        <div className={styles.userdetails}>
          <Button type="primary" icon="plus">新建审批</Button>
        </div>
      </div>
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        style={{ borderRight: 0 }}
      >
        <Menu.Item key="1">
          <Link to="/approve/myapply">
            <Icon type="check-square-o" />
            <span>我的申请</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/approve/myapprove">
            <Icon type="user" />
            <span>我的审批</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/approve/mycopy">
            <Icon type="copy" />
            <span>抄送给我</span>
          </Link>
        </Menu.Item>
        <SubMenu key="6" title={<span><Icon type="bar-chart" /> 审批管理</span>}>
          <Menu.Item key="7"><Link to="/approve/approveselect">审批查询</Link></Menu.Item>
          <Menu.Item key="8"><Link to="/approve/exportlist">导出列表</Link></Menu.Item>
        </SubMenu>
        <SubMenu key="9" title={<span><Icon type="setting" />功能设置</span>}>
          <Menu.Item key="10"><Link to="/approve/settype">类型设置</Link></Menu.Item>
          <Menu.Item key="11"><Link to="/approve/setprocess">流程设置</Link></Menu.Item>
        </SubMenu>
        <Menu.Item key="4">
          <Link to="/approve/archived">
            <Icon type="hdd" />
            <span>已归档</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="5">
          <Link to="/approve/delete">
            <Icon type="delete" />
            <span>回收站</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="12">
          <Link to="/approve/help">
            <Icon type="question-circle-o" />
            <span>新手帮助</span>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default Siderapprove;
