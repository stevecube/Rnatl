const question = document.getElementById('question');
const input = document.getElementById('input');
const check = document.getElementById('check');
const output = document.getElementById('output');
const first = document.getElementById('answer1');
const second = document.getElementById('answer2');
const third = document.getElementById('answer3');
const forth = document.getElementById('answer4');
const fifth = document.getElementById('answer5');
const sixth = document.getElementById('answer6');
const seventh = document.getElementById('answer7');
const eight = document.getElementById('answer8');
const ninth = document.getElementById('answer9');

const A = '마음속에 떠오르는 생각이나 운율이 있는 언어로 압축하여 표현하는 문학';
const B = '정해진 형식에 맞추어 쓴 시';
const C = '정해진 형식 없이 자유롭게 쓴 시';
const D = '행을 구분하지 않고 줄글로 쓴 시';
const E = '개인의 감정과 생각을 주관적으로 표현한 시';
const F = '역사적 사건이나 신화, 전설, 영웅의 이야기를 쓴 시';
const G = '연극의 대본처럼 대사로 이루어진 시';
const H = '시를 읽을 때 느껴지는 말의 가락, 리듬';
const I = '시인이 시를 통해 말하고자 하는 중심 생각';
const J = '시를 읽을 때 떠오르는 느낌이나 모습';
const K = '시 속에서 단어가 사전적 의미 외에 시인이 부여한 다양하능 의미를 품고 있는 것';
const L = '사전적, 지시적, 객관적';
const M = '함축적, 다의적, 주관적';
const N = '시 속에서 시어가 하는 역할 또는 작용';
const O = '시에서 느껴지는 말의 가락';
const P = '외형률';
const Q = '내재율';
const R = '일정한 글자 수 반복';
const S = '음보 반복';
const T = '같거나, 비슷한 소리, 단어 반복';
const U = '일정한 위치에서 같은 말 반복';
const V = '문장 구조 반복';
const W = '의성어, 의태어 사용';
let questions = [
    A,
    B,
    C,
    D,
    E,
    F,
    G,
    H,
    I,
]

const AA = '시';
const BB = '정형시';
const CC = '자유시';
const DD = '산문시';
const EE = '서정시';
const FF = '서사시';
const GG = '극시';
const HH = '운율';
const II = '주제';
const JJ = '심상';
const KK = '시어의 함축적 의미';
const LL = '일상어';
const MM = '시어';
const NN = '시어의 기능';
const OO = '운율';
const PP = '운율의 종류 첫 번째';
const QQ = '운율의 종류 두 번째';
const RR = '운율 형성 방법 첫 번째';
const SS = '운율 형성 방법 두 번째';
const TT = '운율 형성 방법 세 번째';
const UU = '운율 형성 방법 네 번째';
const VV = '운율 형성 방법 다섯 번째';
const WW = '운율 형성 방법 여섯 번째';
let answers = [
    AA,
    BB,
    CC,
    DD,
    EE,
    FF,
    GG,
    HH,
    II,
]

