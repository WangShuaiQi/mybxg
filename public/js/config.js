require.config({
	baseUrl:'/public/assets',
	paths:{
		jquery:'jquery/jquery',
		cookie:'jquery-cookie/jquery.cookie',
		bootstrap:'bootstrap/js/bootstrap.min',
		template:'artTemplate/template-web',
		validate:'validate/jquery-validate',
		form:'jquery-form/jquery.form',
		datepicker:'bootstrap-datepicker/js/bootstrap-datepicker',
		language:'bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min',
		util:'../js/util',
		teacherlist:'../js/teacherlist',
		teacheradd:'../js/teacheradd',
		common:'../js/common',
		login:'../js/login',
		settings:'../js/settings',
	},
	shim:{
		bootstrap:{
			deps:['jquery']
		},
		language:{
			deps:['jquery','datepicker']
		},
		validate:{
			deps:['jquery']
		}
	}
});