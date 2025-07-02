import './style.css'

// クイズの「問題」を表す型を定義
type Question = {
  id: number;
  text: string;
  options: string[];
};

// 複数の問題（Question型のオブジェクト）を配列で用意
const questions: Question[] = [
  {
    "id": 1,
    "text": "怒りやイライラの感情が湧いても、冷静に対処できることが多い。",
    "options": ["ほとんど当てはまらない", "やや当てはまらない", "当てはまる", "かなり当てはまる"]
  },
  {
    "id": 2,
    "text": "自分が今どんな感情なのか、はっきり言葉で説明できる。",
    "options": ["ほとんど当てはまらない", "やや当てはまらない", "当てはまる", "かなり当てはまる"]
  },
  {
    "id": 3,
    "text": "落ち込んでも、ある程度時間がたてば前向きになれる。",
    "options": ["ほとんど当てはまらない", "やや当てはまらない", "当てはまる", "かなり当てはまる"]
  },
  {
    "id": 4,
    "text": "相手の表情や声のトーンから、気持ちの変化に気づける。",
    "options": ["ほとんど当てはまらない", "やや当てはまらない", "当てはまる", "かなり当てはまる"]
  },
  {
    "id": 5,
    "text": "誰かが悩んでいる時、自然と話を聞こうとする気持ちになる。",
    "options": ["ほとんど当てはまらない", "やや当てはまらない", "当てはまる", "かなり当てはまる"]
  },
  {
    "id": 6,
    "text": "自分のミスや失敗を素直に認めることができる。",
    "options": ["ほとんど当てはまらない", "やや当てはまらない", "当てはまる", "かなり当てはまる"]
  },
  {
    "id": 7,
    "text": "他人の立場に立って物事を考えるのが得意だ。",
    "options": ["ほとんど当てはまらない", "やや当てはまらない", "当てはまる", "かなり当てはまる"]
  },
  {
    "id": 8,
    "text": "チームで仕事をするとき、みんなが気持ちよく協力できるよう意識している。",
    "options": ["ほとんど当てはまらない", "やや当てはまらない", "当てはまる", "かなり当てはまる"]
  },
  {
    "id": 9,
    "text": "ストレスを感じたとき、自分なりの落ち着ける方法を実行できている。",
    "options": ["ほとんど当てはまらない", "やや当てはまらない", "当てはまる", "かなり当てはまる"]
  },
  {
    "id": 10,
    "text": "他人からの批判を、成長のヒントとして受け止めることができる。",
    "options": ["ほとんど当てはまらない", "やや当てはまらない", "当てはまる", "かなり当てはまる"]
  },
  {
    "id": 11,
    "text": "新しい環境や変化に対して柔軟に適応できる。",
    "options": ["ほとんど当てはまらない", "やや当てはまらない", "当てはまる", "かなり当てはまる"]
  },
  {
    "id": 12,
    "text": "自分の感情を押し殺さず、適切に表現できる。",
    "options": ["ほとんど当てはまらない", "やや当てはまらない", "当てはまる", "かなり当てはまる"]
  },
  {
    "id": 13,
    "text": "失敗しても自分を責めすぎず、次に活かそうと努力できる。",
    "options": ["ほとんど当てはまらない", "やや当てはまらない", "当てはまる", "かなり当てはまる"]
  },
  {
    "id": 14,
    "text": "他人の意見や感情を尊重しながら、自分の意見も伝えられる。",
    "options": ["ほとんど当てはまらない", "やや当てはまらない", "当てはまる", "かなり当てはまる"]
  },
  {
    "id": 15,
    "text": "気分が落ち込んだ時、無理に明るく振る舞うよりも休息をとることを選ぶ。",
    "options": ["ほとんど当てはまらない", "やや当てはまらない", "当てはまる", "かなり当てはまる"]
  },
  {
    "id": 16,
    "text": "感情的になっても、相手を傷つけないように言葉を選べる。",
    "options": ["ほとんど当てはまらない", "やや当てはまらない", "当てはまる", "かなり当てはまる"]
  },
  {
    "id": 17,
    "text": "自分の強みと弱みを客観的に理解している。",
    "options": ["ほとんど当てはまらない", "やや当てはまらない", "当てはまる", "かなり当てはまる"]
  },
  {
    "id": 18,
    "text": "困っている人を見ると、自然に助けたい気持ちが湧いてくる。",
    "options": ["ほとんど当てはまらない", "やや当てはまらない", "当てはまる", "かなり当てはまる"]
  },
  {
    "id": 19,
    "text": "プレッシャーの中でも、自分のペースを保つことができる。",
    "options": ["ほとんど当てはまらない", "やや当てはまらない", "当てはまる", "かなり当てはまる"]
  },
  {
    "id": 20,
    "text": "感謝の気持ちを忘れず、周囲の人に伝えられる。",
    "options": ["ほとんど当てはまらない", "やや当てはまらない", "当てはまる", "かなり当てはまる"]
  },
  {
    "id": 21,
    "text": "物事をポジティブに捉える習慣がある。",
    "options": ["ほとんど当てはまらない", "やや当てはまらない", "当てはまる", "かなり当てはまる"]
  },
  {
    "id": 22,
    "text": "誰かと意見が合わなくても、冷静に話し合いができる。",
    "options": ["ほとんど当てはまらない", "やや当てはまらない", "当てはまる", "かなり当てはまる"]
  },
  {
    "id": 23,
    "text": "自分の感情に振り回されず、バランスを保てている。",
    "options": ["ほとんど当てはまらない", "やや当てはまらない", "当てはまる", "かなり当てはまる"]
  },
  {
    "id": 24,
    "text": "困難に直面しても諦めず、最後までやり抜く力がある。",
    "options": ["ほとんど当てはまらない", "やや当てはまらない", "当てはまる", "かなり当てはまる"]
  },
  {
    "id": 25,
    "text": "自分の感情や行動が周囲にどんな影響を与えているか意識できる。",
    "options": ["ほとんど当てはまらない", "やや当てはまらない", "当てはまる", "かなり当てはまる"]
  }
];


