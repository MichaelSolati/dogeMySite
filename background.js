chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.executeScript(tab.id, {
    "file": "doge.js"
  }, function () {});
  chrome.tabs.executeScript(tab.id, {
    "file": "textparser.js"
  }, function () {});
});
