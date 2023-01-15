import React, { useState } from 'react';
import { Layout, Breadcrumb, Menu, theme } from 'antd';
import type { MenuProps } from 'antd';
import 'antd/dist/reset.css';
import cx from 'classnames';
import s from './App.module.css';
import SiderBar from "./components/SiderBar";
import MedicineContent from "./components/MedicineContent";

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
  const [selectKey, SetSelectKey] = useState('1-2')
  const onSelectMenu= (item: Record<string, any>, key: string) => {
    SetSelectKey(key)
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
            selectKey={selectKey}
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
            <MedicineContent
              selectKey={selectKey}
            ></MedicineContent>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};


export default App;