// 状態変数
let currentQuestionIndex: number = 0; //今の問題の位置を示す
let score: number = 0; //ユーザーの正答数を数える
let userAnswers: string[] = []; //ユーザーが選んだ回答を保存する配列

// 問題文を表示する関数
function renderQuestion(): void { //戻り値がない

  //const question に「今出すべき問題のオブジェクト」が入ります。
 //その後、この question を使って問題文や選択肢を画面に表示する処理を進めていきます。
  const question = questions[currentQuestionIndex]; //currentQuestionIndex を使って現在の問題を取得します。

  //id="quiz-container" の要素を取得
  //要素が見つからなければ何もしない（nullチェック）
  const quizContainer = document.getElementById("quiz-container");

  // DOM取得の際にnullチェック
  //画面に問題を表示する場所（quiz-container）を見つけて取得し、
  //もし見つからなければ以降の処理をやめて安全に終了します。
  if (!quizContainer) return;

  // 問題文と４択の選択肢をhtmlとして出力する
  // quizContainer の中身（HTML）をまるごと新しいHTMLに置き換えています。
  //これで問題文や選択肢が画面に表示されるようになります。
  // 取得した現在の問題 question.text を <h2> 見出しタグで表示しています。
  //.map() は配列の各要素に対して処理をして新しい配列を作るメソッドです。
//data-answer 属性に答えの文字列をセットし、ボタンの中にも選択肢テキストを表示します。
//data-answer は HTMLのカスタム属性 の一種で、正式には「データ属性（data attributes）」と呼ばれます。
// data- で始まる名前なら自由に作れます。
// ここでは、選択肢それぞれに対応するボタンのHTMLを作っています。
//HTMLタグに好きな情報を付け加えられる特別な属性です。
//joinは JavaScriptの配列メソッド の一つで、配列の要素をつなげて１つの文字列にするためのものです。
//Q問目を追加
  quizContainer.innerHTML = `
  <h3>${currentQuestionIndex + 1}問目</h3>
    <h2>${question.text}</h2>
    <div id="options">
      ${question.options
        .map(
          (option) => `
            <button data-answer="${option}">${option}</button>
          `
        )
        .join("")}
    </div>
  `;


  // 選択肢に当たるbuttonタグをDOM要素として取得
  //quizContainer は、問題と選択肢を表示しているHTMLの親要素（divなど）です。
// querySelectorAll は、その中から条件に合う要素をすべて取得します。
// 'button[data-answer]' は CSSセレクターで、
// 「buttonタグで、data-answer 属性を持っているもの」という意味。
// <HTMLButtonElement> はTypeScriptの型注釈で、「取得した要素は全部ボタン要素だよ」と指定しています。
const optionButtons = quizContainer.querySelectorAll<HTMLButtonElement>(
    'button[data-answer]'
  );


  // forEach は取得したすべてのボタンに対して繰り返し処理を行います。
// それぞれのボタンに addEventListener で「クリックされた時」のイベントを登録。
// クリックされたら、handleAnswer 関数を呼び出します。
//! はTypeScriptの 非nullアサーション演算子 で、「nullやundefinedじゃないよ」とコンパイラに伝えるためのもの。
optionButtons.forEach((button) => {
    button.addEventListener('click', () => {
      handleAnswer(button.dataset.answer!);
    });
  });
}

