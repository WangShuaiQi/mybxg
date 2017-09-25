define(['jquery','template','bootstrap'],function($,template){
    //讲师数据获取
    $.ajax({
        type:'get',
        url:'/api/teacher',
        dataType:'json',
        success:function(data){
            var html = template('teacherTpl',{list:data.result});
            $('#teacherInfo').html(html);
            //启用注销
            $('.eord').click(function(){
                var td = $(this).closest('td');
                var tcId = td.attr('data-tcId');
                var tcSt = td.attr('data-status');
                var that = this;

                $.ajax({
                    type:'post',
                    url:'/api/teacher/handle',
                    data:{tc_id:tcId,tc_status:tcSt},
                    dataType:'json',
                    success:function(data){
                        console.log(data);
                        if(data.code==200){
                            td.attr('data-status',data.result.tc_status);
                            console.log(td.attr('data-status'))
                            if(data.result.tc_status==0){
                                $(that).text("注销");
                            }else{
                                $(that).text("启用");
                            }
                        }
                    }
                })
            });
            //查看讲师
            $('.look').click(function(){
                var td = $(this).closest('td');
                var tcId = td.attr('data-tcId');

                $.ajax({
                    type:'get',
                    url:'/api/teacher/view',
                    data:{tc_id:tcId},
                    typeof:'json',
                    success:function(data){
                        var html = template('modalTpl',data.result);
                        console.log(html);
                        $("#teacherIntroduce").html(html);

                        $(".look").click(function(){
                            $("#teacherModal").modal();
                        })
                    }
                })
            });
        }
    })
});