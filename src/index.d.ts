export interface InputProp {
  dataSource: any[],
  treeType: string,
  rootParentId: number,
  idKey: string,
  titleKey: string,
  parentIdKey: string,
  [propName: string]: any // 允许其他属性存在
}
