import React, { useState } from 'react';
import { marked } from 'marked';
import './App.css'; // Correctly imports the component's stylesheet

// Configure the 'marked' library
marked.setOptions({
  breaks: true, // Render carriage returns as <br>
  gfm: true,    // Use GitHub Flavored Markdown
});

// Default content for the editor
const defaultMarkdown = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Here's some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:
function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

function App() {
  const [markdown, setMarkdown] = useState(defaultMarkdown);

  const handleChange = (event) => {
    setMarkdown(event.target.value);
  };

  const getMarkdownText = () => {
    const rawMarkup = marked(markdown);
    return { __html: rawMarkup };
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Markdown Previewer</h1>
      <div className="panes-container">
        <div className="pane editor-pane">
          <h2 className="pane-header">Editor</h2>
          <textarea id="editor" value={markdown} onChange={handleChange}></textarea>
        </div>
        <div className="pane preview-pane">
          <h2 className="pane-header">Preview</h2>
          <div id="preview" dangerouslySetInnerHTML={getMarkdownText()}></div>
        </div>
      </div>
    </div>
  );
}

export default App;
