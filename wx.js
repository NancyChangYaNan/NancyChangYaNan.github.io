
function prepareWx() {
	//微信js api准备
	$.get(
			"http://wx.yunzhu.me/api/js.php?action=sign&wid=weishangbaidu&url=" + location.href,
			function (data) {
				var signObject = eval("(" + data + ")");
				wx.config({
					debug: false,
					appId: signObject.appId,
					timestamp: signObject.timestamp,
					nonceStr: signObject.nonceStr,
					signature: signObject.signature,
					jsApiList: [
						"onMenuShareAppMessage",
						"onMenuShareTimeline"
					]
				});
			}
	);
};
 
prepareWx();
/*http://dyr.youpengchina.com/qundaohang/*/
imgurl = 'http://wx.yunzhu.me/custdev/guobin/images/logo.png';
php = document.getElementById('wxjs').getAttribute('data');
from_openid = document.getElementById('to_openid').value;
/*url = 'http://dyr.youpengchina.com/qundaohang/weirednet/' + php + '?from_openid=' + from_openid; */
url='http://wx.yunzhu.me/custdev/guobin/index.html';

//微信分享
wx.ready(function () {
	wx.onMenuShareAppMessage({
		title: '',
		desc: '',
		link: url,
		imgUrl: imgurl, // 分享图标
		success: function () {
			//confirmShared();
		},
		cancel: function () {
			// 用户取消分享后执行的回调函数
		}
	});

	wx.onMenuShareTimeline({
		title: '',
		link: url,
		imgUrl: imgurl, //分享图标
		success: function () {
			//confirmShared();
		},
		cancel: function () {
			// 用户取消分享后执行的回调函数
		}
	});
});
