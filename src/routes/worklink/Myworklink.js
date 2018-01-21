import React from 'react';
import styles from './Myworklink.css';
import { Menu, Dropdown, List, Avatar, Layout, Icon, Button, Row, Col, Input, Select, Radio } from 'antd';

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

function Myworklink() {
  return (
    <Layout className={styles.laytype}>
      <Header className={styles.headertop}>
        <Row type="flex" className={styles.colstyle}>
          <Col span={9} order={1} className={styles.colstyle}>
            <div className={styles.example_input}>
              <Input placeholder="请输入关键字" addonAfter={<Icon type="search" />} />
            </div>
          </Col>
        </Row>
      </Header>
      <Header className={styles.headertop}>
        <Row type="flex" className={styles.colstyle}>
          <Col span={2} order={1} className={styles.colstyle}>
            <Select defaultValue="jack" className={styles.select}>
              <Option value="jack">默认</Option>
              <Option value="lucy">公告</Option>
              <Option value="tom">日志</Option>
            </Select>
          </Col>
          <Col span={2} order={1} className={styles.colstyle}>
            <Select defaultValue="jack" className={styles.select}>
              <Option value="jack">全部状态</Option>
              <Option value="lucy">进行中</Option>
              <Option value="tom">已完成</Option>
            </Select>
          </Col>
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
                      <span className={styles.contentspan}>分类：默认 <i>王宁</i> 创建于2018.1.2</span>
                      <div style={{ clear: 'both' }}></div>
                    </Content>
                  </Col>
                  <Col className={styles.follow} span={2} order={2}>
                    <Content className={styles.content}>
                      <span className={styles.contentspanr}>进行中</span>
                    </Content>
                  </Col>
                  <Col className={styles.follow} span={2} order={3}>
                    <Content className={styles.content}>
                      <span className={styles.contentspanr}><b>置顶</b></span>
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

export default Myworklink;
