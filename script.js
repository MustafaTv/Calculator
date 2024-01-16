const current = document.querySelector('#current');
const log = document.querySelector('#log');
function logKey(e) {
  current.textContent += `${e.key}`};

addEventListener('keypress', logKey);
  const one = document.querySelector('#one');
  one.addEventListener('click', () => {
    current.textContent += 1;
  });
  const two = document.querySelector('#two');
  two.addEventListener('click', () => {
    current.textContent += 2;
  });
  const three = document.querySelector('#three');
  three.addEventListener('click', () => {
    current.textContent += 3;
  });
  const four = document.querySelector('#four');
  four.addEventListener('click', () => {
    current.textContent += 4;
  });
  const five = document.querySelector('#five');
  five.addEventListener('click', () => {
    current.textContent += 5;
  });
  const six = document.querySelector('#six');
  six.addEventListener('click', () => {
    current.textContent += 6;
  });
  const seven = document.querySelector('#seven');
  seven.addEventListener('click', () => {
    current.textContent += 7;
  });
  const eight = document.querySelector('#eight');
  eight.addEventListener('click', () => {
    current.textContent += 8;
  });
  const nine = document.querySelector('#nine');
  nine.addEventListener('click', () => {
    current.textContent += 9;
  });
  const zero = document.querySelector('#zero');
  zero.addEventListener('click', () => {
    current.textContent += 0;
  });
  const clear = document.querySelector('#clear');
  clear.addEventListener('click', () => {
    log.textContent = '';
    current.textContent = '';
  });
  const deleteButton = document.querySelector('#delete');
  deleteButton.addEventListener('click', () => {
    current.textContent = current.textContent.slice(0, -1);
  });
  const divideSymbol = document.querySelector('#divide');
  divideSymbol.addEventListener('click', () => {
    let expression = log.textContent + current.textContent;
    log.textContent = `${eval(expression)} / `;
    current.textContent = '';
  });
  const multipleSymbol = document.querySelector('#multiply');
  multipleSymbol.addEventListener('click', () => {
    let expression = log.textContent + current.textContent;
    log.textContent = `${eval(expression)} * `;
    current.textContent = '';
  });
  const minusSymbol = document.querySelector('#substract');
  minusSymbol.addEventListener('click', () => {
    let expression = log.textContent + current.textContent;
    log.textContent = `${eval(expression)} - `;
    current.textContent = '';
  });
  const addSymbol = document.querySelector('#add');
  addSymbol.addEventListener('click', () => {
    let expression = log.textContent + current.textContent;
    log.textContent = `${eval(expression)} + `;
    current.textContent = '';
  });
  const periodSymbol = document.querySelector('#period');
  periodSymbol.addEventListener('click', () => {
    current.textContent += ".";
  });

  const equal = document.querySelector('#equals');
  equal.addEventListener('click', () => {
      let expression = log.textContent + current.textContent;
      let result = eval(expression);
      current.textContent = result;
      log.textContent = '';
  });
