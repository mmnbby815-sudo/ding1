
function getQueryVariable(variable) {
	var query = window.location.search.substring(1);
	var vars = query.split("&");
	//for (var i=0;i<vars.length;i++) {
	for (var i = vars.length - 1; i >= 0; i--) {	
	  var pair = vars[i].split("=");
	  if(pair[0] == variable){return pair[1];}
	}
	return(0);
	
}
	
	
	var mediaVid = getQueryVariable('bd_vid'); 
	var keywordId = getQueryVariable('wordId'); 

	var mediaVid1 = getQueryVariable('qhclickid'); 
	var userid = getQueryVariable('userid'); 
	var logidUrl = window.location.href.split("?")[0]
	var pcUrl = window.location.href
	

function xiazai(downLoadUrl,productId) {

		window.open(downLoadUrl+mediaVid,'_self')
	
			
}



  

function semLoadingClickCollect(downLoadUrl) {
	// 将 URL 分解为各个部分
var urlParts = new URL(downLoadUrl);

// 构建新的 URL，替换路径为 /downloader/soft/getUrl，保持参数不变
var newUrl = window.location.origin + "/downloader/soft/getUrl" + urlParts.search;

console.log("替换前 URL:", downLoadUrl);
console.log("替换后 URL:", newUrl);

	
  newUrl=newUrl+mediaVid1;
const xhr = new XMLHttpRequest();
xhr.open('GET', newUrl, true);
xhr.onreadystatechange = function() {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
     
  
    
       console.log('载链接：', data.url);
      // 在这里执行下载操作，可以使用浏览器的下载功能或者其他方法
      window.location.href=data.url;
    } else {
      console.error('请求错误：', xhr.statusText);
    }
  }
};
xhr.send();
	
	
	 
	
	

	
		var browser = getBrowser();
		var cookie = getCookie('semClickCookie')
		
		 
			
			$.ajax({
          type:"GET",
          url:"https://click.masyunrui.com/yunrui/loadingCollect", 
          dataType:"jsonp",  
          jsonp:"callback",  
		  data : {keywordId:keywordId,browser:browser,type:2},
          success:function(data){              
          },
        });	
		if (userid == 3477303992) {	
			download2(downLoadUrl,10016)
		} else {
			download2(downLoadUrl,10015);
		}
		 
		 	
}

// quark
function semLoadingClickCollectOcpc1(downLoadUrl) {
// 直接使用原始下载URL
  window.location.href = downLoadUrl;

  
}


function semLoadingClickCollectOcpc(downLoadUrl) {
		// 将 URL 分解为各个部分
var urlParts = new URL(downLoadUrl);

// 构建新的 URL，替换路径为 /downloader/soft/getUrl，保持参数不变
var newUrl = window.location.origin + "/downloader/soft/getUrl" + urlParts.search;

console.log("替换前 URL:", downLoadUrl);
console.log("替换后 URL:", newUrl);

	
  newUrl=newUrl+mediaVid1;
const xhr = new XMLHttpRequest();
xhr.open('GET', newUrl, true);
xhr.onreadystatechange = function() {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      console.log('下载链接：', data.url);
      // 在这里执行下载操作，可以使用浏览器的下载功能或者其他方法
      window.location.href=data.url;
    } else {
      console.error('请求错误：', xhr.statusText);
    }
  }
};
xhr.send();
	
	
	
	
	
	

		
		var browser = getBrowser();
		var cookie = getCookie('semClickCookie')
		
		if(cookie != 2){
			
			$.ajax({
          type:"GET",
          url:"https://click.masyunrui.com/yunrui/loadingCollect", 
          dataType:"jsonp",  
          jsonp:"callback",  
		  data : {keywordId:keywordId,browser:browser,type:2},
          success:function(data){              
          },
        });	
			if (userid == 3477303992) {	
			download2(downLoadUrl,10016)
 		} else {
 			download2(downLoadUrl,10015);
		}
	
	
		 
		document.cookie="semClickCookie=2;expires=Fri, 31 Dec 9999 23:59:59 GMT";
		}	
}







