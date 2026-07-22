export const NAVIGATION = [
  { name: '首页', href: '/' },
  { name: '关于我们', href: '/about' },
  { name: '业务范围', href: '/business' },
  { name: '电商运营支持', href: '/ec-service' },
  { name: '仓储物流', href: '/logistics' },
  { name: '进出口贸易', href: '/trade' },
  { name: '服务案例', href: '/case' },
  { name: '新闻动态', href: '/news' },
  { name: '加入我们', href: '/recruit' },
  { name: '联系我们', href: '/contact' },
] as const;

export const FOOTER_NAVIGATION = {
  services: [
    { name: '电商运营支持', href: '/ec-service' },
    { name: '仓储物流服务', href: '/logistics' },
    { name: '进出口贸易支持', href: '/trade' },
    { name: '供应链解决方案', href: '/business' },
  ],
  company: [
    { name: '关于我们', href: '/about' },
    { name: '服务案例', href: '/case' },
    { name: '新闻动态', href: '/news' },
    { name: '加入我们', href: '/recruit' },
  ],
} as const;
