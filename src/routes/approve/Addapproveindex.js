import React from 'react';
import { connect } from 'dva';
import styles from './Addapproveindex.css';

import { Menu, Dropdown, List, Avatar, Layout, Icon, Button, Row, Col, Input, Select, Radio } from 'antd';

const { Header, Footer, Content } = Layout;
const Option = Select.Option;

const data = [
  {
    title: '日常',
  },
  {
    title: '生活',
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

function handleChange(value) {
  console.log(`selected ${value}`);
}


function Addapproveindex() {
  return (
    <Layout className={styles.laytype}>
      <Header className={styles.headertop}>
        <Row type="flex" className={styles.colstyle}>
          <Col span={9} order={1} className={styles.colstyle}>
            <div className={styles.example_input}>
              <Input placeholder="请输入关键字" addonAfter={<Icon type="search" />} />
            </div>
            <div className={styles.select}>
              <Select className={styles.select} defaultValue="lucy" style={{ width: 200 }} onChange={handleChange}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
              </Select>
            </div>
          </Col>
        </Row>
      </Header>
      <Content style={{ height: '300px', overflow: 'auto' }}>
        <List
          dataSource={data}
          renderItem={item => (
            <List.Item className={styles.rowlistitem}>
        <Row type="flex" className={styles.rowlist}>
          <Col span={4} order={1}>
          </Col>
          <Col span={16} order={1}>
            <div className={styles.listtitle}>{item.title}</div>
            <List
              grid={{ gutter: 12, column: 4 }}
              className={styles.list}
              dataSource={data}
              renderItem={item => (
                <List.Item className={styles.listitem}>
                  <Content className={styles.content}>
                    <div className={styles.headpic} size="large">
                      {item.title}
                    </div>
                    <span className={styles.contentspan}><b>日常：自由流程</b></span><br />
                    <span className={styles.contentspan}>申请内容：1111</span>
                    <div style={{ clear: 'both' }}></div>
                  </Content>
                </List.Item>
              )}
            />
          </Col>
          <Col span={4} order={1}>
          </Col>
        </Row>
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

export default connect(mapStateToProps)(Addapproveindex);
