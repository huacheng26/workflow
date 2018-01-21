import React from 'react';
import { connect } from 'dva';
import { Menu, Dropdown, List, Avatar, Layout, Icon, Button, Row, Col, Input, Select, Radio, Switch, Divider, Form, DatePicker, TreeSelect  } from 'antd';
import { Link } from 'dva/router';
import styles from './Exportlist.css';

const { Header, Footer, Content } = Layout;
const Option = Select.Option;
const FormItem = Form.Item;
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

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

const treeData = [{
  label: 'Node1',
  value: '0-0',
  key: '0-0',
  disabled:'true',
  children: [{
    label: 'Child Node1',
    value: '0-0-1',
    key: '0-0-1',
  }, {
    label: 'Child Node2',
    value: '0-0-2',
    key: '0-0-2',
  }],
}, {
  label: 'Node2',
  value: '0-1',
  key: '0-1',
  disabled:'true',
  children: [{
    label: 'Child Node1',
    value: '0-0-1',
    key: '0-0-1',
  }],
}];

function onChange(date, dateString) {
  console.log(date, dateString);
}

function Exportlist() {
  return (
    <Layout className={styles.laytype}>
      <Content style={{ height: '300px', overflow: 'auto' }}>
        <Layout className={styles.listtopbg}>
          <Row type="flex">
            <Col className={styles.follow} span={16} order={2}>
              <Content className={styles.content}>
                <span className={styles.contentspanr}>文件名称</span>
              </Content>
            </Col>
            <Col className={styles.follow} span={4} order={2}>
              <Content className={styles.content}>
                <span className={styles.contentspanr}>导出人</span>
              </Content>
            </Col>
            <Col className={styles.follow} span={4} order={4}>
              <Content className={styles.content}>
                <span className={styles.contentspanright}>导出时间</span>
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
                  <Col className={styles.follow} span={16} order={2}>
                    <Content className={styles.content}>
                      <div className={styles.headpic} size="large">
                        {item.title}
                      </div>
                      <div className={styles.contentspanall}>
                        <span className={styles.contentspan}>申请汇总表_全部流程_2018-01-01_2018-01-31.zip(60.5 KB)</span><br />
                        <span className={styles.contentspan}><b>下载</b><b>访问记录</b><b>属性</b></span>
                      </div>
                      <div style={{ clear: 'both' }}></div>
                    </Content>
                  </Col>
                  <Col className={styles.follow} span={4} order={2}>
                    <Content className={styles.content}>
                      <span className={styles.contentspanr}>王宁</span>
                    </Content>
                  </Col>
                  <Col className={styles.follow} span={4} order={4}>
                    <Content className={styles.content}>
                      <span className={styles.contentspanright}> 2018.1.25</span>
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

export default connect(mapStateToProps)(Exportlist);
