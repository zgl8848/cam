import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
// import Layout from '../views/layout/Layout.1'
import Layout from '../views/layout/Layout.1'
/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if false, the item will hidden in breadcrumb(default is true)
  }
**/
export const constantRouterMap = [
	{ path: '/login', component: () => import('@/views/login/index'), hidden: true },
	{ path: '/404', component: () => import('@/views/404'), hidden: true },

	{
		path: '/',
		component: Layout,
		redirect: '/situation/index',
		name: 'Situation',
		hidden: true,
		children: [{
			path: 'index',
			name: 'situation',
			component: () => import('@/views/situation/index'),
			meta: { title: 'Situation', icon: '' }
		}]
	},
	{
		path: '/situation',
		component: Layout,
		redirect: '/situation/index',
		children: [
			{
				path: 'index',
				name: 'situation',
				component: () => import('@/views/situation/index'),
				meta: { title: 'Situation', icon: '' }
			}
		]
	},
	{
		path: '/management',
		component: Layout,
		redirect: '/management/index',
		children: [
			{
				path: 'index',
				name: 'management',
				component: () => import('@/views/management/index'),
				meta: { title: 'Management', icon: '' }
			}
		]
	},


	{
		path: '/account',
		component: Layout,
		redirect: '/account/index',
		name: 'Account',
		hidden: true,
		children: [{
			path: 'index',
			name: 'account',
			component: () => import('@/views/account/index'),
			meta: { title: 'Account', icon: '' }
		}]
	},




	{
		path: '/emergency',
		component: Layout,
		redirect: '/emergency/index',
		children: [
			{
				path: 'index',
				name: 'emergency',
				component: () => import('@/views/emergency/index'),
				meta: { title: 'Emergency', icon: '' }
			}
		]
	},
	{
		path: '/survey',
		component: Layout,
		redirect: '/survey/index',
		children: [
			{
				path: 'index',
				name: 'survey',
				component: () => import('@/views/survey/index'),
				meta: { title: 'Survey', icon: '' }
			}
		]
	},
	{
		path: '/electricity',
		component: Layout,
		redirect: '/electricity/index',
		children: [
			{
				path: 'index',
				name: 'electricity',
				component: () => import('@/views/electricity/index'),
				meta: { title: 'Electricity', icon: '' }
			}
		]
	},
	{
		path: '/food',
		component: Layout,
		redirect: '/food/index',
		children: [
			{
				path: 'index',
				name: 'food',
				component: () => import('@/views/food/index'),
				meta: { title: 'Food', icon: '' }
			}
		]
	},
	{
		path: '/alarmmon',
		component: Layout,
		redirect: '/alarmmon/index',
		children: [
			{
				path: 'index',
				name: 'alarmmon',
				component: () => import('@/views/alarmmon/index'),
				meta: { title: 'alarmmon', icon: '' }
			}
		]
	},

	{
		path: '/atlas',
		component: Layout,
		children: [
			{
				path: 'index',
				name: 'Atlas',
				component: () => import('@/views/atlas/index'),
				meta: { title: 'Atlas', icon: '' }
			}
		]
	},

	{ path: '*', redirect: '/404', hidden: true }
]

export default new Router({
	// mode: 'history', //后端支持可开
	scrollBehavior: () => ({ y: 0 }),
	routes: constantRouterMap
})
