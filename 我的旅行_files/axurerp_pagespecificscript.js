for(var i = 0; i < 32; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if (true) {

	SetPanelVisibility('u9','','fade',500);

	MoveWidgetBy('u9', GetNum('0'), GetNum('240'),'easeInCubic',500);

}

});
gv_vAlignTable['u31'] = 'center';gv_vAlignTable['u16'] = 'center';document.getElementById('u17_img').tabIndex = 0;

u17.style.cursor = 'pointer';
$axure.eventManager.click('u17', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('足迹.html');

}
});
gv_vAlignTable['u28'] = 'center';u29.tabIndex = 0;

u29.style.cursor = 'pointer';
$axure.eventManager.click('u29', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('首页-推荐.html');

}
});
gv_vAlignTable['u29'] = 'top';gv_vAlignTable['u8'] = 'center';gv_vAlignTable['u6'] = 'top';gv_vAlignTable['u14'] = 'center';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u26'] = 'center';gv_vAlignTable['u11'] = 'center';gv_vAlignTable['u3'] = 'center';
u12.style.cursor = 'pointer';
$axure.eventManager.click('u12', function(e) {

if (true) {

	SetPanelVisibility('u9','hidden','none',500);

}
});
document.getElementById('u7_img').tabIndex = 0;

u7.style.cursor = 'pointer';
$axure.eventManager.click('u7', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('详情_1.html');

}
});
document.getElementById('u23_img').tabIndex = 0;

u23.style.cursor = 'pointer';
$axure.eventManager.click('u23', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('粉丝.html');

}
});
gv_vAlignTable['u24'] = 'center';gv_vAlignTable['u18'] = 'center';gv_vAlignTable['u20'] = 'center';gv_vAlignTable['u5'] = 'center';gv_vAlignTable['u22'] = 'center';