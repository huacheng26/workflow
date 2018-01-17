import React from 'react';
import { connect } from 'dva';
import { Menu, Dropdown, List, Avatar, Layout, Icon, Button, Row, Col } from 'antd';
import styles from './Myfollow.css';

const { Header, Footer, Content } = Layout;

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

function Myfollow() {
  return (
    <Layout >
      <Header className={styles.headertop}>
        <Dropdown overlay={menu} >
          <Button className={styles.buttontop}>全部更新<Icon type="down" /></Button>
        </Dropdown>
        <Icon type="sync" className={styles.iconstyle} />
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
                  <Col span={22} order={1}>
                    <Content className={styles.content}>
                      <Icon type="calendar" className={styles.contenticon} />
                      <span className={styles.contentspan}><b>{item.title}</b></span><br />
                      <span className={styles.contentspan}>hello world</span>
                    </Content>
                    <Footer className={styles.footer}>
                      招生老师经验不足 招生难工作场景校长或老师靠经验去招生，效果很大程度上取决于其经验水平，缺乏标准有效 的流程很难保证每次的招生效果。
                    </Footer>
                  </Col>
                  <Col className={styles.follow} span={2} order={2}><Button className={styles.followbotton} type="primary">取消关注</Button></Col>
                </Row>
              </Layout>
            </List.Item>
          )}
        />
      </Content>
    </Layout>
  );
}

export default Myfollow;
