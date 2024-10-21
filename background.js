chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'openVideo') {
      const videoUrl = new URL(request.url);
      videoUrl.searchParams.set('t', Math.floor(request.time));
      
      chrome.tabs.create({ url: videoUrl.toString() });
    }
  });
  