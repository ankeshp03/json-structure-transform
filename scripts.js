
const inputJsonEl = document.querySelector("#input-json");
const outputFormatJsonEl = document.querySelector("#output-format-json");
const outputJsonEl = document.querySelector("#output-json");
const convertBtnEl = document.querySelector(".convert-btn");

// str.replace(/[(  )(    )\t\n\r]/gm,'')

convertBtnEl.addEventListener("click", convertJsonFormat);

function convertJsonFormat() {
  const inputData = inputJsonEl.value;
  const format = outputFormatJsonEl.value;
  const jsonData = JSON.parse(inputData);
  const jsonFormat = JSON.parse(format);
  let newFormat = {};
  Object.keys(jsonFormat).forEach(key => {
    if(Object.keys(jsonData).includes(key)) {
      newFormat[key] = jsonData[key];
    }
    // else {
    //   Object.keys(jsonData).forEach(dataKey => {
    //     if(typeof(jsonData[dataKey]) === "object" && !Array.isArray(jsonData[dataKey])) {
    //       Object.keys(jsonData).forEach
    //     }
    //   });
    // }
  });
  outputJsonEl.value = JSON.stringify(newFormat);
  // function getProperty(key, value) {
  //   Object.keys(jsonData).cont
  // }
}