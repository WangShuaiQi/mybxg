define(['jquery','template','cookie'],function($,template){

	// NProgress.start();

	// NProgress.done();

	$('.navs ul').prev('a').on('click', function () {
		$(this).next().slideToggle();
	});

	//实现退出功能
	$("#logoutBtn").click(function() {
		$.ajax({
			url: '/api/logout',
			type: 'post',
			dataType: 'json',
			success: function(data){
				if(data.code==200){
					console.log(data);
					location.href='/main/login';
				}
			}
		})
	});
	//检测用户登录
	var flag = $.cookie('PHPSESSID');
	if(!flag&& location.pathname !='/main/login'){
		location.href='/main/login';
	}
	var loginInfo=$.cookie('loginInfo');
	loginInfo=loginInfo && JSON.parse(loginInfo);
	//设置头像
	// $(".aside .profile img").attr('src',loginInfo.tc_avatar);
	// $(".aside .profile h4").html(loginInfo.tc_name);
	var tpl = '<div class="avatar img-circle"><img src="{{tc_avatar}}"></div><h4>{{tc_name}}</h4>'
    var html =template.render(tpl,loginInfo);
    $('.aside .profile').html(html);
});