function download2(downLoadUrl,productId) {
		var cookie = getCookie('semClickCookie')
		if(cookie != 2){			
		$.ajax({
          type:"GET",
          url:"https://click.masyunrui.com/ocpc/dataCallBack", 
          dataType:"jsonp",  
          jsonp:"callback",  
		  data : {mediaVid:mediaVid1,logidUrl:logidUrl,types:1,source:'360',productId:productId,pcUrl:pcUrl,tagId:keywordId},
          success:function(data){
		  },
			
        });	
		document.cookie="semClickCookie=2;expires=Fri, 31 Dec 9999 23:59:59 GMT";
		}	
}





function getCookie(name) {
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg)){
        return (arr[2]);
    } else {
        return null;
    }
}



	 function showNumRquest(){
		var keywordId = semLoadingClickCollect1();
		var cookie = getCookie('semShowCookie')
			if(cookie != 1){
			$.ajax({
			type:"GET",
			url:"http://sem.masyunrui.com/yunrui/loadingCollect", //访问的链接
			dataType:"jsonp",  //数据格式设置为jsonp
			jsonp:"callback",  //Jquery生成验证参数的名称
			data : {keywordId:keywordId,browser:getBrowser(),type:1},
			success:function(data){  //成功的回调函数               
			},
			});
			document.cookie="semShowCookie=1;expires=Fri, 31 Dec 9999 23:59:59 GMT";
	　　	}
			
		}
  　　　



function getBrowser() {
    var u = navigator.userAgent;
 
    var bws = [{
        name: 'sgssapp',
        it: /sogousearch/i.test(u)
    }, {
        name: 'wechat',
        it: /MicroMessenger/i.test(u)
    }, {
        name: 'weibo',
        it: !!u.match(/Weibo/i)
    }, {
        name: 'uc',
        it: !!u.match(/UCBrowser/i) || u.indexOf(' UBrowser') > -1
    }, {
        name: 'sogou',
        it: u.indexOf('MetaSr') > -1 || u.indexOf('Sogou') > -1
    }, {
        name: 'xiaomi',
        it: u.indexOf('MiuiBrowser') > -1
    }, {
        name: 'baidu',
        it: u.indexOf('Baidu') > -1 || u.indexOf('BIDUBrowser') > -1
    }, {
        name: '360',
        it: u.indexOf('360EE') > -1 || u.indexOf('360SE') > -1
    }, {
        name: '2345',
        it: u.indexOf('2345Explorer') > -1
    }, {
        name: 'edge',
        it: u.indexOf('Edge') > -1
    }, {
        name: 'ie11',
        it: u.indexOf('Trident') > -1 && u.indexOf('rv:11.0') > -1
    }, {
        name: 'ie',
        it: u.indexOf('compatible') > -1 && u.indexOf('MSIE') > -1
    }, {
        name: 'firefox',
        it: u.indexOf('Firefox') > -1
    }, {
        name: 'safari',
        it: u.indexOf('Safari') > -1 && u.indexOf('Chrome') === -1
    }, {
        name: 'qqbrowser',
        it: u.indexOf('MQQBrowser') > -1 && u.indexOf(' QQ') === -1
    }, {
        name: 'qq',
        it: u.indexOf('QQ') > -1
    }, {
        name: 'chrome',
        it: u.indexOf('Chrome') > -1 || u.indexOf('CriOS') > -1
    }, {
        name: 'opera',
        it: u.indexOf('Opera') > -1 || u.indexOf('OPR') > -1
    }];
 
    for (var i = 0; i < bws.length; i++) {
        if (bws[i].it) {
            return bws[i].name;
        }
    }
 
    return 'other';
}
 
// 系统区分
function getOS() {
    var u = navigator.userAgent;
    if (!!u.match(/compatible/i) || u.match(/Windows/i)) {
        return 'windows';
    } else if (!!u.match(/Macintosh/i) || u.match(/MacIntel/i)) {
        return 'macOS';
    } else if (!!u.match(/iphone/i) || u.match(/Ipad/i)) {
        return 'ios';
    } else if (!!u.match(/android/i)) {
        return 'android';
    } else {
        return 'other';
    }
}

	
 