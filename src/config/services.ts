export const SERVICES = [
  {
    id: 'ec-service',
    title: '电商运营支持',
    href: '/ec-service',
    icon: 'lucide:shopping-bag',
    summary: '围绕平台店铺、商品上架、活动执行、数据复盘和客服协同，帮助品牌稳定推进线上业务。',
    points: ['店铺基础运营', '商品资料整理', '活动与促销支持', '数据跟踪与复盘'],
  },
  {
    id: 'logistics',
    title: '仓储物流服务',
    href: '/logistics',
    icon: 'lucide:warehouse',
    summary: '提供入库、检品、库存管理、分拣包装、发货和退换货处理等仓配一体服务。',
    points: ['入库验收', '库存管理', '分拣包装', '订单发货'],
  },
  {
    id: 'trade',
    title: '进出口贸易支持',
    href: '/trade',
    icon: 'lucide:ship',
    summary: '协助企业处理贸易资料、供应商沟通、跨境履约与流程衔接，降低跨境业务协作成本。',
    points: ['贸易资料协同', '供应商沟通', '跨境履约支持', '流程节点跟进'],
  },
  {
    id: 'supply-chain',
    title: '供应链解决方案',
    href: '/business',
    icon: 'lucide:network',
    summary: '结合贸易、仓储、物流与运营经验，为客户建立更稳定、透明、可持续的业务支持体系。',
    points: ['流程梳理', '资源协调', '风险预警', '持续优化'],
  },
] as const;

export const WAREHOUSE_CAPABILITIES = [
  '入库预约与到货核对',
  '外观检品与数量复核',
  '库存分区与批次管理',
  '订单分拣与复核',
  '包装加固与贴标',
  '快递、专线与整车发货',
] as const;
