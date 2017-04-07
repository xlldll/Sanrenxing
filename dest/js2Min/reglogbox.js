/*! grunt-0.0.1.js 压缩于：2017-04-08 00:07 */

/**
 * Created by LCQ on 2016/8/14.
 */
define(["jquery","jquery.cookie","jquery.form","jquery.validate","bootstrap","bootstrap.datetimepicker"],function(a){//在全局 定义验证码
function b(a){/* 显示验证码图片 */
var b=document.getElementById("myCanvas"),c=b.getContext("2d");c.clearRect(0,0,1e3,1e3),c.font="80px Arial",c.fillText(a,0,100)}function c(){d="";for(var a=new Array(1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f","g","h","j","k","l","m","n","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","J","K","L","M","N","P","Q","R","S","T","U","V","W","X","Y","Z"),e=0;e<4;e++){var f=Math.floor(60*Math.random());d+=a[f]}4!=d.length&&c(),b(d)}/*验证码-英文字母*/
var d;a("#myCanvas").click(function(){c(),a("#J_codetext").focus()});/*$( "#J_codetext" ).blur( function() {
		 validCode();
		 } );*/
/*注册登录按钮*/
//用户和登出
var e=a("#member, #logout"),f=a("#reg, #log");
//返回按钮,清空验证
//登录框验证
//注册框验证
//日期选择
//提示框
return a.cookie("user")?(e.show(),f.hide(),a("#member").html(a.cookie("user"))):(e.hide(),f.show()),a("#reg").click(function(){a("#regBox").modal({show:!0,keyboard:!0}),a("#regForm").resetForm(),c()}),a("#log").click(function(){a("#logBox").modal({show:!0,keyboard:!0}),a("#logForm").resetForm()}),a("#logout").click(function(){alert("linchquiang"),a.removeCookie("user"),console.log(window.location.href),window.location.href="/src/html/"}),a("#returnLog").click(function(){a(this).parents(".modal-footer").prev(".modal-body").find("input").removeClass("invalid valid"),a("#logWarn").children().css("display","none")}),a("#log_close").click(function(){a(this).parents(".modal-header").siblings(".form-horizontal").children(".modal-body").find("input").removeClass("invalid valid"),a("#logWarn").children().css("display","none")}),a("#returnReg").click(function(){a(this).parents(".modal-footer").prev(".modal-body").find("input").removeClass("invalid valid"),a("#regWarn").children().css("display","none")}),a("#reg_close").click(function(){a(this).parents(".modal-header").siblings(".form-horizontal").children(".modal-body").find("input").removeClass("invalid valid"),a("#regWarn").children().css("display","none")}),a("#logForm").validate({rules:{logAccount:{required:!0,minlength:5},logPassword:{required:!0,minlength:6}},messages:{logAccount:{required:"帐号不得为空！",minlength:a.validator.format("帐号不得小于{0}位！")},logPassword:{required:"密码不得为空！",minlength:a.validator.format("密码不得小于{0}位！")}},focusInvalid:!0,errorLabelContainer:"#logWarn",wrapper:"span",submitHandler:function(b){a(b).ajaxSubmit({url:"../php/login.php",type:"POST",beforeSubmit:function(b,c,d){a("#logDiv").popover({html:!0,content:'正在为您登录&nbsp;<img src="../img/loading.gif"/>',placement:"top",delay:{show:50,hide:50},trigger:"manual"}).popover("show"),a("#logBtn").attr("disabled","")},success:function(b,c){b&&(a("#logDiv").popover({html:!0,content:'已经登录成功&nbsp;<img src="../img/success.gif"/>',placement:"top",delay:{show:50,hide:50},trigger:"manual"}),a("#logExp").is(":checked")?a.cookie("user",a("#logAccount").val(),{expires:7}):a.cookie("user",a("#logAccount").val()),setTimeout(function(){a("#logDiv").popover("hide"),a("#logBtn").removeAttr("disabled",""),a("#logBox").modal("hide"),a("#logForm").resetForm(),e.show(),f.hide(),a("#member").html(a.cookie("user"))},2e3))}})},highlight:function(b,c){
//$(element).css({'border':'1px solid rgba(253, 8, 8, 0.29)','background':'url("../img/invalid.png")
// no-repeat right','padding-right':'3px'});
a(b).removeClass("valid"),a(b).addClass("invalid")},unhighlight:function(b,c){
//$(element).css({'border':'1px solid green','background':'url("../img/valid.png") no-repeat
// right','padding-right':'3px'});
a(b).removeClass("invalid"),a(b).addClass("valid")}}),a("#regForm").validate({onkeyup:!1,rules:{userN:{required:!0,minlength:6,remote:{url:"../php/user_equal.php",type:"POST"}},pw:{required:!0,minlength:6},email:{required:!0,email:!0},authCode:{required:function(b){if(d)var c=d.toUpperCase();if(a(b).val())var e=a(b).val().toUpperCase();return e!=c&&(a(b).val(""),a(b).attr("placeholder","验证码错误！"),!0)}}},messages:{userN:{required:"帐号不得为空！",minlength:a.validator.format("帐号不得小于{0}位！"),remote:"帐号被占用！"},pw:{required:"密码不得为空！",minlength:a.validator.format("密码不得小于{0}位！")},email:{required:"邮箱不得为空！",minlength:a.validator.format("邮箱不得小于{0}位！")},authCode:{required:"验证码错误！"}},errorLabelContainer:"#regWarn",wrapper:"span",submitHandler:function(b){a(b).ajaxSubmit({url:"../php/reg.php",type:"POST",beforeSubmit:function(b,c,d){a("#regDiv").popover({html:!0,content:'正在为您注册&nbsp;<img src="../img/loading.gif"/>',placement:"top",delay:{show:50,hide:50},trigger:"manual"}).popover("show"),a("#regBtn").attr("disabled","")},success:function(b,c){b&&(a("#regDiv").popover({html:!0,content:'已经注册成功&nbsp;<img src="../img/success.gif"/>',placement:"top",delay:{show:50,hide:50},trigger:"manual"}),a.cookie("user",a("#account").val()),setTimeout(function(){a("#regBox").modal("hide"),a("#regForm").resetForm(),a("#regBtn").removeAttr("disabled",""),a("#regDiv").popover("hide"),e.show(),f.hide(),a("#member").html(a.cookie("user"))},2e3))}})},highlight:function(b,c){a(b).removeClass("valid"),a(b).addClass("invalid")},unhighlight:function(b,c){a(b).removeClass("invalid"),a(b).addClass("valid")}}),a.fn.datetimepicker.dates["zh-CN"]={days:["星期日","星期一","星期二","星期三","星期四","星期五","星期六","星期日"],daysShort:["周日","周一","周二","周三","周四","周五","周六","周日"],daysMin:["日","一","二","三","四","五","六","日"],months:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],monthsShort:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],today:"今日",suffix:[],meridiem:["上午","下午"],format:"yyyy-mm-dd"},a(".form_date").datetimepicker({language:"zh-CN",weekStart:1,todayBtn:1,autoclose:1,todayHighlight:1,startView:2,minView:2,forceParse:0}),a('[data-toggle="tooltip"]').tooltip({placement:"bottom"}),a});
/*! grunt 最后修改于： 2017-04-08 */