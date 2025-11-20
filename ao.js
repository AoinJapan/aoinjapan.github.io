const quotesByColor = {
  asu: [
    { text: "藍は深まるほどに美しい。", author: "日本のことわざ" },
    { text: "静けさの中にこそ、力が宿る。", author: "老子" }
  ],
  sakura: [
    { text: "花のいのちは短くて、苦しきことのみ多かりき。", author: "林芙美子" },
    { text: "人の心も桜のように、散りゆくからこそ美しい。", author: "匿名" }
  ],
  matcha: [
    { text: "日日是好日。", author: "禅語" },
    { text: "自然に学べば、心は澄んでいく。", author: "西田幾多郎" }
  ],
  kurenai: [
    { text: "情熱はすべての原動力である。", author: "ゲーテ" },
    { text: "命あるかぎり、燃えよ。", author: "高村光太郎" }
  ],
  kin: [
    { text: "光はすべての陰の向こう側にある。", author: "ミケランジェロ" },
    { text: "運は準備された心に微笑む。", author: "ルイ・パスツール" }
  ],
  sumi: [
    { text: "墨の黒こそ、光を引き立てる。", author: "日本の美意識" },
    { text: "余白こそが、世界をつくる。", author: "谷崎潤一郎" }
  ]
};

const buttons = document.querySelectorAll(".color-btn");
const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");

// ボタンにイベント設定
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const key = btn.dataset.color;
    showQuote(key);
  });
});

function showQuote(colorKey) {
  const list = quotesByColor[colorKey];
  if (!list || list.length === 0) return;

  const q = list[Math.floor(Math.random() * list.length)];

  quoteText.textContent = `“${q.text}”`;
  quoteAuthor.textContent = `— ${q.author}`;
}
