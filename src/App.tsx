import React from 'react';
import { Descriptions, Card, Tag, Layout, Breadcrumb, Menu, theme } from 'antd';
import type { MenuProps } from 'antd';
import 'antd/dist/reset.css';
import cx from 'classnames';
import s from './App.module.css';
import { grassModules } from './medicine';
import type { ColorMap } from './medicine/common';
import { colorMap } from './medicine/common';
import SiderBar from "./components/SiderBar"

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

const App: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const onSelectMenu= (item: Record<string, any>, key: string) => {

  }
  return (
    <Layout>
      <Header className="header">
        <h1 className={cx(s.title, 'logo')}>李怡枝的中药铺</h1>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
      </Header>
      <Layout>
        <Sider width={200} style={{ background: colorBgContainer }}>
          <SiderBar
          onSelectMenu={onSelectMenu}
          ></SiderBar>
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
              Object.values(grassModules).map((item, index) => {
                return <Card
                key={index}
                title={item.name}
                style={{ width: 300 }}
                extra={item.taste.map((data: ColorMap, index: number) => <Tag key={index} color={colorMap[data]}>{data}</Tag>)}
                cover={item.images.map((data: string, index: number) => <img key={index} alt="草药图" src={data}></img>) }
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