import Home from '../views/Home.vue';
import MyTodo from '../views/MyTodo.vue';

export default [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/mission',
		component: Home,
		children: [
			{
				path: 'myTodo',
				component: MyTodo
			}
		]
	}
];