// ユーザーが選択した答え（answer）を文字列で受け取る
// void は「戻り値はない」ことを意味します。

function handleAnswer(answer: string): void {
  // 現在回答中の問題を取得
  //今解いている問題（currentQuestionIndex番目の問題）を取得します。

  // 点数マップを用意
  const scoreMap: { [key: string]: number } = {
    "ほとんど当てはまらない": 1,
    "やや当てはまらない": 2,
    "当てはまる": 3,
    "かなり当てはまる": 4
  };

   // 回答に応じて点数加算
   //文字列に対応する点数を scoreMap から探して score に足す
   // 万が一 scoreMap にない回答だったら 0点とする（|| 0）
   score += scoreMap[answer] || 0;


  // ユーザーの回答を保存する配列に回答を追加
  //ユーザーが選んだ答えを配列 userAnswers に追加。
  //これで後でどの問題に何と答えたか記録できます。
  userAnswers.push(answer);

  // 現在の問題番号に１を追加し、次の問題に移行
  currentQuestionIndex++;

  // もしまだ問題が残っていたら renderQuestion() を呼んで次の問題を表示。
  // 全部終わったら renderResult() を呼んで結果表示に切り替えます。
  if (currentQuestionIndex < questions.length) {
    renderQuestion(); //次の問題へ
  } else {
    // 結果を表示する関数を実行
    renderResult();
  }
}


