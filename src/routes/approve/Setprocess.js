import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Menu, Dropdown, List, Avatar, Layout, Icon, Button, Row, Col, Input, Select, Radio, Switch, Divider } from 'antd';
import styles from './Setprocess.css';

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

function Setprocess() {
  return (
    <Layout className={styles.laytype}>
      <Header className={styles.headertop}>
        <Row type="flex" className={styles.colstyle}>
          <Col span={10} order={1} className={styles.colstyle}>
            <Link to="/approve/addflow"><Button>添加流程</Button></Link>
          </Col>
          <Col span={12} order={1}>
            <div className={styles.select}>
              <Radio.Group value="2" onChange={handleSizeChange}>
                <Radio.Button value="2">审批流程</Radio.Button>
                <Radio.Button value="0">流程模板</Radio.Button>
              </Radio.Group>
            </div>
          </Col>
          <Col span={2} order={1}>
            <span className={styles.iconst}><Icon type="sync" /></span>
          </Col>
        </Row>
      </Header>
      <Header className={styles.headertop}>
        <Row type="flex" className={styles.colstyle}>
          <Col span={7} order={1} className={styles.colstyle}>
            <div className={styles.example_input}>
              <Select defaultValue="全部类型" style={{ width: 150 }} onChange={handleChange}>
                <Option value="jack">法务</Option>
                <Option value="lucy">财务</Option>
              </Select>
            </div>
            <div className={styles.select}>
              <Select defaultValue="全部状态" style={{ width: 100 }} onChange={handleChange}>
                <Option value="jack">全部状态</Option>
                <Option value="lucy">已启用</Option>
                <Option value="lucy">已停用</Option>
              </Select>
            </div>
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
                  <Col span={6} order={1}>
                    <Content className={styles.content}>
                      <div className={styles.headpic} size="large">
                        {item.title}
                      </div>
                      <div className={styles.contentspanall}>
                        <span className={styles.contentspan}>自由流程</span><br />
                        <span className={styles.contentspan}>申请内容：1111</span>
                      </div>
                      <div style={{ clear: 'both' }}></div>
                    </Content>
                  </Col>
                  <Col className={styles.follow} span={3} order={2}>
                    <Content className={styles.content}>
                      <span className={styles.contentspanr}>日常</span>
                    </Content>
                  </Col>
                  <Col className={styles.follow} span={4} order={3}>
                    <Content className={styles.content}>
                      <span className={styles.contentspanr}>编号</span>
                    </Content>
                  </Col>
                  <Col className={styles.follow} span={3} order={4}>
                    <Content className={styles.content}>
                      <span className={styles.contentspanr}>全体员工</span>
                    </Content>
                  </Col>
                  <Col className={styles.follow} span={6} order={4}>
                    <Content className={styles.content}>
                      <span className={styles.contentspantitle}>自由流程</span>
                      <b>编辑</b><Divider type="vertical" /><b>预览</b><Divider type="vertical" /><b>复制</b><Divider type="vertical" /><b>删除</b>
                    </Content>
                  </Col>
                  <Col className={styles.follow} span={2} order={4}>
                    <Content className={styles.content}>
                      <Switch checkedChildren="启用" unCheckedChildren="停用" defaultChecked />
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

export default connect(mapStateToProps)(Setprocess);