function r1() {
    questions.shift();
    console.log(questions);
}
function r2() {
    a1 = questions.slice(0, 1);
    a2 = questions.splice(2, number-1);
    questions = a1.concat(a2);
    console.log(questions);
}
function r3() {
    a1 = questions.slice(0, 2);
    a2 = questions.splice(3, number-2);
    questions = a1.concat(a2);
    console.log(questions);
}
function r4() {
    a1 = questions.slice(0, 3);
    a2 = questions.splice(4, number-3);
    questions = a1.concat(a2);
    console.log(questions);
}
function r5() {
    a1 = questions.slice(0, 4);
    a2 = questions.splice(5, number-4);
    questions = a1.concat(a2);
    console.log(questions);
}
function r6() {
    a1 = questions.slice(0, 5);
    a2 = questions.splice(6, number-5);
    questions = a1.concat(a2);
    console.log(questions);
}
function r7() {
    a1 = questions.slice(0, 6);
    a2 = questions.splice(7, number-6);
    questions = a1.concat(a2);
    console.log(questions);
}
function r8() {
    a1 = questions.slice(0, 7);
    a2 = questions.splice(8, number-7);
    questions = a1.concat(a2);
    console.log(questions);
}
function rl() {
    questions.pop();
    console.log(questions);
}
question.innerHTML = questions[0];
console.log(questions);
let number = questions.length;
function duplicate_check() {
    const random1 = questions[Math.floor(Math.random() * questions.length)];
    if (random1 == questions[0]) {
        r1;
    }
    else if (random1 == questions[1]) {
        r2();
    }
    else if (random1 == questions[2]) {
        r3();
    }
    else if (random1 == questions[3]) {
        r4();
    }
    else if (random1 == questions[4]) {
        r5();
    }
    else if (random1 == questions[5]) {
        r6();
    }
    else if (random1 == questions[6]) {
        r7();
    }
    else if (random1 == questions[7]) {
        r8();
    }
    else {
        rl();
    }
    const random2 = questions[Math.floor(Math.random() * questions.length)];
    if (random2 == questions[0]) {
        r1();
    }
    else if (random2 == questions[1]) {
        r2();
    }
    else if (random2 == questions[2]) {
        r3();
    }
    else if (random2 == questions[3]) {
        r4();
    }
    else if (random2 == questions[4]) {
        r5();
    }
    else if (random2 == questions[5]) {
        r6();
    }
    else if (random2 == questions[6]) {
        r7();
    }
    else {
        rl();
    }
    const random3 = questions[Math.floor(Math.random() * questions.length)];
    if (random3 == questions[0]) {
        r1();
    }
    else if (random3 == questions[1]) {
        r2();
    }
    else if (random3 == questions[2]) {
        r3();
    }
    else if (random3 == questions[3]) {
        r4();
    }
    else if (random3 == questions[4]) {
        r5();
    }
    else if (random3 == questions[5]) {
        r6();
    }
    else {
        rl();
    }
    const random4 = questions[Math.floor(Math.random() * questions.length)];
    if (random4 == questions[0]) {
        r1();
    }
    else if (random4 == questions[1]) {
        r2();
    }
    else if (random4 == questions[2]) {
        r3();
    }
    else if (random4 == questions[3]) {
        r4();
    }
    else if (random4 == questions[4]) {
        r5();
    }
    else {
        rl();
    }
    const random5 = questions[Math.floor(Math.random() * questions.length)];
    if (random5 == questions[0]) {
        r1();
    }
    else if (random5 == questions[1]) {
        r2();
    }
    else if (random5 == questions[2]) {
        r3();
    }
    else if (random5 == questions[3]) {
        r4();
    }
    else {
        rl();
    }
    const random6 = questions[Math.floor(Math.random() * questions.length)];
    if (random6 == questions[0]) {
        r1();
    }
    else if (random6 == questions[1]) {
        r2();
    }
    else if (random6 == questions[2]) {
        r3();
    }
    else {
        rl();
    }
    const random7 = questions[Math.floor(Math.random() * questions.length)];
    if (random7 == questions[0]) {
        r1();
    }
    else if (random7 == questions[1]) {
        r2();
    }
    else {
        rl();
    }
    const random8 = questions[Math.floor(Math.random() * questions.length)];
    if (random8 == questions[0]) {
        r1();
    }
    else {
        rl();
    }
    const random9 = questions[Math.floor(Math.random() * questions.length)];
    if (random9 == questions[0]) {
        r1();
    }
    first.innerHTML = random1;
    second.innerHTML = random2;
    third.innerHTML = random3;
    forth.innerHTML = random4;
    fifth.innerHTML = random5;
    sixth.innerHTML = random6;
    seventh.innerHTML = random7;
    eight.innerHTML = random8;
    ninth.innerHTML = random9;
}
function change() {
    lo += 1;
    label2.innerHTML = label1_output[lo] + start_2;
    score += 1;
};
duplicate_check();