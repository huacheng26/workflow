import React from 'react';
import { connect } from 'dva';
import { Menu, Dropdown, List, Avatar, Layout, Icon, Button } from 'antd';
import styles from './Workmessage.css';

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

function Workmessage() {
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
                <Header className={styles.header}>
                  <List.Item.Meta
                    className={styles.listhead}
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title={item.title}
                  />
                </Header>
                <Content className={styles.content}>
                  <Icon type="book" className={styles.contenticon} />
                  <span className={styles.contentspan}>【备忘 】</span><br />
                  <span className={styles.contentspan}>hello world</span>
                </Content>
                <Footer className={styles.footer}>{item.title}新建备忘录</Footer>
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

export default connect(mapStateToProps)(Workmessage);
