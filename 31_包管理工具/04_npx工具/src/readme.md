# npm install 的时候发生了什么呢 整体流程
* （前提条件）开发者使用 npm publish 发布到 registry 这个仓库中
* 先去缓存中寻找相应配置文件的压缩包，解压到 node_modules 进行使用
* 没有的话就从 registry 中下载一个相应的压缩包




## 具体流程
npm5 之后，推出了缓存策略
npm get cache 获取缓存目录


1. npm rebuild  重新强制构建
2. npm cache clean 清除缓存
3. npm uninstall 卸载


npx  npm5.2之后
* 执行模块中的脚本代码

webpack init  这里找的是全局的，写在环境变量里的webpack
但如果想用 node_modules 中的低版本的webpack怎么办?
1. 在 package.json 中写一个脚本指令
2. npx webpack --version  自动去node_modules中寻找webpack模块并执行这个命令
