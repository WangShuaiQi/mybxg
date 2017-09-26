define(['jquery', 'template'], function ($, template) {
    $.ajax({
        data: 'get',
        url: '/api/teacher/profile',
        datatype: 'json',
        success: function (data) {
            var html = template('settingsTpl', data.result);
            $("#settingsInfo").html(html);
        }
    })
});