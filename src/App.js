import './App.css';
import FileSaver from 'file-saver';
import { useState } from 'react';

export default function App() {
  // User pamplate input

  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  // const [imageInputMode, setImageInputMode] = useState(true);
  const [imageInput, setImageInput] = useState('ackbar');

  const testUrl =
    'https://api.memegen.link/images/' +
    imageInput +
    '/' +
    topText +
    '/' +
    bottomText +
    '';

  function saveImage() {
    FileSaver.saveAs(testUrl, 'image.jpg');
  }

  return (
    <body>
      <h1>Meme Generator</h1>

      <h2>Meme template Text</h2>
      <div>
        <label>Meme template</label>
        <input
          value={imageInput}
          onChange={(e) => setImageInput(e.target.value)}
          class="memeTemplate"
        />
      </div>

      <h2>TopText</h2>
      <div>
        <label>Top text</label>
        <input value={topText} onChange={(e) => setTopText(e.target.value)} />
      </div>
      <div>
        <img src={testUrl} alt=" meme" data-test-id="meme-image" />
      </div>
      <h2>BottomText</h2>

      <div>
        <label>Bottom text</label>
        <input
          value={bottomText}
          onChange={(e) => setBottomText(e.target.value)}
        />
      </div>

      <br />
      <button onClick={saveImage}>Download</button>
    </body>
  );
}
