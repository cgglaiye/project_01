var btn = document.getElementById('btn');
btn.onclick = function() {
    alert('收藏成功');
    this.style.color = 'black';
}

var btn = document.querySelector('.close-btn');
var box = document.querySelector('.box');
btn.onclick = function() {
    box.style.display = 'none';
}

var ad = document.querySelector('.ad');
setTimeout(function() {
    ad.style.display = 'none';

}, 5000);

console.log(location.search);
var params = location.search.substr(1);
console.log(params);
var arr = params.split('=');
console.log(arr);
alert(arr[1] + '欢迎您');