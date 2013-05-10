for(var i = 0; i < 31; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if (true) {

	SetPanelVisibility('u7','','fade',500);

	MoveWidgetBy('u7', GetNum('0'), GetNum('240'),'easeInCubic',500);

}

});
gv_vAlignTable['u16'] = 'center';gv_vAlignTable['u29'] = 'center';gv_vAlignTable['u30'] = 'top';document.getElementById('u21_img').tabIndex = 0;

u21.style.cursor = 'pointer';
$axure.eventManager.click('u21', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('粉丝.html');

}
});
gv_vAlignTable['u6'] = 'top';document.getElementById('u15_img').tabIndex = 0;

u15.style.cursor = 'pointer';
$axure.eventManager.click('u15', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('足迹.html');

}
});
gv_vAlignTable['u14'] = 'center';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u26'] = 'center';
u10.style.cursor = 'pointer';
$axure.eventManager.click('u10', function(e) {

if (true) {

	SetPanelVisibility('u7','hidden','none',500);

}
});
gv_vAlignTable['u3'] = 'center';gv_vAlignTable['u12'] = 'center';gv_vAlignTable['u9'] = 'center';u27.tabIndex = 0;

u27.style.cursor = 'pointer';
$axure.eventManager.click('u27', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('首页-推荐.html');

}
});
gv_vAlignTable['u27'] = 'top';gv_vAlignTable['u24'] = 'center';gv_vAlignTable['u18'] = 'center';gv_vAlignTable['u20'] = 'center';gv_vAlignTable['u5'] = 'center';gv_vAlignTable['u22'] = 'center';