
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

const emojis = ['๐ฅบ', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐ก', '๐ข', '๐ญ', '๐ฑ', '๐ณ', '๐ต', '๐ท', '๐ค', '๐ค', '๐คก', '๐คฃ', '๐คฅ', '๐คง', '๐คฉ', '๐คช', '๐คซ', '๐คญ', '๐คฎ', '๐คฏ', '๐คฐ', '๐คฑ', '๐คฒ', '๐คณ', '๐คด', '๐คต', '๐คถ', '๐คท', '๐คธ', '๐คน', '๐คผ', '๐คฝ', '๐คพ', '๐คฟ', '๐ฅ', '๐ฅ', '๐ฅ', '๐ฅ', '๐ฅ', '๐ฅ', '๐ฅ', '๐ฅ', '๐ฅ', '๐ฅ', '๐ฅ', '๐ฅ', '๐ฅ', '๐ฅ', '๐ฅ', '๐ฅ', '๐ฅ', '๐ฅ', '๐ฅ', '๐ฅ', '๐ฅ', '๐ฅ', '๐ฅ', '๐ฅ', '๐ฅ', '๐ฅ', '๐ฅ', '๐ฅ', '๐ฅ', '๐ฅ', '๐ฅ', '๐ฅ ', '๐ฅก', '๐ฅข', '๐ฅฃ', '๐ฅค', '๐ฅฅ', '๐ฅฆ', '๐ฅง', '๐ฅจ', '๐ฅฉ', '๐ฅช', '๐ฅซ', '๐ฅฌ', '๐ฅญ', '๐ฅฎ', '๐ฅฏ', '๐ฅฐ', '๐ฅฑ', '๐ฅณ', '๐ฅด', '๐ฅต', '๐ฅถ', '๐ฅบ', '๐ฅผ', '๐ฅฝ', '๐ฅพ', '๐ฅฟ', '๐ฆ', '๐ฆ', '๐ฆ', '๐ฆ', '๐ฆ'];
const emoji = () => emojis[Math.floor(Math.random() * emojis.length)];

$(function() {
  const $content = $("#content");
  // ใใผใใซใไฝๆ
  let table = "";
  table += `<table class="table table-striped table-hover table-bordered">`;
  langs.forEach(lang => {
    // ใใผใใซใซ่กใ่ฟฝๅ 
    table += `<tr><td>${lang.name}</td><td>${lang.url}</td><td><a href="${lang.url}" target="_blank" class="btn btn-outline-primary">Go! ${emoji()}</a></td></tr>`;
  });
  // ใใผใใซใ้ใใ
  table += `</table>`;
  // ใใผใใซใ่กจ็คบ
  $content.html(table);
});
