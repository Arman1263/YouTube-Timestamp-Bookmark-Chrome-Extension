# YouTube Timestamp Bookmark Chrome Extension
Overview
The YouTube Timestamp Bookmark Chrome extension allows users to effortlessly save specific timestamps in YouTube videos as bookmarks. With a click of a button, users can save the current timestamp of the video they're watching. Later, clicking on any saved timestamp will open the YouTube video and automatically jump to the exact saved time.

# Installation
1. Clone the repository:
git clone [Repo](https://github.com/Arman1263/YouTube-Timestamp-Bookmark-Chrome-Extension)

2. Load the extension in Chrome:
Open Chrome and navigate to chrome://extensions/.
Enable Developer Mode by toggling the switch in the top right corner.
Click Load unpacked and select the folder where the cloned repository is located.
The extension will now appear in your list of installed extensions.

# How to Use
1. Open YouTube and play a video.
2. Click the extension icon in the Chrome toolbar.
3. In the popup, click the Bookmark Current Timestamp button to save the current timestamp.
4. The saved timestamps will appear as a list below the button.
5. Click on any timestamp in the list to open the YouTube video and jump directly to that time.

# Folder Structure:
youtube-timestamp-bookmark/
│
├── icons/                     # Contains icons for the extension
│   └── icon.png
├── manifest.json               # Chrome extension configuration
├── popup.html                  # Popup UI for the extension
├── popup.js                    # Script to handle timestamp bookmarking
├── background.js               # Background script to manage interaction with YouTube tabs
├── styles.css                  # Styling for the popup UI
└── README.md                   # This file

# Technologies Used:
1. HTML/CSS/JavaScript: The core of the extension's UI and functionality.
2. Chrome Extensions API: For interacting with browser tabs, YouTube, and storage.
