let answers, questions, arrows;

function init() {
    const listItems = document.querySelectorAll('li');
    answers = document.querySelectorAll('.ans');
    questions = document.querySelectorAll('.ask');
    arrows = document.querySelectorAll('.arrow');

    listItems.forEach((element, index) => {
        element.addEventListener('click', toggle);
        element.value = index + 1;
    });
}

function toggle(event) {
    const id = event.target.closest('li').value;
    
    if (answers[id - 1].style.display == 'inline-block') {
        answers[id - 1].style.display = 'none';
        questions[id - 1].style.fontFamily = 'Kumbh-Sans-400';
        arrows[id - 1].style.rotate = '0deg';
        return;
    }

    answers.forEach(element => {
        element.style.display = 'none';
    });

    questions.forEach(element => {
        element.style.fontFamily = 'Kumbh-Sans-400';
    });

    arrows.forEach(element => {
        element.style.rotate = '0deg';
    });

    answers[id - 1].style.display = 'inline-block';
    questions[id - 1].style.fontFamily = 'Kumbh-Sans-700';
    arrows[id - 1].style.rotate = '180deg';
}

window.addEventListener('load', init);