// まず、クイズ全体を表示しているHTMLの要素（id="quiz-container"）を取得します。
// もし要素がなければ何もしない（安全対策）という意味です。
function renderResult(): void {
  const quizContainer = document.getElementById("quiz-container");
  const description = document.getElementById("description"); //pタグの中身
  const mainImage = document.getElementById("mainImage"); //imgタグの中身
  if (!quizContainer) return;

  // pタグの中身の説明文を非表示にする
  //description に何らかの**有効なオブジェクトや値が入っていれば、「true」となり、if ブロック内の処理が実行される
// description を非表示
if (description) {
  description.style.display = "none";
}

// mainImage も非表示にするならこちら
if (mainImage) {
  mainImage.style.display = "none";
}
    // スコアに応じてEQレベルを判定
    let eqLevel = ""; //EQレベルの説明文を入れるための空の文字列変数を用意
    let eqLevelImage = ""; //画像
    if (score <= 12) {
      eqLevelImage = "/1.jpg";
      eqLevel = "あなたのEQは【とても低い】です。<br>感情の認識や表現が難しく、ストレスや対人関係で苦労することが多いかもしれません。<br>まずは自分の感情に気づく練習から始めましょう。";
    } else if (score <= 25) {
      eqLevelImage = "/2.jpg";
      eqLevel = "あなたのEQは【低い】です。<br>感情のコントロールや理解にまだ課題があります。<br>自己理解を深め、感情の整理や適切な表現を意識すると良いでしょう。";
    } else if (score <= 38) {
      eqLevelImage = "/3.jpg";
      eqLevel = "あなたのEQは【やや低い】です。<br>基本的な感情の把握はできていますが、ストレス時の対応や他者の感情理解には改善の余地があります。<br>日常的に感情を振り返る習慣を持つことが役立ちます。";
    } else if (score <= 50) {
      eqLevelImage = "/4.jpg";
      eqLevel = "あなたのEQは【普通】です。<br>自分や他人の感情をある程度理解し、日常生活でのコミュニケーションも安定しています。<br>さらに感情知能を伸ばすことで、より良い人間関係が築けるでしょう。";
    } else if (score <= 62) {
      eqLevelImage = "/5.jpg";
      eqLevel = "あなたのEQは【やや高い】です。<br>感情のコントロールや共感力があり、周囲との調和を大切にしています。<br>時には感情の深掘りや表現力を磨くと、さらに強みが活きます。";
    } else if (score <= 75) {
      eqLevelImage = "/6.jpg";
      eqLevel = "あなたのEQは【高い】です。<br>ストレス管理や対人スキルに優れ、他者の感情も敏感に察知できます。<br>リーダーシップやチームワークにおいても信頼される存在なのではないでしょうか。";
    } else if (score <= 87) {
      eqLevelImage = "/7.jpg";
      eqLevel = "あなたのEQは【とても高い】です。<br>感情を的確に理解し、柔軟に対応できるため、人間関係で大きな強みとなっています。<br>困難な状況でも冷静に対処でき、周囲の支えになっている存在なのではないでしょうか。";
    } else {
      eqLevelImage = "/8.jpg";
      eqLevel = "あなたのEQは【非常に高い】です。<br>感情知能の面で非常に優れており、自己理解・他者理解ともに深いレベルにあります。<br>複雑な感情の管理や調整が得意で、周囲に良い影響を与える素晴らしい資質の持ち主なのではないでしょうか。";
    }

  //「テスト終了！」の見出し
  // ユーザーの得点（スコア）を表示
  // もう一度チャレンジできる「もう一度挑戦」ボタンを表示
  quizContainer.innerHTML = `
    <h2>テスト終了！</h2>
    <p id="tokuten"><strong>あなたのEQは ${score} 点です！</strong></p>
    <img src="${eqLevelImage}">
<p id="scoreresult">${eqLevel}</p>
    <button id="restart">心を落ち着けてもう一度挑戦する</button>
  `;

  //「もう一度挑戦」ボタンのDOMを取得し、
  // ボタンが存在する場合（?.は「もしあれば」という意味）にクリックイベントを登録。
  // クリックされたら restartQuiz 関数が呼ばれてクイズが最初から始まる仕組みです。
  const restartButton = document.getElementById("restart");
  restartButton?.addEventListener("click", restartQuiz);
}

// // クイズの状態をリセットします。
// // currentQuestionIndex（今の問題番号）を0に戻す → 最初の問題からスタート
// // score（正解数）を0に戻す
// // userAnswers（ユーザーの答えの配列）を空にする
// // 最後に renderQuestion() を呼んで、最初の問題を表示します。
function restartQuiz(): void {
  // TOPページ（例：index.html）へリダイレクト
  window.location.href = "/";
}

// 初期表示
// ページのHTMLが完全に読み込まれてから（DOMContentLoaded）、
// 最初の問題を画面に表示するために renderQuestion() を呼んでいます。
document.addEventListener("DOMContentLoaded", () => {
  renderQuestion();
});
