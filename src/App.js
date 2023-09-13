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
    <>
      <h1>Meme Generator</h1>
      <div>Meme Template Text</div>
      <input
        value={imageInput}
        onChange={(e) => setImageInput(e.target.value)}
        label="Meme template"
      />
      <div>TopText</div>
      <input
        value={topText}
        onChange={(e) => setTopText(e.target.value)}
        label="Top text"
      />
      <div>
        <img src={testUrl} alt=" meme" data-test-id="meme-image" />
      </div>
      <div>BottomText</div>
      <input
        value={bottomText}
        onChange={(e) => setBottomText(e.target.value)}
        label="Bottom text"
      />

      <button onClick={saveImage}>Download</button>
    </>
  );
}
