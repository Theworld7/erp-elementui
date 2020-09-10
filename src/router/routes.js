import Home from '../views/Home.vue';
import TablePage from '../views/TablePage.vue';
import BaiduMap from '../views/BaiduMap.vue';
import GaodeMap from '../views/GaodeMap.vue';

export default [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/normal',
		component: Home,
		children: [
			{
				path: 'tablePage',
				component: TablePage
			}
		]
	},
	{
		path: '/map',
		component: Home,
		children: [
			{
				path: 'baiduMap',
				component: BaiduMap
			},
			{
				path: 'gaodeMap',
				component: GaodeMap
			}
		]
	}
];
