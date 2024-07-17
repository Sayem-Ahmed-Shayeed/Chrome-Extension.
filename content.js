chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "Translate_To_Your_Language",
    title: "Translate Boss : UwU",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "translateToBangla") {
    const selectedText = info.selectionText;
    if (selectedText) {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: translateText,
        args: [selectedText]
      });
    }
  }
});

function translateText(selectedText) {
  const url = `https://translate.google.com/?sl=en&tl=bn&text=${encodeURIComponent(selectedText)}&op=translate`;
  window.open(url, '_blank');
}
