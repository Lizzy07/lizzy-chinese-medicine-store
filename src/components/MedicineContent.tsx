import React, {useEffect, useState} from 'react';
import { Descriptions, Card, Tag } from 'antd';
import { grassModules, woodModules } from '../medicine';
import type { ColorMap } from '../medicine/common';
import { colorMap } from '../medicine/common';

const keyModulesMap = {
  "1-2": grassModules,
  "1-3": woodModules
} as Record<string, any>
interface MedicineContentProps{
  selectKey: string
}
const MedicineContent = (props: MedicineContentProps) => {
  const [modules, SetModules] = useState<Record<string, any>>({});
  useEffect(() => {
    SetModules(keyModulesMap[props.selectKey])
  }, [props.selectKey])
  return (<>
  {
    Object.values(modules || {}).map((item, index) => {
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
  </>)
}
export default MedicineContent;