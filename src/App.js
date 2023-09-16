import './App.css';
import FileSaver from 'file-saver';
import { useState } from 'react';

export default function App() {
  // User pamplate input

  // const regx = /[\w\d\s]+/;

  const startUrl = 'https://api.memegen.link/images/';

  const [imageInput, setImageInput] = useState('ackbar');
  // const [imageTestInput, setImageTestInput] = useState('ackbar');
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [imageInputMode, setImageInputMode] = useState(
    startUrl + imageInput + '.jpg',
  );
  // const baseUrl = startUrl + imageInput + '.jpg';
  // let lodeUrl = imageInputMode;

  const testUrl =
    'https://api.memegen.link/images/' +
    imageInput +
    '/' +
    topText +
    '/' +
    bottomText +
    '.jpg';
  // const testUrlTop =
  // 'https://api.memegen.link/images/' + imageInput + '/' + topText + '.jpg';

  // const testUrlbottom =
  // 'https://api.memegen.link/images/' +
  // imageInput +
  // '/_/' +
  // bottomText +
  // '.jpg';

  function saveImage() {
    FileSaver.saveAs(imageInputMode, 'image.jpg');
  }
  function lode() {
    return setImageInputMode(testUrl);
  }
  // function inputTopText() {
  // if (regx.test(topText) && regx.test(bottomText)) {
  // lodeUrl = testUrl;
  // return setImageInputMode(testUrl);
  // }
  //  if (regx.test(topText)) {
  // lodeUrl = testUrlTop;
  // return setImageInputMode(testUrlTop);
  // }
  // if (regx.test(bottomText)) {
  // lodeUrl = testUrlbottom;
  //  return setImageInputMode(testUrlbottom);
  // }
  // }

  return (
    <>
      <h1>Meme Generator</h1>

      <label>
        Meme template
        <input
          value={imageInput}
          onChange={(e) => setImageInput(e.target.value)}
          onKeyUp={lode}
        />
      </label>
      <div>{imageInputMode}</div>
      <div>
        <img src={imageInputMode} alt=" meme" data-test-id="meme-image" />
      </div>
      <label>
        Top text
        <input
          value={topText}
          onChange={(e) => setTopText(e.target.value)}
          onKeyUp={lode}
        />
      </label>

      <label>
        Bottom text
        <input
          value={bottomText}
          onChange={(e) => setBottomText(e.target.value)}
          onKeyUp={lode}
        />
      </label>
      <button onClick={saveImage}>Download</button>
    </>
  );
}
