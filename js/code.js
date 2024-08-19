//Открытие бургер-меню
let burger = document.querySelector(".burger");
let nav = document.querySelector(".header__navigation");
let headerLink = document.querySelector(".navigation");

burger.addEventListener("click", () => {
    nav.classList.toggle("active");
    burger.classList.toggle("active");
});
headerLink.addEventListener("click", () => {
    nav.classList.remove("active");
    burger.classList.remove("active");
});


//Тест
const quizData = [
    {
        question: 'Ты чувствуешь тревогу. Что ты сделаешь, чтобы успокоиться?',
        options: ['Попробую глубокое дыхание.',
            'Постараюсь отвлечься на что-то приятное.',
            'Позвоню другу, чтобы поговорить.']
    },
    {
        question: 'Ты чувствуешь себя слишком расслабленно. Как ты восстановишь внимание?',
        options: ['Сделаю короткую разминку.',
            'Сфокусируюсь на ближайших целях.',
            'Проведу медитацию на осознанность.']
    },
    {
        question: 'Ты начинаешь самокритиковать себя. Как ты справишься с этими мыслями?',
        options: ['Напишу список своих достижений.',
            'Поговорю с кем-то, кому доверяю.',
            'Попробую заменить негативные мысли на позитивные.']
    },
    {
        question: 'Твой друг переживает трудные времена. Как ты его поддержишь?',
        options: ['Выслушаю его и предложу помощь.',
            'Постараюсь подбодрить его шуткой.',
            'Поделюсь своим опытом и советами.']
    },
    {
        question: 'Ты чувствуешь, что страхи захватывают тебя. Что ты сделаешь?',
        options: ['Попробую понять, откуда пришел этот страх.',
            'Запишу свои страхи и найду им рациональные объяснения.',
            'Обсужу свои страхи с кем-то, кому доверяю.']
    },
    {
        question: 'Ты рад успеху, но боишься потерять его. Как ты справишься с этим?',
        options: ['Сфокусируюсь на поддержании достигнутого.',
            'Позволю себе насладиться моментом.',
            'Постараюсь не думать о будущем и жить настоящим.']
    },
    {
        question: 'Ты чувствуешь себя одиноким. Что ты сделаешь, чтобы не чувствовать себя так?',
        options: ['Попробую завести новые знакомства.',
            'Проведу время с семьей или близкими.',
            'Займусь хобби, чтобы отвлечься.']
    },
    {
        question: 'Ты стоишь перед важным решением. Как ты поступишь?',
        options: ['Приму решение, взвесив все плюсы и минусы.',
            'Отложу решение на потом, чтобы подумать.',
            'Посоветуюсь с кем-то, кому доверяю.']
    },
    {
        question: 'Ты чувствуешь вину за прошлое. Как ты справишься с этим чувством?',
        options: ['Попробую простить себя и сделать выводы.',
            'Поговорю об этом с кем-то, кому доверяю.',
            'Напишу письмо самому себе, чтобы выразить свои чувства.']
    },
    {
        question: 'Ты оказался в конфликтной ситуации. Как ты разрешишь конфликт?',
        options: ['Попробую выслушать другую сторону и найти компромисс.',
            'Постараюсь выразить свои чувства и мысли ясно.',
            'Обратимся к медиатору или третьей стороне для помощи.']
    },
    {
        question: 'Ты встретил друга, с которым поссорился. Как ты поступишь?',
        options: ['Попробую поговорить с ним и выяснить, что произошло.',
            'Извинюсь за свою часть в конфликте.',
            'Попрошу его выслушать меня и предложу мирное решение.']
    },
    {
        question: 'Ты боишься неизвестности. Как ты справишься с этим страхом?',
        options: ['Попробую узнать больше о том, что меня пугает.',
            'Поделюсь своими страхами с кем-то, кому доверяю.',
            'Сосредоточусь на том, что могу контролировать.']
    },
    {
        question: 'Ты получил похвалу и не знаешь, как реагировать. Что ты сделаешь?',
        options: ['Приму похвалу и поблагодарю.',
            'Поделюсь радостью с близкими.',
            'Напомню себе, что заслуживаю признания.']
    },
    {
        question: 'Ты чувствуешь зависть. Как ты справишься с этим чувством?',
        options: ['Сосредоточусь на своих успехах и достижениях.',
            'Попробую понять, что именно вызывает зависть и почему.',
            'Постараюсь превратить зависть в мотивацию для собственного роста.']
    }
];

