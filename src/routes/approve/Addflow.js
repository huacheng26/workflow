import React from 'react';
import { connect } from 'dva';
import styles from './Addflow.css';
import { Menu, Dropdown, List, Avatar, Layout, Icon, Button, Row, Col, Input, Select, Radio, Form, Upload, Divider, Affix  } from 'antd';

const { Header, Footer, Content } = Layout;
const Option = Select.Option;
const FormItem = Form.Item;
const { TextArea } = Input;

const props = {
  action: '//jsonplaceholder.typicode.com/posts/',
  onChange({ file, fileList }) {
    if (file.status !== 'uploading') {
      console.log(file, fileList);
    }
  },
  defaultFileList: [{
    uid: 1,
    name: 'xxx.png',
    status: 'done',
    reponse: 'Server Error 500', // custom error message to show
    url: 'http://www.baidu.com/xxx.png',
  }, {
    uid: 2,
    name: 'yyy.png',
    status: 'done',
    url: 'http://www.baidu.com/yyy.png',
  }, {
    uid: 3,
    name: 'zzz.png',
    status: 'error',
    reponse: 'Server Error 500', // custom error message to show
    url: 'http://www.baidu.com/zzz.png',
  }],
};


function Addflow() {
  return (
    <Layout className={styles.laytype}>
      <Header className={styles.headertop}>
        <Row type="flex" className={styles.colstyle}>
          <Col span={9} order={1} className={styles.colstyle}>
            <Button icon="rollback" size="small">返回</Button>
          </Col>
        </Row>
      </Header>
      <Content style={{ height: '300px', overflow: 'auto' }}>
        <Form>
          <FormItem
            labelCol={{ span: 2 }}
            wrapperCol={{ span: 4 }}
            label="流程类型"
          >
            <Select placeholder="请选择流程类型">
              <Option value="male">法务</Option>
              <Option value="female">财务</Option>
            </Select>
          </FormItem>
          <FormItem
            labelCol={{ span: 2 }}
            wrapperCol={{ span: 4 }}
            label="流程名称"
          >
            <Input placeholder="请输入流程名称" />
          </FormItem>
          <FormItem
            labelCol={{ span: 2 }}
            wrapperCol={{ span:10 }}
            label="流程说明"
          >
            <TextArea placeholder="这里说明流程的规则。" autosize={{ minRows: 3, maxRows: 6 }} />
          </FormItem>
          <FormItem
            labelCol={{ span: 2 }}
            wrapperCol={{ span:10 }}
            label="流程说明"
          >
            <Upload {...props}>
              <Button>
                <Icon type="upload" /> Upload
              </Button>
            </Upload>
            <Divider>表单设置</Divider>
          </FormItem>
          <FormItem
            labelCol={{ span: 2 }}
            wrapperCol={{ span: 10 }}
            label="表单设置"
          >
            <Layout className={styles.setform}>
              <Header className={styles.headerform}>
                <span>单行文本 <Icon type="menu-fold" /></span>
                <span>多行文本 <Icon type="bars" /></span>
                <span>数字文本 <Icon type="exclamation" /></span>
                <span>单选框 <Icon type="plus-circle-o" /></span>
                <span>复选框 <Icon type="check-square-o" /></span>
                <span>下拉菜单 <Icon type="down-square-o" /></span>
                <span>选择日期 <Icon type="calendar" /></span>
                <span>时间区间 <Icon type="calendar" /></span>
                <span>上传附件 <Icon type="paper-clip" /></span>
                <div className={styles.clear}></div>
              </Header>
              <Content className={styles.setformcontent}>
                <div className={styles.setforminput}>
                  <Affix style={{ position: 'absolute', top: '-20px', right: '-10px' }}>
                    <Icon type="close-circle" className={styles.formicon} />
                  </Affix>
                <FormItem
                  className={styles.setformitem}
                  labelCol={{ span: 5 }}
                  wrapperCol={{ span: 10 }}
                  label="流程名称"
                >
                  <Input placeholder="请输入流程名称" />
                </FormItem>
                </div>

                <div className={styles.setforminput}>
                  <Affix style={{ position: 'absolute', top: '-20px', right: '-10px' }}>
                    <Icon type="close-circle" className={styles.formicon} />
                  </Affix>
                  <FormItem
                    className={styles.setformitem}
                    labelCol={{ span: 5 }}
                    wrapperCol={{ span: 10 }}
                    label="流程名称"
                  >
                    <Input placeholder="请输入流程名称" />
                  </FormItem>
                </div>

                <div className={styles.setforminput}>
                  <Affix style={{ position: 'absolute', top: '-20px', right: '-10px' }}>
                    <Icon type="close-circle" className={styles.formicon} />
                  </Affix>
                  <FormItem
                    className={styles.setformitem}
                    labelCol={{ span: 5 }}
                    wrapperCol={{ span: 10 }}
                    label="流程名称"
                  >
                    <Input placeholder="请输入流程名称" />
                  </FormItem>
                </div>

                <div className={styles.setforminput}>
                  <Affix style={{ position: 'absolute', top: '-20px', right: '-10px' }}>
                    <Icon type="close-circle" className={styles.formicon} />
                  </Affix>
                  <FormItem
                    className={styles.setformitem}
                    labelCol={{ span: 5 }}
                    wrapperCol={{ span: 10 }}
                    label="流程名称"
                  >
                    <Input placeholder="请输入流程名称" />
                  </FormItem>
                </div>
              </Content>
            </Layout>
          </FormItem>

        </Form>
      </Content>
    </Layout>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Addflow);
