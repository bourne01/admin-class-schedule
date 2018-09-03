import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

export default new VueRouter({
  routes: [
	{
		path:'',
		name:'ClassSchedule',
		component:resolve => require(['../components/my-schedule/my-schedule'],resolve),
	},
	{	
		path:'/page-not-found',
		name:'PageNotFound',
		component:resolve => require(['../components/page-not-found'],resolve)
	},	
  ]
})
