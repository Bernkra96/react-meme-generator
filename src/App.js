import './App.css';
import FileSaver from 'file-saver';
import { useState } from 'react';

export default function App() {
  // User template input
  const startUrl = 'https://api.memegen.link/images/';
  const [imageInput, setImageInput] = useState('ackbar');
  const [topText, setTopText] = useState();
  const [bottomText, setBottomText] = useState();
  const [imageInputMode, setImageInputMode] = useState(
    startUrl + imageInput + '.jpg',
  );
  const baseUrl = startUrl + imageInput + '.jpg';
  const inputUrl =
    'https://api.memegen.link/images/' +
    imageInput +
    '/' +
    topText +
    '/' +
    bottomText +
    '.jpg';

  const inputUrlBottom =
    'https://api.memegen.link/images/' +
    imageInput +
    '/ /' +
    bottomText +
    '.jpg';

  const inputUrlTop =
    'https://api.memegen.link/images/' + imageInput + '/' + topText + '.jpg';

  function saveImage() {
    FileSaver.saveAs(imageInputMode, 'image.jpg');
  }

  // function changeImage() {
  // return
  // }
  function clear() {
    setTopText();

    setBottomText();
    setImageInputMode(baseUrl);
    return;
  }

  function inputTopText() {
    if (topText.length !== 0 && bottomText.length !== 0) {
      return setImageInputMode(inputUrl);
    }

    if (bottomText.length !== 0) {
      return setImageInputMode(inputUrlBottom);
    }
    if (topText.length !== 0) {
      return setImageInputMode(inputUrlTop);
    }
  }

  return (
    <>
      <h1>Meme Generator</h1>

      <label>
        Meme template
        <input
          value={imageInput}
          onKeyUp={clear}
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
