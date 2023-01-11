const modulesFiles = require.context('./first-level/grass', true, /\.tsx$/);
const modules = modulesFiles.keys().reduce((modules: Record<string, any>, modulePath: string) => {
  const moduleName = modulePath.replace(/^.[/](.).\w+$/, '$1');
  const key = moduleName.slice(2).split('.')?.[0];
  // 执行modulesFiles函数，返回一个对象{default: {// 文件内容}, _esModule: true}
  const value = modulesFiles(modulePath)
  modules[key] = value?.default
  return modules
  }, {})
console.log('node.js', modules);
export default modules;