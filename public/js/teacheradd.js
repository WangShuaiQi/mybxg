define(['jquery', 'template', 'util', 'datepicker', 'language', 'validate', 'form'], function ($, template, util) {
    var tcId = util.qs("tc_id");
    if (tcId) {
        //编辑讲师
        $.ajax({
            type: 'get',
            url: '/api/teacher/edit',
            data: {tc_id: tcId},
            typeof: 'json',
            success: function (data) {
                console.log(data);
                data.result.operate = '编辑讲师';
                var html = template("teacherTpl", data.result);
                $("#teacherInfo").html(html);
                //处理表单提交
                submitForm('/api/teacher/update');
            }
        })
    } else {
        //添加讲师
        var html = template("teacherTpl", {operate: '添加讲师'});
        $("#teacherInfo").html(html);
        console.log(html);
        submitForm('/api/teacher/add');
    }
    //表单提交方法
    function submitForm(url) {
        $("#teacherForm").validate({
            sendForm: false,
            valid: function () {
                $(this).ajaxSubmit({
                    type: 'post',
                    url: url,
                    datatype: 'json',
                    success: function (data) {
                        if (data.code == 200) {
                            location.href = '/teacher/list';
                        }
                    }
                })
            },
            description: {
                tcName: {
                    required: '用户名不能为空'
                },
                tcPass: {
                    required: '密码不能为空',
                    pattern: '密码必须为六位'
                },
                tcJoinDate: {
                    required: '入职日期不能为空'
                }
            }
        })
    }
    //function submitForm(url){
    //    $("#teacherBtn").click(function(){
    //        $.ajax({
    //            type:'post',
    //            url:url,
    //            data:$("#teacherForm").serialize(),
    //            datatype:'json',
    //            success:function(data){
    //                if(data.code==200){
    //                    location.href='/teacher/list';
    //                }
    //            }
    //        })
    //    })
    //}
});