for(var i = 0; i < 34; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});

if (bIE) document.getElementById('u28').attachEvent("onmousedown", function(e) { StartDragWidget(e, 'u28'); });
else {
    document.getElementById('u28').addEventListener("mousedown", function(e) { StartDragWidget(e, 'u28'); }, true);
    document.getElementById('u28').addEventListener("touchstart", function(e) { StartDragWidget(e, 'u28'); }, true);
}

widgetIdToDragFunction['u28'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u28',widgetDragInfo.xDelta,0,'none',500);

}

}

if (bIE) document.getElementById('u21').attachEvent("onmousedown", function(e) { StartDragWidget(e, 'u21'); });
else {
    document.getElementById('u21').addEventListener("mousedown", function(e) { StartDragWidget(e, 'u21'); }, true);
    document.getElementById('u21').addEventListener("touchstart", function(e) { StartDragWidget(e, 'u21'); }, true);
}

widgetIdToDragFunction['u21'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u21',widgetDragInfo.xDelta,0,'none',500);

}

}
gv_vAlignTable['u16'] = 'center';u8.tabIndex = 0;

u8.style.cursor = 'pointer';
$axure.eventManager.click('u8', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('目的地详情.html');

}
});
gv_vAlignTable['u8'] = 'top';gv_vAlignTable['u30'] = 'center';document.getElementById('u6_img').tabIndex = 0;

u6.style.cursor = 'pointer';
$axure.eventManager.click('u6', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('目的地详情.html');

}
});
gv_vAlignTable['u32'] = 'center';gv_vAlignTable['u14'] = 'center';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u10'] = 'top';gv_vAlignTable['u3'] = 'center';gv_vAlignTable['u12'] = 'center';gv_vAlignTable['u9'] = 'top';gv_vAlignTable['u27'] = 'center';gv_vAlignTable['u7'] = 'center';gv_vAlignTable['u23'] = 'center';gv_vAlignTable['u25'] = 'center';gv_vAlignTable['u18'] = 'center';gv_vAlignTable['u20'] = 'center';gv_vAlignTable['u5'] = 'center';