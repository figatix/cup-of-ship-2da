
const allAnswers = ['am','does she play','go', 'is she']
// ЗМІНЮЄМ КНОПКУ ШОВ НА ХАЙД. ПОКАЗУЄМ ВІДПОВІДЬ
// Task 1
const showBtn1 = document.querySelector('#show-btn-1');
const showBtnText1 = document.querySelector('#show-btn-text-1');
const answer1 = document.querySelector('#answer-1');



showBtn1.addEventListener('click', function () {
    
    if (showBtnText1.textContent === 'Show') {

        showBtnText1.textContent = 'Hide'; 
        answer1.textContent = allAnswers[0];
        
    } else if (showBtnText1.textContent === 'Hide') {

        showBtnText1.textContent = 'Show';
        answer1.textContent = '...';
    }
});

// TASK 2
const showBtn2 = document.querySelector('#show-btn-2');
const showBtnText2 = document.querySelector('#show-btn-text-2');
const answer2 = document.querySelector('#answer-2');

showBtn2.addEventListener('click', function () {
    
    if (showBtnText2.textContent === 'Show') {

        showBtnText2.textContent = 'Hide'; 
        answer2.textContent = allAnswers[1];
        
    } else if (showBtnText2.textContent === 'Hide') {

        showBtnText2.textContent = 'Show';
        answer2.textContent = '...';
    }
});

//TASK 3
const showBtn3 = document.querySelector('#show-btn-3');
const showBtnText3 = document.querySelector('#show-btn-text-3');
const answer3 = document.querySelector('#answer-3');

showBtn3.addEventListener('click', function () {
    
    if (showBtnText3.textContent === 'Show') {

        showBtnText3.textContent = 'Hide'; 
        answer3.textContent = allAnswers[2];
        
    } else if (showBtnText3.textContent === 'Hide') {

        showBtnText3.textContent = 'Show';
        answer3.textContent = '...';
    }
});

//TASK 4
const showBtn4 = document.querySelector('#show-btn-4');
const showBtnText4 = document.querySelector('#show-btn-text-4');
const answer4 = document.querySelector('#answer-4');

showBtn4.addEventListener('click', function () {
    
    if (showBtnText4.textContent === 'Show') {

        showBtnText4.textContent = 'Hide'; 
        answer4.textContent = allAnswers[3];
        
    } else if (showBtnText4.textContent === 'Hide') {

        showBtnText4.textContent = 'Show';
        answer4.textContent = '...';
    }
});

//  ПЕРЕВІРЯЄМО ВВЕДЕНІ СЛОВА
//TASK 1
    
document.querySelector('#check-btn-1').onclick = checkBtn1;

function checkBtn1() {
   
    const input1 = document.querySelector('#test-input-case-1');
    
    if (input1.value.toLowerCase().trim() === allAnswers[0]) {
        
        input1.style.backgroundColor = '#52F47F';
    } else {
        
        input1.style.backgroundColor = '#ED4646'; 
    }
};

//TASK 2
    
document.querySelector('#check-btn-2').onclick = checkBtn2;

function checkBtn2() {
   
    const input2 = document.querySelector('#test-input-case-2');
    
    if (input2.value.toLowerCase().trim() === allAnswers[1]) {
        
        input2.style.backgroundColor = '#52F47F';
    } else {
        
        input2.style.backgroundColor = '#ED4646'; 
    }
};

//TASK 3
    
document.querySelector('#check-btn-3').onclick = checkBtn3;

function checkBtn3() {
   
    const input3 = document.querySelector('#test-input-case-3');
    
    if (input3.value.toLowerCase().trim() === allAnswers[2]) {
        
        input3.style.backgroundColor = '#52F47F';
    } else {
        
        input3.style.backgroundColor = '#ED4646'; 
    }
};

//TASK 4
    
document.querySelector('#check-btn-4').onclick = checkBtn4;

function checkBtn4() {
   
    const input4 = document.querySelector('#test-input-case-4');
    
    if (input4.value.toLowerCase().trim() === allAnswers[3]) {
        
        input4.style.backgroundColor = '#52F47F';
    } else {
        
        input4.style.backgroundColor = '#ED4646'; 
    }
};


// ЗАПОВНЕННЯ ЕМЕЙЛА І ЙОГО ВАЛІДАЦІЯ

// ПРИБИРАЄМО ПЕРЕЗАВАНТАЖЕННЯ СТОРІНКИ
document.querySelector('#form-case').addEventListener('submit', (event) => {
   event.preventDefault(); 
});

// OR :::::
// document.querySelector('#form-case').addEventListener('submit', function (event) {
//     event.preventDefault();
// });

// Validate email
function validateEmail(email) {
    const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return re.test(String(email).toLowerCase());
}


const form = document.querySelector('#form-case');
const email = document.querySelector('#email');
const select = document.querySelector('#english-level');
const sendBtn = document.querySelector('#send-btn');



sendBtn.addEventListener('click', function () {
    
    let point = 0;

    // ПЕРЕВІРЯЮ ЧИ ІНПУТ НЕ ПУСТИЙ  І НА ВАЛІДАЦІЮ
    if (email.value.trim() === '' || validateEmail(email.value) === false) {
        email.classList.add('error');
    } else {
        email.classList.remove('error')
        console.dir(email.value);
        point += 1;
    }

    // Перевіряю чи вибраний селектор 
    if (select.value.toLowerCase() === 'choose your english level') {
        select.classList.add('error')
    
    } else {
        console.dir(select.value);
        select.classList.remove('error');
        point += 1;
    }

            
    if (point !== 2) {
        console.log('bye')
    } else {
        console.log('welcome')
        
    }

        
});












