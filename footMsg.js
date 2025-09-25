    var content='';

// 通过类名'banner-info'获取div元素
var bannerDiv = document.querySelector('.banner-info');

// 检查是否找到了该元素
if (bannerDiv) {
    // 查找h1标签下的span元素
    var spanElement = bannerDiv.querySelector('h1 > span');
    
    // 检查是否找到了span元素
    if (spanElement) {
        // 获取span元素的文本内容
         content = spanElement.textContent || spanElement.innerText;
     } else {
        
    }
} else {
   content=document.title;
}
     


		if(window.location.host.includes('whbjxd')){
  
  document.writeln('应用名称：'+content+ '   版本号：v1.21.0'+ '   铂金时代（武汉）网络科技有限公司   <br>Copyright 2019-2022 All Rights Reserved.<img src="../ga.png" alt="公安网监备案" style="vertical-align: middle;margin-left: 3px;width: 16px">  <a href="https://beian.miit.gov.cn" target="_blank">  鄂ICP备2024061281号-2 <a href="../yszc.html" target="_blank">隐私政策</a> | <a href="../yhqx.html" target="_blank">用户权限</a>');

 }

 
 
  // 创建要插入的 HTML 内容
  /**
  
const newHTML = `
<div class="main-footdown-text">
    以上都不需要，使用普通方式下载
    <a class="main-footdown-btn down-data" href="javascript:;" onclick="xiazai()">普通下载</a>
</div>
`;
**/
// 查找页面中是否包含 <div class="copy">
const copyDiv = document.querySelector('div.copy');

if (copyDiv) {
    // 如果找到了 <div class="copy">，则在该元素之前插入新的 HTML 内容
    copyDiv.insertAdjacentHTML('beforebegin', newHTML);
} else {
    // 如果没有找到 <div class="copy">，则将新的 HTML 内容插入到页面的最尾部
    document.body.insertAdjacentHTML('beforeend', newHTML);
}
