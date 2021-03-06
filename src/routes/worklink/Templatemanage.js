import React from 'react';
import { connect } from 'dva';
import { Menu, Dropdown, List, Avatar, Layout, Icon, Button, Row, Col, Input, Select, Radio, Switch, Divider, Checkbox } from 'antd';
import { Link } from 'dva/router';
import styles from './Templatemanage.css';

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
function handleSizeChange() {
  console.log('111');
}


function Templatemanage() {
  return (
    <Layout className={styles.laytype}>
      <Header className={styles.headertop}>
        <Row type="flex" className={styles.colstyle}>
          <Col span={10} order={1} className={styles.colstyle}>
            <Button>新建模板</Button>
            <Button className={styles.mar5}>导入</Button>
            <Button>导出</Button>
          </Col>
          <Col span={12} order={1}>
          </Col>
          <Col span={2} order={1}>
            <span className={styles.iconst}><Icon type="sync" /></span>
          </Col>
        </Row>
      </Header>
      <Content style={{ height: '300px', overflow: 'auto' }}>
        <Layout className={styles.listtopbg}>
          <Row type="flex">
            <Col className={styles.follow} span={1} order={2}>
              <Content className={styles.content}>
                <Checkbox className={styles.checkstyle} />
              </Content>
            </Col>
            <Col className={styles.follow} span={15} order={2}>
              <Content className={styles.content}>
                <span className={styles.contentspanr}>模板名称</span>
              </Content>
            </Col>
            <Col className={styles.follow} span={4} order={2}>
              <Content className={styles.content}>
                <span className={styles.contentspanr}>分类</span>
              </Content>
            </Col>
            <Col className={styles.follow} span={4} order={4}>
              <Content className={styles.content}>
                <span className={styles.contentspanright}>操作</span>
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
                  <Col className={styles.follow} span={1} order={2}>
                    <Content className={styles.content}>
                      <Checkbox />
                    </Content>
                  </Col>
                  <Col className={styles.follow} span={15} order={2}>
                    <Content className={styles.content}>
                      <span className={styles.contentspanr}>请假</span>
                    </Content>
                  </Col>
                  <Col className={styles.follow} span={4} order={2}>
                    <Content className={styles.content}>
                      <span className={styles.contentspanr}>审批</span>
                    </Content>
                  </Col>
                  <Col className={styles.follow} span={4} order={4}>
                    <Content className={styles.content}>
                      <b>删除</b><b>编辑</b><b>使用</b>
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

export default connect(mapStateToProps)(Templatemanage);
