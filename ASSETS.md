# 素材与字体

## 视觉参考

[Refero 参考页面](https://styles.refero.design/style/cfd0fec1-f25a-4b9b-9bd0-d5b66960f2f2) / [Superr](https://www.superr.ai/)：参考页面构图与笔记本、便签、手写批注的视觉语言。未直接复制其商标、照片、付费字体或网站源码。

## 网站图片

- `assets/notebook-awiggy.webp`：首屏棕色笔记本。
- `assets/notebook-qingbao.webp`：蓝色轻报笔记本。
- `assets/notebook-git.webp`：粉色 Git Clear 笔记本。
- 三张图片使用内置 imagegen 工具生成（built-in image generation），透明背景，1086 × 1448，转换为 WebP 交付。这些是装饰性项目视觉，不是产品实物或运行截图。
- `assets/qingbao-dashboard.png`：从[轻报项目公开仓库](https://github.com/awiggy/qingbao-expense-mvp/blob/main/docs/images/dashboard.png)保存的实际运行截图，展示 TEST 演示数据。与站点一同托管，未改动截图内容。
- `assets/luma-home.png`：用户提供的 Luma「日光之间」首页原始预览图（2940 × 1602），原样保存；同图见 [Luma 仓库](https://github.com/awiggy/luma/blob/main/docs/images/luma-home.png)。未通过生成工具重画界面，不代表产品已在线部署。
- GAME HUB 图为 CSS 装饰性展示，不是运行截图。
- 图标与贴纸是本站 SVG 形状，不来自原站素材。

## 字体

本地字体采用 SIL Open Font License 1.1，许可证保留在 `assets/fonts/`：

- [Lilita One](https://github.com/google/fonts/tree/main/ofl/lilitaone)：首屏与页脚粗体英文，`LilitaOne-OFL.txt`。
- [Fraunces](https://github.com/google/fonts/tree/main/ofl/fraunces)：英文衬线标题，`Fraunces-OFL.txt`。
- [Caveat](https://github.com/google/fonts/tree/main/ofl/caveat)：手写批注，`Caveat-OFL.txt`。
- 中文使用系统宋体、楷体与无衬线回退。原站专有字体未使用。

## 图像生成提示词

### 棕色笔记本

```text
Use case: product-mockup. Asset type: photorealistic cutout for a personal portfolio website hero, not a whole webpage.
Create one closed warm cognac-brown leather school notebook, very tactile fine leather grain, ivory paper edges, subtle stitching. A classic yellow pencil with pink eraser is tucked in a dark elastic loop on the right. Almost top-down view, entire notebook visible, spine on left, upright with no rotation so it can be rotated in CSS, modest perspective showing right paper edge. Centered, occupies 85% of a portrait 3:4 canvas. Soft afternoon light, minimal soft shadow. Genuinely transparent background with alpha, no table or backdrop.
On the upper third of the cover place a large white school name label with a thin dark double rounded border. Exact text: small printed "Name", large black handwritten "awiggy"; bottom row small printed "Class" with handwritten "AI product", and "No." with handwritten "01". Sharp legible text, no other text. The rest of the cover blank. No brand logos, no stickers, no watermark, no hands. High quality studio object photography.
```

### 蓝色笔记本

```text
Use case: product-mockup. Asset type: website portfolio project notebook cutout. Photorealistic beautiful CLOSED school notebook with a matte sky-blue cover decorated with simple soft white cloud shapes, ivory page edges and modest perspective showing its spine. One matching blue colored pencil beside the right edge. Whole object centered upright, top-down camera, unrotated, 85% of portrait 3:4 canvas, genuinely transparent background and very soft shadow. White school name-label in upper third with thin dark rounded border, text exactly: small "Project", large handwritten "Qingbao", bottom row small "Notes" and handwritten "AI + workflow", small "No." and handwritten "01". This is a personal product-work portfolio, not a child's branded product. Crisp legible label, fine tactile paper cover texture, premium studio photography, soft afternoon light. No hands, no other objects, no brand logos, no watermark.
```

### 粉色笔记本

```text
Use case: product-mockup. Asset type: website portfolio notebook cutout. One closed dusty rose-pink linen school notebook, ivory page edges, fine woven fabric texture with subtle stitching, a matching coral ballpoint pen clipped at right. Top-down slight perspective, unrotated upright, whole notebook centered occupying 85% of portrait 3:4 canvas, genuinely transparent background, subtle soft shadow. On upper third a large white laminated school name label, thin dark double rounded border, exact text small "Project", large black handwritten "Git Clear", bottom row small "Notes" handwritten "make it clear", small "No." handwritten "02". Soft afternoon studio light, warm tactile photography. No hands, no brand logos, no watermark, no extra objects.
```
