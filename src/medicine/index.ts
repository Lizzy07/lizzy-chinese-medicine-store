const grassModuleFiles = require.context('./first-level/grass', true, /\.tsx$/);
const grassModules = getModules(grassModuleFiles);
function getModules(moduleFiles: any): Record<string, any> {
  const modules = moduleFiles.keys().reduce((modules: Record<string, any>, modulePath: string) =>
  {
    const moduleName = modulePath.replace(/^.[/](.).\w+$/, '$1');
    const key = moduleName.slice(2).split('.')?.[0];
    // 执行moduleFiles函数，返回一个对象{default: {// 文件内容}, _esModule: true}
    const value = moduleFiles(modulePath)
    modules[key] = value?.default
    return modules
    }, {})
  return modules
}
export {
  grassModules
};