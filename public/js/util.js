define(['jquery'],function($){
    return {
        qs : function(key){
            //获取URl中指定参数值
            var param = location.search.substr(1);
            var result = "";
            if(param){
                var ps = param.split("&");
                $.each(ps,function(index,item){
                    var kv =item.split('=');
                    if(kv[0]==key){
                        result=kv[1];
                        return false;
                    }
                });
            }
            return result;
        }
    }
})