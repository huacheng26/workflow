import React from 'react';
import { connect } from 'dva';
import { Menu, Dropdown, List, Avatar, Layout, Icon, Button, Row, Col, Input, Select, Radio, Switch, Divider } from 'antd';
import { Link } from 'dva/router';
import styles from './Delete.css';

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

function handleBlur() {
  console.log('blur');
}

function handleFocus() {
  console.log('focus');
}
function handleSizeChange() {
  console.log('111');
}

function Delete() {
  return (
    <Layout className={styles.laytype}>
      <Content style={{ height: '300px', overflow: 'auto' }}>
        <Layout className={styles.listtopbg}>
          <Row type="flex">
            <Col className={styles.follow} span={3} order={2}>
              <Content className={styles.content}>
                <span className={styles.contentspanr}>审批编号</span>
              </Content>
            </Col>
            <Col className={styles.follow} span={6} order={2}>
              <Content className={styles.content}>
                <span className={styles.contentspanr}>申请摘要</span>
              </Content>
            </Col>
            <Col className={styles.follow} span={3} order={2}>
              <Content className={styles.content}>
                <span className={styles.contentspanr}>申请人</span>
              </Content>
            </Col>
            <Col className={styles.follow} span={3} order={2}>
              <Content className={styles.content}>
                <span className={styles.contentspanr}>删除人</span>
              </Content>
            </Col>
            <Col className={styles.follow} span={3} order={2}>
              <Content className={styles.content}>
                <span className={styles.contentspanr}>删除时间</span>
              </Content>
            </Col>
            <Col className={styles.follow} span={3} order={2}>
              <Content className={styles.content}>
                <span className={styles.contentspanr}>彻底删除倒计时</span>
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
                  <Col className={styles.follow} span={3} order={2}>
                    <Content className={styles.content}>
                      <span className={styles.contentspanr}>bc:123456</span>
                    </Content>
                  </Col>
                  <Col className={styles.follow} span={6} order={2}>
                    <Content className={styles.content}>
                      <span className={styles.contentspanr}>1111111111</span>
                    </Content>
                  </Col>
                  <Col className={styles.follow} span={3} order={2}>
                    <Content className={styles.content}>
                      <span className={styles.contentspanr}>王宁</span>
                    </Content>
                  </Col>
                  <Col className={styles.follow} span={3} order={2}>
                    <Content className={styles.content}>
                      <span className={styles.contentspanr}>王宁</span>
                    </Content>
                  </Col>
                  <Col className={styles.follow} span={3} order={2}>
                    <Content className={styles.content}>
                      <span className={styles.contentspanr}>2018.1.4</span>
                    </Content>
                  </Col>
                  <Col className={styles.follow} span={3} order={2}>
                    <Content className={styles.content}>
                      <span className={styles.contentspanr}>10天</span>
                    </Content>
                  </Col>
                  <Col className={styles.follow} span={3} order={4}>
                    <Content className={styles.content}>
                      <span className={styles.contentspanright}>同意</span>
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

export default connect(mapStateToProps)(Delete);
