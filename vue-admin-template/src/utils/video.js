export function callBackFunctionw() {
	console.log('加载完成');
}

export function errorHandler() {
	console.log('出错')
}
export function bufferHandler(buffer) {
	console.log(buffer);
}
export function allScreenshot1(obj,player1) {
	if (obj == 1) { //点击调用
		// console.log(player1);
		player1.screenshot("video", false, "2-26.jpg");
	} else if (obj != 0 && obj != null) { //监听回调 保存数据
		console.log(obj.base64)
		document.getElementById('img1').setAttribute('src', obj.base64);
	} else { //返回数据为null

	}
}
