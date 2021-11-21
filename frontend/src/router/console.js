export default {
  path: '/',
  name: 'console',
  component: () => import('@/layouts/ConsoleLayout'),
  redirect: 'home',
  children: [
    {
      path: 'home',
      name: 'home',
      meta: { title: '首页' },
      component: () => import('@/views/home/Home'),
    },
    {
      path: 'role',
      name: 'role',
      meta: { title: '角色' },
      component: () => import('@/views/role/Role'),
    },
    {
      path: 'subuser',
      name: 'subuser',
      meta: { title: '子账户' },
      component: () => import('@/views/subuser/Subuser'),
    },
    {
      path: 'goods',
      name: 'goods',
      meta: { title: '商品' },
      component: () => import('@/views/goods/Goods'),
    },
    {
      path: 'category',
      name: 'category',
      meta: { title: '商品分类' },
      component: () => import('@/views/category/Category'),
    },
    {
      path: 'warehouse',
      name: 'warehouse',
      meta: { title: '仓库' },
      component: () => import('@/views/warehouse/Warehouse'),
    },
    {
      path: 'supplier',
      name: 'supplier',
      meta: { title: '供应商' },
      component: () => import('@/views/supplier/Supplier'),
    },
    {
      path: 'client',
      name: 'client',
      meta: { title: '客户' },
      component: () => import('@/views/client/Client'),
    },
    {
      path: 'clientCategories',
      name: 'clientCategories',
      meta: { title: '客户分类' },
      component: () => import('@/views/clientCategories/ClientCategories'),
    },
    {
      path: 'account',
      name: 'account',
      meta: { title: '结算账户' },
      component: () => import('@/views/account/Account'),
    },
    {
      path: 'incomeExpenditureItems',
      name: 'incomeExpenditureItems',
      meta: { title: '收支项目' },
      component: () => import('@/views/incomeExpenditureItems/IncomeExpenditureItems'),
    },
    {
      path: 'incomeExpenditure',
      name: 'incomeExpenditure',
      meta: { title: '日常收支' },
      component: () => import('@/views/incomeExpenditure/IncomeExpenditure'),
    },
    {
      path: 'inventory',
      name: 'inventory',
      meta: { title: '库存状况' },
      component: () => import('@/views/inventory/Inventory'),
    },
    {
      path: 'flow',
      name: 'flow',
      meta: { title: '库存流水' },
      component: () => import('@/views/flow/Flow'),
    },
    {
      path: 'purchase_order',
      name: 'purchase_order',
      meta: { title: '采购单' },
      component: () => import('@/views/purchaseOrder/PurchaseOrder'),
    },
    {
      path: 'sales_order',
      name: 'sales_order',
      meta: { title: '销售单' },
      component: () => import('@/views/salesOrder/SalesOrder'),
    },
    {
      path: 'purchase_record',
      name: 'purchase_record',
      meta: { title: '采购记录' },
      component: () => import('@/views/purchaseRecord/PurchaseRecord'),
    },
    {
      path: 'sales_record',
      name: 'sales_record',
      meta: { title: '销售记录' },
      component: () => import('@/views/salesRecord/SalesRecord'),
    },
    {
      path: 'counting_list',
      name: 'counting_list',
      meta: { title: '库存盘点' },
      component: () => import('@/views/countingList/CountingList'),
    },
    {
      path: 'requisition',
      name: 'requisition',
      meta: { title: '调拨单' },
      component: () => import('@/views/requisition/Requisition'),
    },
    {
      path: 'sales_task',
      name: 'sales_task',
      meta: { title: '销售任务' },
      component: () => import('@/views/salesTask/SalesTask'),
    },
    {
      path: 'change_record',
      name: 'change_record',
      meta: { title: '进价变更记录' },
      component: () => import('@/views/changeRecord/ChangeRecord'),
    },
    {
      path: 'purchase_report',
      name: 'purchase_report',
      meta: { title: '采购报表' },
      component: () => import('@/views/purchaseReport/PurchaseReport'),
    },
    {
      path: 'sales_report',
      name: 'sales_report',
      meta: { title: '销售报表' },
      component: () => import('@/views/salesReport/SalesReport'),
    },
    {
      path: 'sales_order_profit',
      name: 'sales_order_profit',
      meta: { title: '利润统计' },
      component: () => import('@/views/salesOrderProfit/SalesOrderProfit'),
    },
    {
      path: 'into_warehouse',
      name: 'into_warehouse',
      meta: { title: '入库' },
      component: () => import('@/views/intoWarehouse/IntoWarehouse'),
    },
    {
      path: 'out_warehouse',
      name: 'out_warehouse',
      meta: { title: '出库' },
      component: () => import('@/views/outWarehouse/OutWarehouse'),
    },
    {
      path: 'purchase_return',
      name: 'purchase_return',
      meta: { title: '采购退货' },
      component: () => import('@/views/purchaseReturn/PurchaseReturn'),
    },
    {
      path: 'sales_return',
      name: 'sales_return',
      meta: { title: '销售退货' },
      component: () => import('@/views/salesReturn/SalesReturn'),
    },
    {
      path: 'financial_report',
      name: 'financial_report',
      meta: { title: '财务报表' },
      component: () => import('@/views/financialReport/FinancialReport'),
    },
    {
      path: 'financial_statistics',
      name: 'financial_statistics',
      meta: { title: '收支统计' },
      component: () => import('@/views/financialStatistics/FinancialStatistics'),
    },
    {
      path: 'sales_statistics',
      name: 'sales_statistics',
      meta: { title: '销售收款统计' },
      component: () => import('@/views/salesStatistics/SalesStatistics'),
    },
    {
      path: 'purchase_statistics',
      name: 'purchase_statistics',
      meta: { title: '采购付款统计' },
      component: () => import('@/views/purchaseStatistics/PurchaseStatistics'),
    },
    {
      path: 'config',
      name: 'config',
      meta: { title: '配置管理' },
      component: () => import('@/views/config/Config'),
    },
  ]
}