const results = [
    {
        text: 'Вы проявили высокую степень эмпатии и стремление помогать другим. Ваша готовность поддерживать окружающих и находить компромиссы помогла вам создать позитивные и доверительные отношения. Ваши персональные рекомендации:',
        recommendations: [
            'Групповая Терапия: Участие в групповой терапии может помочь вам лучше понять и развить свои коммуникативные навыки.',
            'Курсы по Эмоциональному Интеллекту: Посетите тренинги, которые помогут вам глубже понять свои эмоции и научиться управлять ими.',
            'Волонтерство: Продолжайте заниматься добровольчеством, что укрепит ваше чувство полезности и удовлетворения.'
        ]
    },
    {
        text: 'Вы стремились к личным достижениям и самореализации. Ваша целеустремленность и способность справляться с трудностями помогли вам достигнуть значительных успехов. Ваши персональные рекомендации:',
        recommendations: [
            'Индивидуальная Психотерапия: Работайте с терапевтом над постановкой новых целей и преодолением внутренних барьеров.',
            'Коучинг по Личной Эффективности: Найдите коуча, который поможет вам оптимизировать ваши усилия и достичь большего.',
            'Мастер-классы по Лидерству: Участвуйте в курсах и семинарах, которые помогут вам развить лидерские качества и управленческие навыки.'
        ]
    },
    {
        text: 'Вы проявили креативность и стремление к самовыражению через искусство или другие творческие формы. Это помогло вам найти внутренний баланс и удовлетворение. Ваши персональные рекомендации:',
        recommendations: [
            'Арт-терапия: Занятия с арт-терапевтом помогут вам глубже понять свои эмоции и выразить их через творчество.',
            'Курсы по Творческому Письму или Искусству: Продолжайте развивать свои навыки на специализированных курсах.',
            'Участие в Творческих Сообществах: Вступите в клубы или сообщества, где можно обмениваться идеями и вдохновением с другими творческими людьми.'
        ]
    }
];

const scores = Array(quizData.length).fill(0);
let currentQuestionIndex = 0;
const quizContainer = document.getElementById('test-story');
const storyElement = document.getElementById('story');
const choicesContainer = document.getElementById('choices');
const transitionSound = document.getElementById('transition-sound');
const questionCounter = document.getElementById('question-counter');

function startTest() {
    document.getElementById('intro-container').style.display = 'none';
    document.getElementById('test-story').style.display = 'flex';

    transitionSound.play();
    transitionSound.style.display = 'flex';

    showQuestion(currentQuestionIndex);
}

function showQuestion(index) {

    const item = quizData[index];

    storyElement.innerText = item.question;
    choicesContainer.innerHTML = '';

    questionCounter.innerText = `Вопрос ${index + 1} из ${quizData.length}`;
    
    item.options.forEach((option, optIndex) => {
        const optionButton = document.createElement('p');
        optionButton.classList.add('button_answer');
        optionButton.innerText = option;
        optionButton.addEventListener('click',() => selectOption(index, optIndex));
        choicesContainer.appendChild(optionButton);
    });
}

function selectOption(questionIndex, optionIndex) {
    scores[questionIndex] = optionIndex;

    if (questionIndex < quizData.length - 1) {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
    } else {
        calculateResult();
    }
}

function calculateResult() {
    const totalScore = scores.reduce((acc, score) => acc + score, 0);
    let resultIndex = Math.floor(totalScore / (quizData.length * quizData[0].options.length) * results.length);
    resultIndex = Math.min(resultIndex, results.length);

    document.getElementById('test-story').style.display = 'none';
    document.getElementById('test-result').style.display = 'flex';
    document.getElementById('result').innerText = results[resultIndex].text;
    document.getElementById('result').innerHTML += results[resultIndex].recommendations.map(rec => `<li><strong>${rec.split(':')[0]}</strong>: ${rec.split(':')[1]}</li>`).join('');
    
    transitionSound.pause();
    transitionSound.style.display = 'none';
}

document.getElementById('button_start').addEventListener('click', startTest);


// Модальное окно
const openModalButtons = [
    { btn: "open-modal-btn-konsyl", modal: "modal-1" },
    { btn: "open-modal-btn-terapy", modal: "modal-2" },
    { btn: "open-modal-btn-master", modal: "modal-3" },
    { btn: "psychologists-1", modal: "modal-4" },
    { btn: "psychologists-2", modal: "modal-5" },
    { btn: "psychologists-3", modal: "modal-6" }
];

const closeModalButtons = [
    "close-modal-btn-1",
    "close-modal-btn-2",
    "close-modal-btn-3",
    "close-modal-btn-4",
    "close-modal-btn-5",
    "close-modal-btn-6"
];


openModalButtons.forEach(({ btn, modal }) => {
    document.getElementById(btn).addEventListener("click", () => {
        document.getElementById(modal).classList.add("open");
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = `17px`;
    });
});

closeModalButtons.forEach((btn, index) => {
    document.getElementById(btn).addEventListener("click", () => {
        document.getElementById(`modal-${index + 1}`).classList.remove("open");
        document.body.style.overflow = 'auto';
        document.body.style.paddingRight = '0px';
    });
});

