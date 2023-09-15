import './App.css';
import FileSaver from 'file-saver';
import { useState } from 'react';

export default function App() {
  // User pamplate input
  const startUrl = 'https://api.memegen.link/images/';
  const [imageInput, setImageInput] = useState('ackbar');
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [imageInputMode, setImageInputMode] = useState(
    startUrl + imageInput + '.jpg',
  );
  const baseUrl = startUrl + imageInput + '.jpg';
  const testUrl =
    'https://api.memegen.link/images/' +
    imageInput +
    '/' +
    topText +
    '/' +
    bottomText +
    '.jpg';

  function saveImage() {
    FileSaver.saveAs(imageInputMode, 'image.jpg');
  }

  //function changeImage() {
  //return
  //}
  function claer() {
    setTopText();

    setBottomText();
    setImageInputMode(baseUrl);
    return;
  }

  function inputTopText() {
    return setImageInputMode(testUrl);
  }

  return (
    <>
      <h1>Meme Generator</h1>

      <label>
        Meme template
        <input
          value={imageInput}
          onKeyUp={claer}
          onChange={(e) => setImageInput(e.target.value)}
        />
      </label>

      <label>
        Top text
        <input
          value={topText}
          onChange={(e) => setTopText(e.target.value)}
          onKeyUp={inputTopText}
        />
      </label>
      <div>
        <img src={imageInputMode} alt=" meme" data-test-id="meme-image" />
      </div>

      <label>
        Bottom text
        <input
          value={bottomText}
          onChange={(e) => setBottomText(e.target.value)}
          onKeyUp={inputTopText}
        />
      </label>

      <button onClick={saveImage}>Download</button>
    </>
  );
}
