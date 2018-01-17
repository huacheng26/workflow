import React from 'react';
import { connect } from 'dva';
import { List, Layout, Button, Collapse, Avatar, Row, Col, Icon, Input } from 'antd';
import styles from './Contacts.css';

const { Header, Content } = Layout;
const Panel = Collapse.Panel;

const data = [
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
  {
    title: '王宁',
  },
];


function Contacts() {
  return (
    <Layout >
      <Header className={styles.headertop}>
        <Button className={styles.buttontop}><Icon type="contacts" />通讯录(30)</Button>
        <div className={styles.example_input}>
          <Input placeholder="请输入手机号码" addonAfter={<Icon type="search" />} />
        </div>
      </Header>
      <Content style={{ height: '300px', overflow: 'auto' }}>
        <Collapse bordered={false} defaultActiveKey={['1']}>
          <Panel header="技术部" key="1" className={styles.Panelitem}>
            <List
              className={styles.list}
              itemLayout="horizontal"
              dataSource={data}
              renderItem={item => (
                <List.Item className={styles.listitem}>
                  <Layout>
                    <Row type="flex" className={styles.colstyle}>
                      <Col span={12} order={1} >
                        <Avatar className={styles.headpic} size="large">
                          {item.title}
                        </Avatar>
                        <span className={styles.spanstyle}>{item.title}</span>
                        <Icon type="man" className={styles.icontyle} />
                      </Col>
                      <Col span={12} order={1} >
                        <span className={styles.padr15}>技术</span><b> | </b>
                        <span className={styles.padl15}>管理员</span><br />
                        <span><Icon type="mobile" />12345678912</span>
                      </Col>
                    </Row>
                  </Layout>
                </List.Item>
              )}
            />
          </Panel>
          <Panel header="科技部" key="2">
            <List
              className={styles.list}
              itemLayout="horizontal"
              dataSource={data}
              renderItem={item => (
                <List.Item className={styles.listitem}>
                  <Layout>
                    <Row type="flex" className={styles.colstyle}>
                      <Col span={12} order={1} >
                        <Avatar className={styles.headpic} size="large">
                          {item.title}
                        </Avatar>
                        <span className={styles.spanstyle}>{item.title}</span>
                        <Icon type="man" className={styles.icontyle} />
                      </Col>
                      <Col span={12} order={1} >
                        <span className={styles.padr15}>技术</span><b> | </b>
                        <span className={styles.padl15}>管理员</span><br />
                        <span><Icon type="mobile" />12345678912</span>
                      </Col>
                    </Row>
                  </Layout>
                </List.Item>
              )}
            />
          </Panel>
          <Panel header="销售部" key="3">
            <List
              className={styles.list}
              itemLayout="horizontal"
              dataSource={data}
              renderItem={item => (
                <List.Item className={styles.listitem}>
                  <Layout>
                    <Row type="flex" className={styles.colstyle}>
                      <Col span={12} order={1} >
                        <Avatar className={styles.headpic} size="large">
                          {item.title}
                        </Avatar>
                        <span className={styles.spanstyle}>{item.title}</span>
                        <Icon type="man" className={styles.icontyle} />
                      </Col>
                      <Col span={12} order={1} >
                        <span className={styles.padr15}>技术</span><b> | </b>
                        <span className={styles.padl15}>管理员</span><br />
                        <span><Icon type="mobile" />12345678912</span>
                      </Col>
                    </Row>
                  </Layout>
                </List.Item>
              )}
            />
          </Panel>
        </Collapse>
      </Content>
    </Layout>
  );
}

export default Contacts;
