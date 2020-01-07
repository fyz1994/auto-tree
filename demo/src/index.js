import React, { Component } from 'react'
import { render } from 'react-dom'
import './index.less'

import Example from '../../src'

const exampleDatas = [
  {
    id: 1,
    name: 'parent-0',
    parentId: 0,
  }, {
    id: 2,
    name: 'leaf-0',
    parentId: 1,
  }, {
    id: 3,
    name: 'leaf-1',
    parentId: 1,
  }, {
    id: 4,
    name: 'parent-1',
    parentId: 0,
  }, {
    id: 5,
    name: 'leaf-0',
    parentId: 4,
  }, {
    id: 6,
    name: 'leaf-1',
    parentId: 4,
  },
]

class Demo extends Component {
  render() {
    return (
      <div className="container">
        <div className="content">
          <h1>auto-tree Demo</h1>
          <Example dataSource={exampleDatas} />
        </div>
      </div>
    )
  }
}

render(<Demo />, document.querySelector('#demo'))
