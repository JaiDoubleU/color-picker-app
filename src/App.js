import { useState } from "react";
import {  ChromePicker,  SketchPicker,} from "react-color";
import rgbHex from "rgb-hex";
import "./App.css";


function App() {
  const [sketchColor, setSketchColor] = useState("#2078C5");
  const [chromePickerColor, setChromePickerColor] = useState("#2078C5");

  return (
    <div>
      <div className="container">
        <div className="sketchpicker">
          <h3>Sketch Picker</h3>
          <p>Selected color: {sketchColor}</p>
          <SketchPicker
            color={sketchColor}
            onChange={c =>
              setSketchColor("#" + rgbHex(c.rgb.r, c.rgb.g, c.rgb.b, c.rgb.a))
            }
          />
        </div>

        <div className="chromepicker">
          <h3>Chrome Picker</h3>
          <p>Selected color: {chromePickerColor}</p>
       
          <ChromePicker
            color={chromePickerColor}
            onChange={(color) => {
              setChromePickerColor("#" + rgbHex(color.rgb.r, color.rgb.g, color.rgb.b, color.rgb.a));
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;