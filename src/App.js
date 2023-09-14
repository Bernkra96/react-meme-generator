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
  const baseUrl = 'https://api.memegen.link/images/' + imageInput + '.jpg';
  const testUrl =
    'https://api.memegen.link/images/' +
    imageInput +
    '/' +
    topText +
    '/' +
    bottomText;

  function saveImage() {
    FileSaver.saveAs(imageInputMode, 'image.jpg');
  }

  function changeImage() {
    setImageInputMode(baseUrl);

    setTopText('');

    setBottomText('');
    setImageInputMode(baseUrl);
  }

  function inputTopText() {
    setImageInputMode(testUrl);
  }

  return (
    <>
      <h1>Meme Generator</h1>
      <div>Meme Template Text</div>
      <label>
        Meme template
        <input
          value={imageInput}
          onChange={(e) => setImageInput(e.target.value)}
          onKeyUp={changeImage}
        />
      </label>
      <div>TopText</div>
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
      <div>BottomText</div>
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
