import React from 'react';
import type { MenuProps } from 'antd';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
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
  label: `中经`,

  children: [
    {
      key: '2-1',
      label: `玉石`,
    }
  ]
}, {
  key: `sub3`,
  icon: React.createElement(NotificationOutlined),
  label: `下经`,

  children: [
    {
      key: '3-1',
      label: `玉石`,
    }
  ]
}];
interface SiderBarProps {
  onSelectMenu: (item: Record<string, any>, key: string) => void;
  selectKey: string;
}
const SiderBar = (props: SiderBarProps) => {
  const onSelectMenu= ({ item, key, keyPath, domEvent }: any) => {
    props.onSelectMenu(item, key)
  }
  return (<Menu
    mode="inline"
    defaultSelectedKeys={[props.selectKey]}
    defaultOpenKeys={['sub1']}
    style={{ height: '100%', borderRight: 0 }}
    items={items2}
    onSelect={onSelectMenu}
  />)
}

export default SiderBar;