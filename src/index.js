var bluechat_getPrompts = () => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", chrome.runtime.getURL("src/commands.json"));
    // because this is a chrome extension and we need to import the commands
    // we need to use this type of method to import the commands.json file
    // we can also fetch the file from the extension like later but this method is more easier for me, I don't know why
    xhr.onload = () => resolve(JSON.parse(xhr.responseText));
    // resolves the promise
    xhr.onerror = () => reject(xhr.statusText);
    // rejects the request if there is an error
    xhr.send();
    // sends the request
  });
};
bluechat_getPrompts()
  .then((data) => {
    var commands = data; // sets the commands variable to commands.json

    // importing google fonts icons because we need them for later
    const fontLink = document.createElement("link");
    fontLink.rel = "stylesheet";
    fontLink.href =
      "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200";
    document.head.appendChild(fontLink);

    // Create the change design button element and its child elements
    const button = document.createElement("button");
    button.classList.add(
      "bluechat-only-button",
      "btn-neutral",
      "relative",
      "btn",
      "border-0",
      "md:border"
    );
    button.id = "bluechat-change-design-btn";
    button.style.display = "block";
    const flexContainer = document.createElement("div");
    flexContainer.classList.add(
      "flex",
      "w-full",
      "items-center",
      "justify-center",
      "gap-2"
    );
    button.appendChild(flexContainer);
    const span = document.createElement("span");
    span.classList.add("material-symbols-outlined", "text-white");
    span.textContent = "stylus_note";
    flexContainer.appendChild(span);
    flexContainer.appendChild(document.createTextNode("Change design"));

    // Add the button to the div
    const div = document.querySelector(
      ".h-full.flex.ml-1.md\\:w-full.md\\:m-auto.md\\:mb-2.gap-0.md\\:gap-2.justify-center"
    );
    if (document.getElementById("bluechat-change-design-btn") == null) {
      div.appendChild(button); // add the button to the div if it doesn't already exist
    }

    const ChangeDesignPanelTitle = document.createElement("h2");
    ChangeDesignPanelTitle.innerHTML = `<span style="color: rgb(14 165 233);">BlueChat</span> Themes`;
    ChangeDesignPanelTitle.style.marginTop = "10px";
    ChangeDesignPanelTitle.className = `text-2xl font-semibold text-left`;
    ChangeDesignPanelTitle.style.marginBottom = "5px";

    const ChangeDesignPanelDescription = document.createElement("p");
    ChangeDesignPanelDescription.innerHTML = `Just select the theme you want to use. <br>`;

    //forest-theme
    const ChangeDesignBlueButton = document.createElement("button");
    ChangeDesignBlueButton.style.display = "block";
    ChangeDesignBlueButton.id = "forest-theme";
    ChangeDesignBlueButton.innerHTML = "Forest";
    ChangeDesignBlueButton.style.marginTop = "5px";
    ChangeDesignBlueButton.style.color = "#1c70c4";
    ChangeDesignBlueButton.style.backgroundColor = "#1b2231";
    ChangeDesignBlueButton.style.borderRadius = "50px";
    ChangeDesignBlueButton.style.display = "flex";
    ChangeDesignBlueButton.style.justifyContent = "center";
    ChangeDesignBlueButton.style.alignItems = "center";
    ChangeDesignBlueButton.style.height = "2em";
    ChangeDesignBlueButton.style.width = "4.5em";
    ChangeDesignBlueButton.style.fontSize = "large";
    ChangeDesignBlueButton.style.fontWeight = "600";

    const LowerButtons = document.createElement("div");
    LowerButtons.className = "flex ml-1 gap-2 justify-center";

    const ChangeDesignCloseBtn = document.createElement("button");
    ChangeDesignCloseBtn.id = "change-design-close";
    ChangeDesignCloseBtn.style.display = "block";
    ChangeDesignCloseBtn.innerHTML = "Close";
    ChangeDesignCloseBtn.style.color = "#c41c1c";
    ChangeDesignCloseBtn.style.backgroundColor = "#311b1b";
    ChangeDesignCloseBtn.style.borderRadius = "50px";
    ChangeDesignCloseBtn.style.display = "flex";
    ChangeDesignCloseBtn.style.justifyContent = "center";
    ChangeDesignCloseBtn.style.alignItems = "center";
    ChangeDesignCloseBtn.style.height = "2em";
    ChangeDesignCloseBtn.style.width = "4.5em";
    ChangeDesignCloseBtn.style.fontSize = "large";
    ChangeDesignCloseBtn.style.fontWeight = "600";

    LowerButtons.appendChild(ChangeDesignCloseBtn);

    const ChangeDesignClearBtn = document.createElement("button");
    ChangeDesignClearBtn.id = "clear-theme";
    ChangeDesignClearBtn.style.display = "block";
    ChangeDesignClearBtn.innerHTML = "Clear";
    ChangeDesignClearBtn.style.color = "#1cc443";
    ChangeDesignClearBtn.style.backgroundColor = "#1b3122";
    ChangeDesignClearBtn.style.borderRadius = "50px";
    ChangeDesignClearBtn.style.display = "flex";
    ChangeDesignClearBtn.style.justifyContent = "center";
    ChangeDesignClearBtn.style.alignItems = "center";
    ChangeDesignClearBtn.style.height = "2em";
    ChangeDesignClearBtn.style.width = "4.5em";
    ChangeDesignClearBtn.style.fontSize = "large";
    ChangeDesignClearBtn.style.fontWeight = "600";

    LowerButtons.appendChild(ChangeDesignClearBtn);

    // Create the separator element
    const separator2 = document.createElement("hr");
    separator2.style.marginTop = "5px";
    separator2.style.marginBottom = "10px";

    // Create the list element and add commands to it
    const ChangeDesignPanelColors = document.createElement("div");
    ChangeDesignPanelColors.style.overflowY = "scroll";
    ChangeDesignPanelColors.appendChild(ChangeDesignBlueButton);

    // Create the container element and add all elements to it
    const ChangeDesignContainer = document.createElement("div");
    ChangeDesignContainer.style.position = "relative";
    ChangeDesignContainer.style.top = "calc(-165% - 10px)";
    ChangeDesignContainer.style.left = "0";
    ChangeDesignContainer.style.width = "100%";
    ChangeDesignContainer.style.color = "black";
    ChangeDesignContainer.style.padding = "10px";
    ChangeDesignContainer.style.backgroundColor = "white";
    ChangeDesignContainer.style.border = "1px solid black";
    ChangeDesignContainer.style.borderRadius = "5px";
    ChangeDesignContainer.style.zIndex = "9999";
    ChangeDesignContainer.style.display = "none";
    ChangeDesignContainer.id = "bluechat-change-design-panel";
    ChangeDesignContainer.appendChild(ChangeDesignPanelTitle);
    ChangeDesignContainer.appendChild(ChangeDesignPanelDescription);
    ChangeDesignContainer.appendChild(ChangeDesignPanelColors);
    ChangeDesignContainer.appendChild(separator2);
    ChangeDesignContainer.appendChild(LowerButtons);
    const ChangeDesignPanel = ChangeDesignContainer;
    // The changedesign button
    const ChangeDesignButton = document.querySelector(".bluechat-only-button");
    // Add a click event listener to the button
    ChangeDesignButton.addEventListener("click", function () {
      // Get the element with id "bluechat-change-design-panel"
      var divElement = document.getElementById("bluechat-change-design-panel");
      // Set the display property to "block"
      divElement.style.display = "block";
      ChangeDesignButton.style.display = "none";
      const RegenrateResponseButton = document.querySelector(
        ".btn.relative.btn-neutral.border-0.md\\:border:not(.bluechat-only-button)"
      );
      if (RegenrateResponseButton != null) {
        RegenrateResponseButton.style.display = "none";
      }
    });

    // Add the container element to the DOM
    document
      .querySelector(
        ".h-full.flex.ml-1.md\\:w-full.md\\:m-auto.md\\:mb-2.gap-0.md\\:gap-2.justify-center"
      )
      ?.appendChild(ChangeDesignPanel);

    const ChangeDesignCloseButton = document.getElementById(
      "change-design-close"
    );
    // Add a click event listener to the button
    ChangeDesignCloseButton.addEventListener("click", function () {
      // Get the element with id "bluechat-change-design-panel"
      var divElement = document.getElementById("bluechat-change-design-panel");
      // Set the display property to "block"
      divElement.style.display = "none";
      const ChangeDesignButton = document.querySelector(
        ".bluechat-only-button"
      );
      // Set the display property to "block"
      ChangeDesignButton.style.display = "block";
      const RegenrateResponseButton = document.querySelector(
        ".btn.relative.btn-neutral.border-0.md\\:border:not(.bluechat-only-button)"
      );
      if (RegenrateResponseButton != null) {
        RegenrateResponseButton.style.display = "block";
      }
    });

    //forest theme credit:
    //https://github.com/FeroTheFox/ChatGPT-theme/tree/main
    var themeBlueBtn = document.getElementById("forest-theme");
    // Listen for changes to the checkbox input
    themeBlueBtn.addEventListener("click", function () {
      // Create a new link element
      var link = document.createElement("link");
      link.type = "text/css";
      link.rel = "stylesheet";
      link.id = "forest-theme";
      link.href = chrome.runtime.getURL("src/themes/forest.css");

      // Add the link element to the head section
      document.head.appendChild(link);
    });

    var themeClear = document.getElementById("clear-theme");
    // Listen for changes to the checkbox input
    themeClear.addEventListener("click", function () {
      const ForestTheme = `link[href="chrome-extension://jhdcnaajkklifghiieonemddhifjcfee/src/themes/forest.css"]`;
      const linkEl = document.querySelector(`head > ${ForestTheme}`);
      if (linkEl) {
        // forest theme is loaded, deleting it
        document.head.removeChild(linkEl);
      } else {
        // forest theme is not loaded
      }
    });

    // Find the main text area element
    const input = document.querySelector("textarea[data-id]");

    // Create the title and description elements
    const title = document.createElement("h2");
    title.innerHTML = `<span style="color: rgb(14 165 233);">BlueChat</span> Prompts`;
    title.style.marginTop = "10px";
    title.className = `text-2xl font-semibold text-left`;
    title.style.marginBottom = "5px";

    const description = document.createElement("p");
    description.innerHTML = `Click on a prompt you like, or write it\'s name and hit <span class="rounded-md bg-blue-200 py-0.5 px-1.5 text-xs font-medium uppercase text-gray-800"><code>TAB</code></span>.`;

    // Create the separator element
    const separator = document.createElement("hr");
    separator.style.marginTop = "5px";
    separator.style.marginBottom = "10px";

    // Create the list element and add commands to it
    const commandList = document.createElement("ul");
    commandList.style.overflowY = "scroll";
    commandList.style.height = "85px";
    commandList.style.maxHeight = "200px";
    Object.keys(commands).forEach((prompt) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `<strong>${prompt}</strong>: ${commands[prompt].description}`;
      commandList.appendChild(listItem);
    });

    // Create the container element and add all elements to it
    const container = document.createElement("div");
    container.style.position = "relative";
    container.style.top = "calc(-165% - 10px)";
    container.style.left = "0";
    container.style.width = "100%";
    container.style.color = "black";
    container.style.padding = "10px";
    container.id = "bluechat-prompts";
    container.style.backgroundColor = "white";
    container.style.border = "1px solid black";
    container.style.borderRadius = "5px";
    container.style.zIndex = "9999";
    container.style.display = "none";
    container.appendChild(title);
    container.appendChild(description);
    container.appendChild(separator);
    container.appendChild(commandList);

    const suggestionBox = container;

    if (document.getElementById("bluechat-prompts") == null) {
      // Add the container element to the DOM if does not exist yet
      document
        .querySelector(
          ".h-full.flex.ml-1.md\\:w-full.md\\:m-auto.md\\:mb-2.gap-0.md\\:gap-2.justify-center"
        )
        ?.appendChild(container);
    }

    // Get the div element
    const divElement = document.querySelector(
      ".px-3.pt-2.pb-3.text-center.text-xs.text-gray-600"
    );

    // Create a new span element
    const newSpanElement = document.createElement("span");

    // Add content to the span element
    newSpanElement.innerHTML = `<br> BlueChat v${
      chrome.runtime.getManifest().version
    } - Made by <a href="https://itsron.space" target="_blank" class="underline">Ron Nuss</a> with 🧆.`;
    newSpanElement.id = "bluechat-footer";

    if (document.getElementById("bluechat-footer") == null) {
      // Append the new span element to the footer of the page if dont exist yet
      divElement.appendChild(newSpanElement);
    }

    // Sets the input placeholder
    input.placeholder =
      'Type "/" to see available prompts. Use "Alt+S" to include web results or "Alt+P" to generate a prompt.';
    // Update the input event listener to show the container element instead of the suggestionBox element
    input.addEventListener("input", function () {
      // Get the current text in the input
      const text = input.value;

      // Check if the user is typing a command (starting with a slash)
      if (text.startsWith("/")) {
        // Get the command name (everything after the slash) for later (maybe...?)
        const command = text.split(" ")[0].substr(1);
        suggestionBox.style.display = "block";
        const RegenrateResponseButton = document.querySelector(
          ".btn.relative.btn-neutral.border-0.md\\:border:not(.bluechat-only-button)"
        );
        if (RegenrateResponseButton != null) {
          const ChangeDesignButton = document.querySelector(
            ".bluechat-only-button"
          );
          ChangeDesignButton.style.display = "none";
          RegenrateResponseButton.style.display = "none";
        } else {
          const ChangeDesignButton = document.querySelector(
            ".bluechat-only-button"
          );
          ChangeDesignButton.style.display = "none";
        }
      } else {
        suggestionBox.style.display = "none";
        suggestionBox.innerHTML = "";
        const RegenrateResponseButton = document.querySelector(
          ".btn.relative.btn-neutral.border-0.md\\:border:not(.bluechat-only-button)"
        );
        if (RegenrateResponseButton != null) {
          const ChangeDesignButton = document.querySelector(
            ".bluechat-only-button"
          );
          ChangeDesignButton.style.display = "block";
          RegenrateResponseButton.style.display = "block";
        } else {
          const ChangeDesignButton = document.querySelector(
            ".bluechat-only-button"
          );
          ChangeDesignButton.style.display = "block";
        }
        suggestionBox.appendChild(title);
        suggestionBox.appendChild(description);
        suggestionBox.appendChild(separator);
        suggestionBox.appendChild(commandList);
      }
    });

    const lis = document.querySelectorAll("li");
    lis.forEach((li) => {
      li.addEventListener("mouseover", () => {
        li.style.cursor = "pointer";
      });
      li.addEventListener("mouseout", () => {
        li.style.cursor = "default";
      });
      li.addEventListener("click", () => {
        const strongText = li.querySelector("strong").textContent;
        // because the text in the <strong> is the prompt id, we need it
        if (commands[strongText] != undefined) {
          // gets the value of the prompt, based on its id
          input.value = commands[strongText].prompt;
          // we do not need to see the suggestion box anymore
          suggestionBox.style.display = "none";
          const promptLines = input.value.split("\n").length;
          // sets the height of the text box to match the number of lines of the prompt
          input.style.height = `${24 * promptLines}px`;
        }
      });
    });

    input.addEventListener("keydown", function (event) {
      if (event.altKey && event.key === "p" && input.value != "") {
        event.preventDefault();
        const query = input.value;
        const url = `https://merve-chatgpt-prompt-generator.hf.space/run/predict`;
        const options = {
          method: "POST",
          body: JSON.stringify({
            data: [query],
          }),
          headers: { "Content-Type": "application/json" },
        };
        document.body.style.cursor = "wait";
        fetch(url, options)
          .then((response) => response.json())
          .then((data) => {
            document.body.style.cursor = "default";
            if (input.value == query) input.value = data.data[0];
            if (data.data[0].length > 40) {
              input.style.height = "48px";
            } else {
              input.style.height = "24px";
            }
          })
          .catch((error) => {
            console.error(error);
          });
      }
      if (event.altKey && event.keyCode === 83 && input.value != "") {
        event.preventDefault();
        const query = input.value;
        const url = `https://api.duckduckgo.com/?q=${query}&format=json&pretty=1&no_html=1&skip_disambig=1`;
        const options = {
          method: "GET",
        };
        fetch(url, options)
          .then((response) => response.json())
          .then((data) => {
            if (data.RelatedTopics.length == 0) {
              window.alert(
                "BlueChat - No results found, please change your prompt and try again."
              );
            } else {
              const results = data.RelatedTopics.slice(0, 3).map(
                (topic) => topic.Text
              );
              const finalResults = `"${results[0]}".\n"${results[1]}".\n"${results[2]}".\nBased on the above web results, answer the following question: ${query}`;
              input.value = finalResults;
              const button = document.querySelector(
                ".absolute.p-1.rounded-md.text-gray-500.bottom-1\\.5"
              );
              button.click();
            }
          })
          .catch((error) => {
            console.error(error);
            window.alert(
              "An error occurred, please try again later. If this error keep on occurring, please open an issue on the Github."
            );
          });
      }
      if (event.code === "Tab" && suggestionBox.style.display === "block") {
        event.preventDefault(); // Prevent the default Tab behavior (focus switch)
        const suggestions = suggestionBox.querySelectorAll("span");
        if (suggestions.length > 0) {
          // get the command name (everything after the slash)
          const command = input.value.split(" ")[0].substr(1);
          if (commands[command] == undefined) {
            // lets just ignore this to not cause errors in the console
          } else {
            // set the value of the input element to the prompt from the commands object
            const prompt = commands[command].prompt;
            const newText = prompt;
            input.value = newText;
            const promptLines = newText.split("\n").length;
            // we want to show the user the lines of the text box
            input.style.height = `${24 * promptLines}px`;
            // sets the height of the text box to match the number of lines of the prompt
            suggestionBox.style.display = "none";
            // hides the suggestion box
          }
        }
      }
    });
  })
  .catch((error) => console.error(error));
