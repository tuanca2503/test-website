// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <>
      <div class="overlay"></div>
      <div class="frame-box">
        <div class="left-frame">
          <div class="grid">
            <div class="top">
              <p data-text="Framess">Framess</p>
            </div>
            <div class="middle">
              <p data-text="Wildness">Wildness</p>
            </div>
            <div class="bottom">
              <div class="grid">
                <div class="left-box">
                  <p>你好 * 界梦</p>
                  <p>
                    I can be your light<br />
                    I can moving of time<br />
                    I love so deeply We <br />
                    I find that feel
                  </p>
                </div>
                <div class="right-box">
                  <p>
                    Hey there girl I can moving of fake <br />I love so willing,
                    we find that feel, before the green door opens wide and the
                    light shines through
                  </p>
                  <p>before the green door</p>
                </div>
              </div>
            </div>
          </div>
          <div class="tag">
            <div class="top">
              <div>
                <p>Beyond</p>
                <hr />
              </div>
              <p>the ripple</p>
            </div>
            <div class="bottom">
              <p>''</p>
              <p>D</p>
            </div>
          </div>
          
        </div>
        <div class="right-frame">
          <div class="grid">
            <div class="top">
              <p>(你 好 世 界<span>Realm </span>丽 梦)</p>
              <p>Corposait archivetechlogy report</p>
              <p>
                When clouds veil the shining
                <br />Wildflowers still grow among stones <br />The river quietly
                answers <br />Patience daily song <br />Patience sees tomorrow
                <br />Metaphobius.
              </p>
            </div>
            <div class="bottom">

            </div>
          </div>
          <div class="under-text">
            <p>
              before the green door before the green door before the green
              door before the green door
            </p>
          </div>
        </div>
      </div>
    </>
  );
}