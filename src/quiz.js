import './style.css'

var questions = [
    {
        id: 1,
        text: "日本の首都は？",
        options: ["大阪", "京都", "東京", "横浜"],
        correctAnswer: "東京",
    },
    {
        id: 2,
        text: "1 + 1 = ?",
        options: ["1", "2", "3", "4"],
        correctAnswer: "2",
    },
    {
        id: 3,
        text: "地球から一番近い惑星は？",
        options: ["火星", "金星", "木星", "土星"],
        correctAnswer: "金星",
    },
];
var currentQuestionIndex = 0; //現在の問題番号を保持する。
var score = 0; //スコアを保持する
var userAnswers = []; //回答を保持する
// 問題文を表示する関数
function renderQuestion() {
    var question = questions[currentQuestionIndex]; //currentQuestionIndex を使って現在の問題を取得します。
    //id="quiz-container" の要素を取得
    //要素が見つからなければ何もしない（nullチェック）
    var quizContainer = document.getElementById("quiz-container");
    // DOM取得の際にnullチェック
    if (!quizContainer)
        return;
    // 問題文と４択の選択肢をhtmlとして出力する
    quizContainer.innerHTML = "\n    <h2>".concat(question.text, "</h2>\n    <div id=\"options\">\n      ").concat(question.options
        .map(function (option) { return "\n            <button data-answer=\"".concat(option, "\">").concat(option, "</button>\n          "); })
        .join(""), "\n    </div>\n  ");
    // 選択肢に当たるbuttonタグをDOM要素として取得
    var optionButtons = quizContainer.querySelectorAll('button[data-answer]');
    optionButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            handleAnswer(button.dataset.answer);
        });
    });
}
function handleAnswer(answer) {
    // 現在回答中の問題を取得
    var currentQuestion = questions[currentQuestionIndex];
    // ユーザーの回答と正答を比較し、合っていればスコアに１を追加
    if (answer === currentQuestion.correctAnswer) {
        score++;
    }
    // ユーザーの回答を保存する配列に回答を追加
    userAnswers.push(answer);
    // 現在の問題番号に１を追加し、次の問題に移行
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        renderQuestion();
    }
    else {
        // 結果を表示する関数を実行
        renderResult();
    }
}
function renderResult() {
    var quizContainer = document.getElementById("quiz-container");
    if (!quizContainer)
        return;
    quizContainer.innerHTML = "\n    <h2>\u30AF\u30A4\u30BA\u7D42\u4E86\uFF01</h2>\n    <p>\u30B9\u30B3\u30A2: ".concat(score, " / ").concat(questions.length, "</p>\n    <button id=\"restart\">\u3082\u3046\u4E00\u5EA6\u6311\u6226</button>\n  ");
    var restartButton = document.getElementById("restart");
    restartButton === null || restartButton === void 0 ? void 0 : restartButton.addEventListener("click", restartQuiz);
}
function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    renderQuestion();
}
// 初期表示
document.addEventListener("DOMContentLoaded", function () {
    renderQuestion();
});
