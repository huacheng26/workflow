import React from 'react';
import { connect } from 'dva';
import { Menu, Dropdown, List, Avatar, Layout, Icon, Button, Row, Col, Input, Select, Radio } from 'antd';
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
      <Header className={styles.headertop}>
        <Row type="flex" className={styles.colstyle}>
        </Row>
      </Header>
      <Content style={{ height: '300px', overflow: 'auto' }}>
        <List
          className={styles.list}
          itemLayout="horizontal"
          dataSource={data}
          renderItem={item => (
            <List.Item className={styles.listitem}>
              <Layout>
                <Row type="flex">
                  <Col span={20} order={1}>
                    <Content className={styles.content}>
                      <span className={styles.contentspan}><b>软件开发</b></span><br />
                      <span className={styles.contentspan}>分类：默认 <i>王宁</i> 删除于2018.1.2</span>
                      <div style={{ clear: 'both' }}></div>
                    </Content>
                  </Col>
                  <Col className={styles.follow} span={2} order={2}>
                    <Content className={styles.content}>
                      <span className={styles.contentspanr}><em>10天后彻底删除</em></span>
                    </Content>
                  </Col>
                  <Col className={styles.follow} span={2} order={3}>
                    <Content className={styles.content}>
                      <span className={styles.contentspanr}><b>还原</b></span>
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
