$(function () {
    $('#datetimepicker1').datetimepicker({
        autoclose: true,
        todayBtn: true,
        todayHighlight: true,
        showMeridian: true,
        pickerPosition: "bottom-left",
        language: 'zh-CN',//中文，需要引用zh-CN.js包
        startView: 0,//月视图
        minView: 0//日期时间选择器所能够提供的最精确的时间选择视图

    });


});

function createProject() {
    var deliver = $('#createProjectFrom').serializeJson();
    console.log(deliver);
    // var docArray = $("#turnFormDoc").bootstrapTable("getData");
    // var docIds = $.map(docArray, function (obj) {
    //     return obj.id;
    // });
    // var revArray = $("#turnFormRec").bootstrapTable("getData");
    // var revIds = $.map(revArray, function (obj) {
    //     return obj.id;
    // });
    // if (docArray.length == 0 && revArray.length == 0) {
    //     alert("请选择要移交的文件");
    //     return;
    // }
    //
    // deliver.docIds = docIds;
    // deliver.revIds = revIds;
    // deliver.assigneeId = assigneeId;
    // var data = {flowFormAssist: deliver, docIds: docIds, revIds: revIds};
    $.axx({
        type: 'post',
        url: '/projects/create',
        data: deliver,
        success: function (json) {
            alert("发起移交成功");
            // $("#turnOver").removeClass("hidden").hide().fadeIn(500).siblings().addClass("hidden");
            // getTurnOverFromMe1();
        }
    })
}
