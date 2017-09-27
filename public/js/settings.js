define(['jquery', 'template', 'ckeditor', 'uploadify', 'region','datepicker', 'language'], function ($, template, CKEDITOR) {
    $.ajax({
        data: 'get',
        url: '/api/teacher/profile',
        datatype: 'json',
        success: function (data) {
            var html = template('settingsTpl', data.result);
            $("#settingsInfo").html(html)

            $("#upfile").uploadify({
                width: 120,
                height: 120,
                buttonText: "",
                itemTemplate: '<span></span>',
                swf: '/public/assets/uploadify/uploadify.swf',
                uploader: '/api/uploader/avatar',
                fileObjName: 'tc_avatar',
                onUploadSuccess: function (a, b) {
                    var obj = JSON.parse(b);
                    $('.preview img').attr('src', obj.result.path);
                }
            })

            $('#pcd').region({
                url: '/public/assets/jquery-region/region.json',
            })

            CKEDITOR.replace('editor',{
                toolbarGroups : [
                    { name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
                    { name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] }
                ]
            });
        }
    })
});
