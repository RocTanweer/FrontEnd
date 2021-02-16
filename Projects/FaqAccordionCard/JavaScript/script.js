const ques1 = document.getElementById('ques1');
const ques2 = document.getElementById('ques2');
const ques3 = document.getElementById('ques3');
const ques4 = document.getElementById('ques4');
const ques5 = document.getElementById('ques5');

const onClick1 = (event) => {
  let target = document.getElementById('ques1');
  let answer = document.getElementById('ans1');
  let extraPadding = document.getElementById('bb-1');
  let icon = document.getElementById('img-btn-1');

  
  
  if(getComputedStyle(target).fontWeight == '400') {
    target.style.fontWeight = '700';
  }

  else{
    target.style.fontWeight = '400';
  }

  if(getComputedStyle(answer).display == 'none') {
    answer.style.display = 'block';
  }

  else {
    answer.style.display = 'none'
  }

  if(getComputedStyle(extraPadding).paddingBottom == '0px') {
    extraPadding.style.paddingBottom = '20px'
  }
  else{
    extraPadding.style.paddingBottom = '0px'
  }

console.log(getComputedStyle(icon).transform)
  if (getComputedStyle(icon).transform == 'matrix(1, 0, 0, 1, 0, 0)'){
    icon.style.transform = 'rotate(180deg)';
  }

  else{
    icon.style.transform = 'matrix(1, 0, 0, 1, 0, 0)';
  }

  
}

const onClick2 = (event) => {
  let target = document.getElementById('ques2');
  let answer = document.getElementById('ans2');
  let extraPadding = document.getElementById('bb-2');
  let icon = document.getElementById('img-btn-2');



  if (getComputedStyle(target).fontWeight == '400') {
    target.style.fontWeight = '700';
  }

  else {
    target.style.fontWeight = '400';
  }

  if (getComputedStyle(answer).display == 'none') {
    answer.style.display = 'block';
  }

  else {
    answer.style.display = 'none'
  }

  if (getComputedStyle(extraPadding).paddingBottom == '0px') {
    extraPadding.style.paddingBottom = '20px'
  }
  else {
    extraPadding.style.paddingBottom = '0px'
  }


  if (getComputedStyle(icon).transform == 'matrix(1, 0, 0, 1, 0, 0)') {
    icon.style.transform = 'rotate(180deg)';
  }

  else {
    icon.style.transform = 'matrix(1, 0, 0, 1, 0, 0)';
  }
}

const onClick3 = (event) => {
  let target = document.getElementById('ques3');
  let answer = document.getElementById('ans3');
  let extraPadding = document.getElementById('bb-3');
  let icon = document.getElementById('img-btn-3');



  if (getComputedStyle(target).fontWeight == '400') {
    target.style.fontWeight = '700';
  }

  else {
    target.style.fontWeight = '400';
  }

  if (getComputedStyle(answer).display == 'none') {
    answer.style.display = 'block';
  }

  else {
    answer.style.display = 'none'
  }

  if (getComputedStyle(extraPadding).paddingBottom == '0px') {
    extraPadding.style.paddingBottom = '20px'
  }
  else {
    extraPadding.style.paddingBottom = '0px'
  }

  console.log(getComputedStyle(icon).transform)
  if (getComputedStyle(icon).transform == 'matrix(1, 0, 0, 1, 0, 0)') {
    icon.style.transform = 'rotate(180deg)';
  }

  else {
    icon.style.transform = 'matrix(1, 0, 0, 1, 0, 0)';
  }
}

const onClick4 = (event) => {
  let target = document.getElementById('ques4');
  let answer = document.getElementById('ans4');
  let extraPadding = document.getElementById('bb-4');
  let icon = document.getElementById('img-btn-4');



  if (getComputedStyle(target).fontWeight == '400') {
    target.style.fontWeight = '700';
  }

  else {
    target.style.fontWeight = '400';
  }

  if (getComputedStyle(answer).display == 'none') {
    answer.style.display = 'block';
  }

  else {
    answer.style.display = 'none'
  }

  if (getComputedStyle(extraPadding).paddingBottom == '0px') {
    extraPadding.style.paddingBottom = '20px'
  }
  else {
    extraPadding.style.paddingBottom = '0px'
  }


  if (getComputedStyle(icon).transform == 'matrix(1, 0, 0, 1, 0, 0)') {
    icon.style.transform = 'rotate(180deg)';
  }

  else {
    icon.style.transform = 'matrix(1, 0, 0, 1, 0, 0)';
  }
}

const onClick5 = (event) => {
  let target = document.getElementById('ques5');
  let answer = document.getElementById('ans5');
  let extraPadding = document.getElementById('bb-5');
  let icon = document.getElementById('img-btn-5');



  if (getComputedStyle(target).fontWeight == '400') {
    target.style.fontWeight = '700';
  }

  else {
    target.style.fontWeight = '400';
  }

  if (getComputedStyle(answer).display == 'none') {
    answer.style.display = 'block';
  }

  else {
    answer.style.display = 'none'
  }

  if (getComputedStyle(extraPadding).paddingBottom == '0px') {
    extraPadding.style.paddingBottom = '20px'
  }
  else {
    extraPadding.style.paddingBottom = '0px'
  }

  console.log(getComputedStyle(icon).transform)
  if (getComputedStyle(icon).transform == 'matrix(1, 0, 0, 1, 0, 0)') {
    icon.style.transform = 'rotate(180deg)';
  }

  else {
    icon.style.transform = 'matrix(1, 0, 0, 1, 0, 0)';
  }
}


ques1.addEventListener('click', onClick1);
ques2.addEventListener('click', onClick2);
ques3.addEventListener('click', onClick3);
ques4.addEventListener('click', onClick4);
ques5.addEventListener('click', onClick5);



