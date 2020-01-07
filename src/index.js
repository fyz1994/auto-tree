import React from 'react'
import { Tree } from 'antd'

/**
 * 将普通数组转化为树形结构的数组
 * @param {*} flatItems 普通数组
 * @param {*} parentId 父节点ID
 * @param {*} idKey id 对应的 key，默认为 'id'
 * @param {*} titleKey title 对应的 key，默认为 'name'
 * @param {*} parentIdKey parentId 对应的 key，默认为 'parentId'
 */
const nest = (flatItems = [], parentId, idKey = 'id', titleKey = 'name', parentIdKey = 'parentId') =>
  flatItems.filter(item => item[parentIdKey] + '' === parentId + '')
    .map(item => ({
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
}) => {
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
