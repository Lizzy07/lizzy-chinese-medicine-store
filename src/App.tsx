import React from 'react';
import { Descriptions, Card, Tag, Layout, Breadcrumb, Menu, theme } from 'antd';
import type { MenuProps } from 'antd';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import 'antd/dist/reset.css';
import s from './App.module.css';
import * as medicine from './medicine';
import type { ColorMap } from './medicine/common';
import { colorMap } from './medicine/common';
import cx from 'classnames';

const { Header, Content, Sider } = Layout;

const items1: MenuProps['items'] = [{
  key: '1',
  label: '针灸',
}, {
  key: '2',
  label: '神农本草经',
}, {
  key: '3',
  label: '黄帝内经',
}];

const items2: MenuProps['items'] = [{
  key: `sub1`,
  icon: React.createElement(UserOutlined),
  label: '上品药',

  children: [
    {
      key: '1-1',
      label: `玉石`,
    },
    {
      key: '1-2',
      label: `草`,
    },
    {
      key: '1-3',
      label: `木`,
    }
  ],
}, {
  key: `sub2`,
  icon: React.createElement(LaptopOutlined),
  label: `subnav 2`,

  children: [
    {
      key: '2-1',
      label: `option 2-1`,
    }
  ]
}, {
  key: `sub3`,
  icon: React.createElement(NotificationOutlined),
  label: `subnav 3`,

  children: [
    {
      key: '3-1',
      label: `option 3-1`,
    }
  ]
}];

const App: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Header className="header">
        <h1 className={cx(s.title, 'logo')}>李怡枝的中药铺</h1>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
      </Header>
      <Layout>
        <Sider width={200} style={{ background: colorBgContainer }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
            items={items2}
          />
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>草药🌿类</Breadcrumb.Item>
            <Breadcrumb.Item>神农本草经</Breadcrumb.Item>
            <Breadcrumb.Item>中药铺</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, 300px)',
              gridGap: '10px',
              background: colorBgContainer,
            }}
          >
            {
              Object.values(medicine).map((item, index) => {
                return <Card
                key={index}
                title={item.name}
                style={{ width: 300 }}
                extra={item.taste.map((data: ColorMap) => <Tag color={colorMap[data]}>{data}</Tag>)}
                cover={item.images.map(data => <img alt="草药图" src={data}></img>) }
                >
                  <Card.Meta
                    description={`性味：${item.chillsOrfever}`}
                  ></Card.Meta>
                  {
                    item.content()
                  }
                  <Descriptions
                    // bordered
                    size="small"
                    column={1}
                  >
                    <Descriptions.Item label="产地">{item.originPlace}</Descriptions.Item>
                    <Descriptions.Item label="禁忌">{item.taboo}</Descriptions.Item>
                    <Descriptions.Item label="附录">{item.appendix}</Descriptions.Item>
                  </Descriptions>
                </Card>
              })
            }
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};


export default App;