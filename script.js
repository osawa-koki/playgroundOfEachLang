
const langs = [
  { name: "C++", url: "https://www.sololearn.com/compiler-playground/cpp" },
  { name: "C#", url: "https://sharplab.io/" },
  { name: "Go", url: "https://go.dev/play/" },
  { name: "Haskell", url: "https://tryhaskell.org/" },
  { name: "Ocaml", url: "https://ocaml.org/play" },
  { name: "Scala", url: "https://scastie.scala-lang.org/" },
  { name: "Java", url: "https://www.sololearn.com/compiler-playground/java" },
  { name: "VB.NET", url: "https://www.tutorialspoint.com/compile_vb.net_online.php" },
  { name: "PHP", url: "https://www.tehplayground.com/" },
  { name: "Node.js", url: "https://codesandbox.io/s/5tdwp" },
  { name: "F#", url: "https://www.jdoodle.com/compile-fsharp-online/" },
  { name: "Ruby", url: "https://try.ruby-lang.org/playground/" },
  { name: "Perl", url: "https://perlbanjo.com/" },
  { name: "SQL", url: "https://www.db-fiddle.com/" },
  { name: "R", url: "https://rdrr.io/snippets/" },
  { name: "Kotlin", url: "https://play.kotlinlang.org/" },
  { name: "Swift", url: "http://online.swiftplayground.run/" },
  { name: "elm", url: "https://ellie-app.com/" },
].sort((a, b) => a.name.localeCompare(b.name));

const emojis = ['🥺', '😅', '😂', '😇', '😍', '😎', '😘', '😜', '😝', '😡', '😢', '😭', '😱', '😳', '😵', '😷', '🤔', '🤗', '🤡', '🤣', '🤥', '🤧', '🤩', '🤪', '🤫', '🤭', '🤮', '🤯', '🤰', '🤱', '🤲', '🤳', '🤴', '🤵', '🤶', '🤷', '🤸', '🤹', '🤼', '🤽', '🤾', '🤿', '🥀', '🥁', '🥂', '🥃', '🥄', '🥅', '🥇', '🥈', '🥉', '🥊', '🥋', '🥌', '🥍', '🥎', '🥏', '🥐', '🥑', '🥒', '🥓', '🥔', '🥕', '🥖', '🥗', '🥘', '🥙', '🥚', '🥛', '🥜', '🥝', '🥞', '🥟', '🥠', '🥡', '🥢', '🥣', '🥤', '🥥', '🥦', '🥧', '🥨', '🥩', '🥪', '🥫', '🥬', '🥭', '🥮', '🥯', '🥰', '🥱', '🥳', '🥴', '🥵', '🥶', '🥺', '🥼', '🥽', '🥾', '🥿', '🦀', '🦁', '🦂', '🦃', '🦄'];
const emoji = () => emojis[Math.floor(Math.random() * emojis.length)];

$(function() {
  const $content = $("#content");
  // テーブルを作成
  let table = "";
  table += `<table class="table table-striped table-hover table-bordered">`;
  langs.forEach(lang => {
    // テーブルに行を追加
    table += `<tr><td>${lang.name}</td><td>${lang.url}</td><td><a href="${lang.url}" target="_blank" class="btn btn-outline-primary">Go! ${emoji()}</a></td></tr>`;
  });
  // テーブルを閉じる
  table += `</table>`;
  // テーブルを表示
  $content.html(table);
});
