# 安装

## NRM
> 使用镜像源管理工具NRM，方便管理我们的镜像源，快速的切换源


#### 安装

```shell
# NRM
$ npm install -g nrm
```

#### 使用
**查看可选的源**
```shell
$ nrm ls

* npm ---------- https://registry.npmjs.org/
yarn --------- https://registry.yarnpkg.com/
tencent ------ https://mirrors.cloud.tencent.com/npm/
cnpm --------- https://r.cnpmjs.org/
taobao ------- https://registry.npmmirror.com/
npmMirror ---- https://skimdb.npmjs.com/registry/
```
其中，带`*`的是当前使用的源，上面的输出表明当前源是官方源。

#### 添加源
```shell
# 官方源和私服的group
$ nrm add fb http://192.168.1.201:82/repository/npm-group/

# 私服包
$ nrm add fbnpm http://192.168.1.201:82/repository/npm-hosted/
```

#### 切换源
```shell
# 安装包
$ nrm use fb

# 发布私服包
$ nrm use fbnpm

```

#### 删除源
```shell
$ nrm del fb
```

#### 测试源速度
```shell
$ nrm test npm
```


#### 发布私服包
```shell
# 发布
$ npm publish

# 取消发布
$ npm unpublish packageName@0.0.1 || npm unpublish packageName --force
```


## 使用包管理器

**我们建议您使用包管理器 NPM 安装 @fb/components,需要先将源切换到`fb`**

```shell
# NPM
$ npm install @fb/components --save
```