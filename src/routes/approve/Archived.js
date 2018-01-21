import React from 'react';
import { connect } from 'dva';
import { Menu, Dropdown, List, Avatar, Layout, Icon, Button, Row, Col, Input, Select, Radio, Switch, Divider } from 'antd';
import { Link } from 'dva/router';
import styles from './Archived.css';

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


function Archived() {
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
          <Col span={10} order={1}>
            <div className={styles.select}>
              <Radio.Group value="2" onChange={handleSizeChange}>
                <Radio.Button value="2">全部</Radio.Button>
                <Radio.Button value="1">同意</Radio.Button>
                <Radio.Button value="-1">不同意</Radio.Button>
              </Radio.Group>
            </div>
          </Col>
          <Col span={5} order={1}>
            <span className={styles.iconst}><Icon type="sync" /></span>
            <span className={styles.iconst}><Icon type="download" /></span>
          </Col>
        </Row>
      </Header>
      <Content style={{ height: '300px', overflow: 'auto' }}>
        <Layout className={styles.listtopbg}>
          <Row type="flex">
            <Col className={styles.follow} span={3} order={2}>
              <Content className={styles.content}>
                <span className={styles.contentspanr}>申请类型</span>
              </Content>
            </Col>
            <Col className={styles.follow} span={3} order={2}>
              <Content className={styles.content}>
                <span className={styles.contentspanr}>申请编号</span>
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
                <span className={styles.contentspanr}>审批人</span>
              </Content>
            </Col>
            <Col className={styles.follow} span={3} order={2}>
              <Content className={styles.content}>
                <span className={styles.contentspanr}>归档人</span>
              </Content>
            </Col>
            <Col className={styles.follow} span={3} order={4}>
              <Content className={styles.content}>
                <span className={styles.contentspanright}>审批结果</span>
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
                      <span className={styles.contentspanr}>日常</span>
                    </Content>
                  </Col>
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
                      <span className={styles.contentspanr}>王宁</span>
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

export default connect(mapStateToProps)(Archived);
