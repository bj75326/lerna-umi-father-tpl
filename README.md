# lerna-umi-father-tpl

Lerna + yarn workspaces monorepo tpl, use father as building tool and umi for component development

## done

* ✔︎ Lerna + yarn workspaces 管理所有 package
* ✔︎ 基于 [umi](https://umijs.org/) 开发展示页并且部署到gh-page
* ✔︎ 基于 [father](https://github.com/umijs/father) 构建 component 的代码
* ✔︎ 支持 eslint 
* ✔︎ 加入 prettier
* ✔︎ 支持 jest 单元测试
* ✔︎ 根据 commit 信息生成 changelog

## todo

* .fatherrc.js 还不能继承根目录下的配置，需要单独为每个 package 配置
* tsconfig.json 还不能继承根目录下的配置，需要为每个 package 配置，extends 不支持
* 开发时，需要 watch 模式构建组件代码，这样组件代码的更新会实时反映在 umi HMR 下的页面上，会有延迟
* 持续优化完善 script 的命令行

## develop

```bash
$ tyarn run build:pk02
$ tyarn start
```

注： pk02 为演示用的组件 package 名