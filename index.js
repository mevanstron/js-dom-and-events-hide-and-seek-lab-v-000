function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div');
}

function increaseRankBy(n) {
  const elements = document.querySelectorAll('.ranked-list');

  for (let i = 0; i < elements.length; i++) {
    const lis = elements[i].querySelectorAll('li')

    for(let a = 0; a < lis.length; a++) {
      console.log(lis[a])
      lis[a].innerHTML = parseInt(lis[a].innerHTML) + n
    }
  }
}
