# 某某国际贸易有限公司官网

基于 Astro + React + TypeScript + Tailwind CSS 二开的现代中文企业官网，面向跨境贸易、仓储物流、电商运营支持与供应链服务场景。

## 页面结构

- `/` 首页
- `/about` 关于我们
- `/business` 业务范围
- `/ec-service` 电商运营支持
- `/logistics` 仓储物流
- `/trade` 进出口贸易
- `/case` 服务案例
- `/news` 新闻动态
- `/recruit` 加入我们
- `/contact` 联系我们

## 配置文件

核心内容集中在 `src/config`：

- `site.ts`：站点 SEO 默认信息
- `company.ts`：公司名称、电话、邮箱、地址等
- `navigation.ts`：主导航与页脚导航
- `services.ts`：业务卡片与仓储能力
- `stats.ts`：统计数据
- `home.ts`：首页内容与新闻静态数据
- `contact.ts`：联系表单选项和提示文案

## 开发

```bash
npm install
npm run dev
npm run build
```

第一版联系表单仅做前端校验和提交提示，后续可在 `src/components/react/ContactForm.tsx` 中接入 Formspree、Netlify Forms 或 Astro Actions。