window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        openModalButtons.forEach(({ modal }) => {
            document.getElementById(modal).classList.remove("open");
        });
        document.body.style.overflow = 'auto';
        document.body.style.paddingRight = '0px';
    }
});

openModalButtons.forEach(({ modal }) => {
    const modalElement = document.getElementById(modal);
    modalElement.querySelector('.modal__box').addEventListener('click', event => {
        event._isClickWithInModal = true;
    });
    modalElement.addEventListener('click', event => {
        if (event._isClickWithInModal) return;
        event.currentTarget.classList.remove('open');
        document.body.style.overflow = 'auto';
        document.body.style.paddingRight = '0px';
    });
});


//Валидация формы
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    form.addEventListener("submit", (ev) => {
        ev.preventDefault();
        if (validate(ev)) {
            alert("Форма успешно отправлена!");
            form.reset();
        }
    });
});

function validate(ev) {
    const myForm = ev.currentTarget;
    myForm.querySelectorAll("span").forEach((el) => el.remove());

    const myName = isFullText(myForm.name);
    const myTel = isValidTel(myForm.tel);

    return myName && myTel;
}

function isFullText(fieldInp) {
    if (fieldInp.value.trim().length === 0) {
        const elem = document.createElement("span");
        elem.textContent = "Поле должно быть заполнено!";
        fieldInp.insertAdjacentElement("afterend", elem);
        fieldInp.classList.add("alert");
        return false;
    } else {
        fieldInp.classList.remove("alert");
        return true;
    }
}

function isValidTel(fieldInp) {
    if (!isFullText(fieldInp)) return false;
    const regex = /^[\+\0-9]+$/;
    if (!regex.test(fieldInp.value)) {
        const elem = document.createElement("span");
        elem.textContent = "Телефон может содержать только цифры!";
        fieldInp.insertAdjacentElement("afterend", elem);
        fieldInp.classList.add("alert");
        return false;
    }
    fieldInp.classList.remove("alert");
    return true;
}

//Анимация предзагрузчика
gsap.registerPlugin(ScrollTrigger)
const tlloader = gsap.timeline()

tlloader
    .set('.loader__item', { yPercent: -100 })
    .set('.loader__title', { opacity: 0 })
    .to('.loader__item', {
        yPercent: 0,
        duration: 0.5,
        stagger: 0.25,
    })
    .to('.loader__item', {
        yPercent: 100,
        duration: 0.5,
        stagger: 0.25,
    })
    .to('.loader__title', {
        opacity: 1,
        duration: 1,
        scale: 2,
    })
    .set('.loader__item', {
        yPercent: -100,
    })
    .to('.loader__title', {
        opacity: 0,
        duration: 1,
        scale: 0.8,
    })
    .to('.loader', {
        yPercent: -100,
        duration: 1,
    }, '-=0.2',)

//Анимация скролла
const tl = gsap.timeline()

tl.fromTo('.promo__title', {
    x: -100,
    opacity: 0,
}, {
    x: 0,
    opacity: 1,
    duration: 1,
}, 5).fromTo('.promo__text', {
    y: -50,
    opacity: 0,
}, {
    y: 0,
    opacity: 1,
    duration: 1,
}, 6).fromTo('.button_promo', {
    y: 50,
    opacity: 0,
}, {
    y: 0,
    opacity: 1,
    duration: 1,
}, 7).fromTo('.logo', {
    y: -50,
    opacity: 0,
}, {
    y: 0,
    opacity: 1,
    duration: 1,
}, 5).fromTo('.navigation li', {
    y: -50,
    opacity: 0,

}, {
    y: 0,
    opacity: 1,
    duration: 1,
    stagger: 0.15,
}, 6).fromTo('.header__buttons', {
    y: -50,
    opacity: 0,

}, {
    y: 0,
    opacity: 1,
    duration: 1,
    stagger: 0.15,
}, 7)

gsap.from('.help', {
    scrollTrigger: {
        trigger: '.we-help',
        start: '-30% center',
        end: '+=300px',
        scrub: true,
    },
    scale: 0,
    transformOrigin: 'left center',
    ease: 'none',
    stagger: 1,
})

gsap.from('.psychologists', {
    scrollTrigger: {
        trigger: '.about-us',
        start: '-30% center',
        end: '+=300px',
        scrub: true,

    },
    scale: 0,
    transformOrigin: 'right center',
    ease: 'none',
    stagger: 1,
})

gsap.from('.service', {
    scrollTrigger: {
        trigger: '.services',
        start: '-30% center',
        end: '+=300px',
        scrub: true,

    },
    scale: 0,
    transformOrigin: 'left center',
    ease: 'none',
    stagger: 1,
})