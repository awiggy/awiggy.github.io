# awiggy · 产品笔记本

张宛瑜的个人 AI 产品作品集，在线访问：[awiggy.github.io](https://awiggy.github.io/)。

## 页面内容

- 个人介绍与工作方法：从数据分析走向 AI 产品，关注 Agent、RAG 与评测。
- 四个项目：轻报 Qingbao、Git Agent Clear、Luma、GAME HUB；明确标注本地 MVP、可安装、本地 RC、可在线体验，以及尚待验证的部分。
- 三个精选 Skills：产品交付、产品拆解、写作共创；附完整合集入口。
- 问答、GitHub 联系入口；不使用虚构履历、客户统计或示例联系方式。

## 设计与技术

2026-09-21 重新制作。参考 Superr 的实物笔记本、奶油纸底、橙色手写批注、黄色便签和大幅留白；使用自己的项目内容与独立生成素材，不复制原站品牌或产品文案。字体与中文排版为适配版本，不宣称像素级复刻。

纯静态 HTML / CSS / JavaScript，无构建依赖、无第三方运行脚本。字体与图片随站点托管，避免预览图依赖外站实时加载。素材、字体许可证与生成提示词见 [ASSETS.md](ASSETS.md)。

交互包括项目折叠面板、键盘可操作的 Skills 标签页、问答折叠、页内跳转。禁用 JavaScript 后所有 Skills 仍可阅读。支持减少动态效果偏好和打印阅读。

## 本地预览

```sh
python3 -m http.server 8000
```

访问 http://localhost:8000 。修改正文在 `index.html`，视觉在 `style.css`，交互在 `site.js`。

## 发布与回溯

推送 `main` 后由 GitHub Pages 自动发布。发布前执行 `node --check site.js`、`git diff --check`，并检查不同屏宽的页面与交互；发布后确认 Pages 构建和线上版本。

改版前版本保存在远端分支 `backup/portfolio-before-superr-20260921`，可比较或取回文件。无需重写 Git 历史。

维护内容时请同步核对项目实际能力，不把演示写成生产可用。检查记录见 [VALIDATION.md](VALIDATION.md)。
