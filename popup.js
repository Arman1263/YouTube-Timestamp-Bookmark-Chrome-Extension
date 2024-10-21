document.addEventListener('DOMContentLoaded', function() {
    const bookmarkButton = document.getElementById('bookmark');
    const bookmarkList = document.getElementById('bookmark-list');
  
    // Load bookmarks from storage
    chrome.storage.sync.get('bookmarks', function(data) {
      const bookmarks = data.bookmarks || [];
      bookmarks.forEach(bookmark => addBookmarkToList(bookmark));
    });
  
    // Add current timestamp when button is clicked
    bookmarkButton.addEventListener('click', function() {
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        const tab = tabs[0];
        const url = new URL(tab.url);
  
        if (url.hostname === 'www.youtube.com' && url.pathname === '/watch') {
          chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: getCurrentTime
          }, function(results) {
            const currentTime = results[0].result;
            const bookmark = { title: tab.title, url: tab.url, time: currentTime };
            saveBookmark(bookmark);
            addBookmarkToList(bookmark);
          });
        } else {
          alert("Please use this extension on a YouTube video page.");
        }
      });
    });
  
    // Helper function to get current time from YouTube video
    function getCurrentTime() {
      return document.querySelector('video').currentTime;
    }
  
    // Save the bookmark to Chrome storage
    function saveBookmark(bookmark) {
      chrome.storage.sync.get('bookmarks', function(data) {
        const bookmarks = data.bookmarks || [];
        bookmarks.push(bookmark);
        chrome.storage.sync.set({ bookmarks: bookmarks });
      });
    }
  
    // Add bookmark to the UI list
    function addBookmarkToList(bookmark) {
      const listItem = document.createElement('li');
      const link = document.createElement('a');
      link.href = '#';
      link.textContent = `${bookmark.title} - ${formatTime(bookmark.time)}`;
      link.addEventListener('click', function() {
        chrome.runtime.sendMessage({ action: 'openVideo', url: bookmark.url, time: bookmark.time });
      });
  
      listItem.appendChild(link);
      bookmarkList.appendChild(listItem);
    }
  
    // Format time to HH:MM:SS
    function formatTime(seconds) {
      const date = new Date(0);
      date.setSeconds(seconds);
      return date.toISOString().substr(11, 8);
    }
  });
  