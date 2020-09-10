import loadScript from '../../utils/loadScript';

export default {
	state: () => ({
		map: null
	}),
	mutations: {
		init(state, ak, el) {
			if (!state.map) {
				const src = `//api.map.baidu.com/api?v=2.0&ak=${ak}`;
				loadScript(src, () => {
					state.map = new BMap.Map(el);
				});
			}
		}
	},
	actions: {},
	getters: {}
};
