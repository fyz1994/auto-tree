import * as React from 'react'
import { Tree } from 'antd'

import { InputProp } from './index.d'
/**
 * 将普通数组转化为树形结构的数组
 * @param {*} flatItems 普通数组
 * @param {*} parentId 父节点ID
 * @param {*} idKey id 对应的 key，默认为 'id'
 * @param {*} titleKey title 对应的 key，默认为 'name'
 * @param {*} parentIdKey parentId 对应的 key，默认为 'parentId'
 */
const nest = (flatItems: any = [], parentId: number, idKey: string = 'id', titleKey: string = 'name', parentIdKey: string = 'parentId') =>
  flatItems.filter((item: { [x: string]: any }) => item[parentIdKey] + '' === parentId + '')
    .map((item: { [x: string]: any }) => ({
      ...item,
      key: item[idKey],
      title: item[titleKey],
      children: nest(flatItems, item[idKey])
    }))

const App = ({
  treeType = "normal",
  dataSource = [],
  rootParentId = 0,
  idKey = 'id', titleKey = 'name', parentIdKey = 'parentId',
  ...otherProps
}: InputProp) => {
  const elementType = treeType === 'directory' ? Tree.DirectoryTree : Tree

  return React.createElement(
    elementType,
    {
      treeData: nest(dataSource, rootParentId, idKey, titleKey, parentIdKey),
      ...otherProps,
    }
  )
}

export default App
