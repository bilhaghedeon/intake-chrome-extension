window.intake = {}
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  window.intake[request.url] = request.count
})

chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.create({url: 'popup.html'})
})
