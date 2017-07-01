<template>
  <div id="app">
     <!--<v-header></v-header>
     <v-section></v-section>
     <v-footer></v-footer>-->
     <!--<v-delicious-food></v-delicious-food>-->
    <!--<v-tirp-shop></v-tirp-shop>-->
    <!--<v-tirp-info></v-tirp-info>-->
    <!--<v-strategy></v-strategy>-->
    <!--<v-remark></v-remark>-->
    <v-past></v-past>
  </div>
</template>

<script>
	//-----旅行商城------//
	
	
//	import vHeader from "./components/tripShop/headerComponent-t.vue";
//	import vSection from "./components/tripShop/sectionComponent/sectionComponent-t.vue";
//	import vFooter from "./components/tripShop/mainfooter.vue";
	
	//-----商品详情------//
//	import vHeader from "./components/tripInfo/headerComponent-t.vue";
//	import vSection from "./components/tripInfo/sectionComponent/sectionComponent-t.vue";
//	import vFooter from "./components/tripInfo/footerComponent-t.vue";
	
	//-----过去24小时------//
//	import vHeader from "./components/past24hours/headerComponent-t.vue";
//	import vSection from "./components/past24hours/sectionComponent/sectionComponent-t.vue";
	
	//-----回民街------//
//	import vHeader from "./components/strategy/headerComponent-t.vue";
//	import vSection from "./components/strategy/sectionComponent/sectionComponent-t.vue";
//	import vFooter from "./components/strategy/footerComponent-t.vue";
	
	//-----写点评------//
//	import vHeader from "./components/remark/headerComponent-t.vue";
//	import vSection from "./components/remark/sectionComponent-t.vue";
	
	//-----下一站美食------//
//	import vHeader from "./components/deliciousFood/headerComponent-t.vue";
//	import vSection from "./components/deliciousFood/sectionComponent/sectionComponent-t.vue";

//		import vDeliciousFood from './components/deliciousFood/deliciousFood.vue';
		import vPast from './components/past24hours/past24hours.vue';
			
//			import vRemark from './components/remark/remark.vue';
//			import vStrategy from './components/strategy/strategy.vue';
//import vTirpInfo from './components/tripInfo/tripInfo.vue';
//import vTirpShop from './components/tripShop/tripShop.vue';
	
	
	
	
	export default {
	  components:{
//	  	vHeader,
//	  	vSection,
//	  	vFooter
//	  		vDeliciousFood
				vPast
//				vStrategy
//					vTirpShop
//			vTirpInfo
//vRemark
	  }
	}
</script>

<style>
</style>
