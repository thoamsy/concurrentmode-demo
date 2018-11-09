# React Concurrent Mode

# 想要陈述的观点

本 demo 是根据 [Concurrent Rendering in React](https://www.youtube.com/watch?v=ByBPyMBTzM0&t=1882s&frags=pl%2Cwn) 的灵感，实现的一个简单的 Demo

### 展示内容

1. 使用 `lazy` 实现 Suspense，而不是自己写一个工具函数
2. 通过 `react-cache`，像写同步代码一样写异步需求
3. 使用 ConcurrentMode 来解决闪烁功能

### 未实现

1. 支持 `hidden` 的 _offline render_
2. scheduler 的使用姿势

## Demo 描述

### Code Splitting

Demo 通过一个 Tab 来展现，点击某个 Tab 就能显示该 Tab 下的组件（废话），同时每个 Tab 的组件都是 lazy load

![](./React%20Concurrent%20Mode/07DFFDD7-AE97-41E7-B6EA-A10DAA0CB4DE.png)
其中第一个 Tab 看上去很简单，需要关注的特性其实就是 Network 中，被动态加载进来的 JS。
而在代码中，而实现 Lazy Load 的部分，则有代码中的 [⇥](./src/Tab.jsx) 来实现逻辑
![](React%20Concurrent%20Mode/B6327186-87D6-481F-B8FC-0D22B1E9F067.png)

### React cache

虽然 react-cache 这个库还没有正式发布，但是它暗示一个未来写 React 的趋势：**超级简单**
思考一个非常常见的场景：

> 我们有一个组件，需要在 didMount 的时候，发送一个异步请求。接着根据新的 props or state 的修改，继续发送请求。
> 为了做到这一点，传统的实现方式是，定义一个 state，里面包含了一个属性 `data, loading`。data 就是异步请求的返回值，而 loading 则是发送异步请求的时候控制 loading 的出现 or 消失。

传统的写法如同 `master` 分支中的 `Form.js` 一样，需要写很多冗余的代码。日子久了，就会觉得无聊。而 `cache-for-ajax` 分支通过 `Suspense` 配合 `cache`，十分优雅地解决了这个问题。

同时因为自带的缓存机制，所以在相同的参数请求下，可以将结果立刻返回，不需要再 loading 一次。如果你不需要缓存，又想这么爽的写代码？那就让 Cache 使用时间戳作为 Key 吧 🌚

### Concurrent Mode

本 Demo 对 Concurrent Mode 的挖掘比较浅，仅仅只是支持 `Suspense` 的 `maxDuration` 属性。为什么会有这样一个需求？
关注 Demo 的底部那一栏

![](React%20Concurrent%20Mode/C3262D7F-3E5F-4EE5-AEA1-E8AC506C74B9.png)

这里有一个切换 Loading 时间的开关，默认情况下是 Slow。上面提到的，第二个 Tab 在 didMount 的时候就会发送一个 ajax 请求。如果这个请求很快的话，比如 200ms 之内就能得到结果，那么再唐突的显示一个 loading 是没有意义的，**反而会让用户觉得你这个 app 很卡**。
而通过 maxDuration 就能做到指定时间内，如果**资源**加载完成了，就直接展示资源，跳过 Loading 的展示。而这个功能在同步模式下**是不支持的**

通过点击右下角那个 A 按钮，可以展示通过 Concurrent Mode 渲染的组件。
来对比一下首次点击 Tab2 时候的效果吧

## 题外话

那么 Tab3 有什么用呢？本来是想模拟 `hidden` 的效果，不过我无法生效。暂且不管它吧 🌚
