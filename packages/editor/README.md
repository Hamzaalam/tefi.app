# editor

> Rich Text Editor

[![NPM](https://img.shields.io/npm/v/editor.svg)](https://www.npmjs.com/package/editor) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
 npm install @contco/editor@1.0.3
```

## Usage

```tsx
import React, { useState } from 'react';

import Editor from 'editor';
import 'editor/dist/index.css';

const App = () => {
  const [document, setDocument] = useState<any>(initialValue);

  const setContent = (content: any) => {
    setDocument(content);
  };
  return <Editor data={document} setContent={setContent} readOnly={false} />;
};
const initialValue = [
  {
    type: 'paragraph',
    children: [
      { text: 'This is editable ' },
      { text: 'rich', bold: true },
      { text: ' text, ' },
      { text: 'much', italic: true },
      { text: ' better than a ' },
      { text: '<textarea>', code: true },
      { text: '!' },
    ],
  },
  {
    type: 'paragraph',
    children: [
      {
        text: "Since it's rich text, you can do things like turn a selection of text ",
      },
      { text: 'bold', bold: true },
      {
        text: ', or add a semantically rendered block quote in the middle of the page, like this:',
      },
    ],
  },
  {
    type: 'block-quote',
    children: [{ text: 'A wise quote.' }],
  },
  {
    type: 'paragraph',
    children: [{ text: 'Try it out for yourself!' }],
  },
];
```
