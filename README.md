# bluechat
A Chrome extension that boosts your ChatGPT conversation!

## Features
- [x] Prompts library
- [x] Website themes
- [x] Include web results (using <kbd>Alt</kbd> + <kbd>S</kbd> on input)
- [x] AI prompt maker by keywords. (using <kbd>Alt</kbd> + <kbd>P</kbd> on input. It will replace the current input to the generated prompt in ~30-45 seconds.)

## Installation (English)
- Download the source code, unzip it, and move the folder inside to another location.
- In your Chrome, go to `chrome://extensions`.
- Enable the "Developer mode" at the top right of the screen.
- Click on "Load Unpacked" and select the moved folder.
- That's it!

## Installation (Hebrew)
- תורידו את התיקייה של הקוד, תחלצו אותה ותקחו את התיקייה שבפנים ושימו אותה במקום אחר.
- בתוך הכרום, תיכנסו לכתובת `chrome://extensions`.
- תפעילו את האפשרות "Developer mode" שמופיעה בצד ימין למעלה.
- תלחצו על הכפתור "Load Unpacked" ותבחרו את התיקייה שהעברתם ממקודם.
- !וזה הכל

### Usage
- Pre-built prompts:
  - Go to the main ChatGPT input.
  - Enter the <kbd>/</kbd> key in the input.
  - A box should appear above the input, where you can see the available prompts.
  - Scroll in the list and click on a prompt you would like to use or write its ID (the bold text before the description) and hit <kbd>TAB</kbd>.
  - More prompts are coming soon in the next updates. Currently, there are some of the tops used one's there (including the DAN prompt).
- AI Prompts generator:
  - Go to the main ChatGPT input.
  - Write the keyword(s) you want to use to generate a prompt from.
  - After you done writing your keyword(s), just click <kbd>Alt</kbd> + <kbd>P</kbd> to generate the prompt. It should take ~30-45 seconds to generate your prompt.
  - When the prompt is completed generating and ready, it will replace the current input with the generated prompt.
- Include web results:
   -  Go to the main ChatGPT input.
   -  Write the question you want to ask ChatGPT.
   - In your keyboard, hit <kbd>Alt</kbd> + <kbd>S</kbd>. This will search using the Instant Search DuckDuckGo API for an answer to the question you asked and send 3 of the results to ChatGPT with your question.
   - Please wait ~10-25 seconds to let it work. Please note that the search itself may result in zero results because sometimes you need to rewrite your question to get answers.
   - ChatGPT will answer your question, based on the web results it found (if there are any).
- Themes:
   -  To use the themes, you can just click on the button above the input that says "Change Design". It will pop up with a box above the current input.
   -  Click on a button to apply the theme. (The current only theme is "Forest", which I found [on Github](https://github.com/FeroTheFox/ChatGPT-theme/blob/main/index.css).)
   - To clear the current theme simply click on the green "Clear" button in that box.
   - To close the theme menu, just click on the red "Close" button in that box.
   - More themes are coming soon, and documentation (for developers) of how to create their theme.

## What is the search engine that is being used in the extension?
The extension uses the DuckDuckGo Instant Answer API.

## License?
Definitely. I believe that as a developer, if I worked hard on a project I expect other people to respect me and give me some credit if my code is being used. The BlueChat project is licensed under the [MIT license](https://github.com/itsrn/bluechat/blob/main/LICENSE).

Please note that the BlueChat extension uses the [HuggingFace space - ChatGPT-prompt-generator](https://huggingface.co/spaces/merve/ChatGPT-prompt-generator) to generate the prompts, so the credit to that feature is for [merve](https://huggingface.co/merve), who created this space. The logo of the extension was taken from [ChatGPT's Wikipedia](https://en.m.wikipedia.org/wiki/File:ChatGPT_logo.svg) (with a little color changing).
