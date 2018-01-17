import React from 'react';
import { connect } from 'dva';
import styles from './Myapply.css';
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

function Myapply() {
  return (
    <Layout className={styles.laytype}>
      <Header className={styles.headertop}>
        <Row type="flex" className={styles.colstyle}>
          <Col span={9} order={1} className={styles.colstyle}>
        <div className={styles.example_input}>
          <Input placeholder="请输入关键字" addonAfter={<Icon type="search" />} />
        </div>
        <div className={styles.select}>
          <Select
            className={styles.select}
            showSearch
            style={{ width: 200 }}
            placeholder="Select a person"
            optionFilterProp="children"
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="tom">Tom</Option>
          </Select>
        </div>
          </Col>
          <Col span={8} order={1}>
        <div className={styles.select}>
          <Radio.Group value="2" onChange={handleSizeChange}>
            <Radio.Button value="2">全部</Radio.Button>
            <Radio.Button value="0">批准中</Radio.Button>
            <Radio.Button value="1">同意</Radio.Button>
            <Radio.Button value="-1">不同意</Radio.Button>
            <Radio.Button value="-2">已撤回</Radio.Button>
          </Radio.Group>
        </div>
          </Col>
          <Col span={7} order={1}>
            <span className={styles.iconst}><Icon type="sync" /></span>
            <span className={styles.iconst}><Icon type="download" /></span>
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
                  <Col span={12} order={1}>
                    <Content className={styles.content}>
                      <Avatar className={styles.headpic} size="large">
                        {item.title}
                      </Avatar>
                      <span className={styles.contentspan}><b>日常：自由流程</b></span><br />
                      <span className={styles.contentspan}>申请内容：1111</span>
                      <div style={{ clear: 'both' }}></div>
                    </Content>
                  </Col>
                  <Col className={styles.follow} span={4} order={2}>
                    <Content className={styles.content}>
                      <span className={styles.contentspanr}><b>{item.title}</b> : hhhh</span>
                    </Content>
                  </Col>
                  <Col className={styles.follow} span={4} order={3}>
                    <Content className={styles.content}>
                      <span className={styles.contentspanr}><b>{item.title}</b> : hhhh</span>
                    </Content>
                  </Col>
                  <Col className={styles.follow} span={4} order={4}>
                    <Content className={styles.content}>
                      <span className={styles.contentspanr}><b>{item.title}</b> : hhhh</span>
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

export default connect(mapStateToProps)(Myapply);
