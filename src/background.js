function checkForMenuOnPage() {
  const input = document.querySelector("textarea[data-id]");
  input.placeholder = "Loading BlueChat...";
  return document.querySelector(
    ".flex-col.flex-1.transition-opacity.duration-500.overflow-y-auto"
  );
}
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  console.log(tab);
  //I used the line above for debugging
  if (
    (tab.url &&
      tab.url.startsWith("https://chat.openai.com") &&
      tab.status == "complete" &&
      tab.title != tab.url) ||
    tab.url != tab.title
  ) {
    chrome.scripting
      .executeScript({
        target: { tabId: tabId },
        func: checkForMenuOnPage,
      })
      .then(async () => {
        const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
        await sleep(2000).then(() => {
          chrome.tabs.query(
            { active: true, currentWindow: true },
            function (tabs) {
              var currentTabTitle = tabs[0].title;
              console.log(currentTabTitle);
              if (currentTabTitle == tab.title && tab.status == "complete") {
                chrome.scripting.executeScript({
                  target: { tabId: tabId },
                  files: ["src/index.js"],
                });
              }
            }
          );
        });
      })
      .catch((err) => {
        console.warn(
          "BlueChat tried to load but failed 😔...\nPlease reload the page and try again."
        );
      });
  } else if (tab.url == "https://chat.openai.com/") {
    chrome.tabs.update(tabId, {
      url: "https://chat.openai.com/?model=text-davinci-002-render-sha",
    });
  }
});
