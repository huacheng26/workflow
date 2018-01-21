import React from 'react';
import { connect } from 'dva';
import { Menu, Dropdown, List, Avatar, Layout, Icon, Button, Row, Col, Input, Select, Radio, Switch, Divider } from 'antd';
import { Link } from 'dva/router';
import styles from './Formmanage.css';

const { Header, Footer, Content } = Layout;
const Option = Select.Option;

const data = [
  {
    title: '审批中',
  },
  {
    title: '王宁',
  },
  {
    title: '王宁',
  },
  {
    title: '王宁',
  },
  {
    title: '王宁',
  },
  {
    title: '王宁',
  },
  {
    title: '王宁',
  },
  {
    title: '王宁',
  },
];
const menu = (
  <Menu>
    <Menu.Item>
      全部更新
    </Menu.Item>
    <Menu.Item>
      审批
    </Menu.Item>
    <Menu.Item>
      台历
    </Menu.Item>
  </Menu>
);

function handleChange(value) {
  console.log(`selected ${value}`);
}
function handleSizeChange() {
  console.log('111');
}

function Formmanage() {
  return (
    <Layout className={styles.laytype}>
      <Header className={styles.headertop}>
        <Row type="flex" className={styles.colstyle}>
          <Col span={10} order={1} className={styles.colstyle}>
            <Link to="/approve/addflow"><Button>新建表单</Button></Link>
          </Col>
          <Col span={12} order={1}>
          </Col>
          <Col span={2} order={1}>
            <span className={styles.iconst}><Icon type="sync" /></span>
          </Col>
        </Row>
      </Header>
      <Content style={{ height: '300px', overflow: 'auto' }}>
        <Layout className={styles.listtopbg}>
          <Row type="flex">
            <Col className={styles.follow} span={12} order={2}>
              <Content className={styles.content}>
                <span className={styles.contentspanr}>表单名称</span>
              </Content>
            </Col>
            <Col className={styles.follow} span={3} order={2}>
              <Content className={styles.content}>
                <span className={styles.contentspanr}>创建人</span>
              </Content>
            </Col>
            <Col className={styles.follow} span={3} order={2}>
              <Content className={styles.content}>
                <span className={styles.contentspanr}>创建时间</span>
              </Content>
            </Col>
            <Col className={styles.follow} span={3} order={2}>
              <Content className={styles.content}>
                <span className={styles.contentspanr}>启用设置</span>
              </Content>
            </Col>
            <Col className={styles.follow} span={3} order={4}>
              <Content className={styles.content}>
                <span className={styles.contentspanright}>操作</span>
              </Content>
            </Col>
          </Row>
        </Layout>
        <List
          className={styles.list}
          itemLayout="horizontal"
          dataSource={data}
          renderItem={item => (
            <List.Item className={styles.listitem}>
              <Layout>
                <Row type="flex">
                  <Col className={styles.follow} span={12} order={2}>
                    <Content className={styles.content}>
                      <span className={styles.contentspanr}>考勤-请假申请</span>
                    </Content>
                  </Col>
                  <Col className={styles.follow} span={3} order={2}>
                    <Content className={styles.content}>
                      <span className={styles.contentspanr}>王宁</span>
                    </Content>
                  </Col>
                  <Col className={styles.follow} span={3} order={2}>
                    <Content className={styles.content}>
                      <span className={styles.contentspanr}>2017-12-19 01:58</span>
                    </Content>
                  </Col>
                  <Col className={styles.follow} span={3} order={2}>
                    <Content className={styles.content}>
                      <span className={styles.contentspanr}>
                        <Select defaultValue="1" style={{ width: 80 }} onChange={handleChange}>
                          <Option value="1">启用</Option>
                          <Option value="0">停用</Option>
                        </Select>
                      </span>
                    </Content>
                  </Col>
                  <Col className={styles.follow} span={3} order={4}>
                    <Content className={styles.content}>
                      <b>删除</b><b>编辑</b>
                    </Content>
                  </Col>
                </Row>
              </Layout>
            </List.Item>
          )}
        />
      </Content>
    </Layout>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Formmanage);
