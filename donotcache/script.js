// Ranchers font-family 'ranchers', cursive
// input1     'input1', 'san serif'



var mainInput = document.getElementById('input1');
mainInput.addEventListener('input', geneneration1);

function geneneration1() {
    var input1 = document.getElementById('input1').value;
    var answer = document.getElementById('rnchrs');
    var answer2 = document.getElementById('thnRbt');
    var answer3 = document.getElementById('x2');
    var answer4 = document.getElementById('x3');
    var answer5 = document.getElementById('x4');
    var answer6 = document.getElementById('x5');
    var answer7 = document.getElementById('x6');
    var answer9 = document.getElementById('x8');
    var replacing = input1.replace(/a/g, "𝖆").replace(/b/g, "𝖇").replace(/c/g, "𝖈").replace(/d/g, "𝖉")
    .replace(/e/g, "𝖊").replace(/f/g, "𝖋").replace(/g/g, "𝖌").replace(/h/g, "𝖍").replace(/i/g, "𝖎").replace(/j/g, "𝖏")
    .replace(/k/g, "𝖐").replace(/l/g, "𝖑").replace(/m/g, "𝖒").replace(/n/g, "𝖓").replace(/o/g, "𝖔").replace(/p/g, "𝖕")
    .replace(/q/g, "𝖖").replace(/r/g, "𝖗").replace(/s/g, "𝖘").replace(/t/g, "𝖙").replace(/u/g, "𝖚").replace(/v/g, "𝖛")
    .replace(/w/g, "𝖜").replace(/x/g, "𝖝").replace(/y/g, "𝖞").replace(/z/g, "𝖟").replace(/A/g, "𝕬").replace(/B/g, "𝕭").replace(/C/g, "𝕮")
    .replace(/D/g, "𝕯").replace(/E/g, "𝕰").replace(/F/g, "𝕱").replace(/G/g, "𝕲").replace(/H/g, "𝕳").replace(/I/g, "𝕴")
    .replace(/J/g, "𝕵").replace(/K/g, "𝕶").replace(/L/g, "𝕷").replace(/M/g, "𝕸").replace(/N/g, "𝕹").replace(/O/g, "𝕺")
    .replace(/P/g, "𝕹").replace(/Q/g, "𝕼").replace(/R/g, "𝕽").replace(/S/g, "𝕾").replace(/T/g, "𝕿").replace(/U/g, "𝖀")
    .replace(/U/g, "𝖀").replace(/V/g, "𝖁").replace(/W/g, "𝖂").replace(/X/g, "𝖃").replace(/Y/g, "𝖄").replace(/Z/g, "𝖅");
    
    answer.value = replacing;

    var replacing2 = input1.replace(/A/g, "𝓐").replace(/B/g, "𝓑").replace(/C/g, "𝓒")
    .replace(/D/g, "𝓓").replace(/E/g, "𝓔").replace(/F/g, "𝓕").replace(/G/g, "𝓖").replace(/H/g, "𝓗").replace(/I/g, "𝓘")
    .replace(/J/g, "𝓙").replace(/K/g, "𝓚").replace(/L/g, "𝓛").replace(/M/g, "𝓜").replace(/N/g, "𝓝").replace(/O/g, "𝓞")
    .replace(/P/g, "𝓟").replace(/Q/g, "𝓠").replace(/R/g, "𝓡").replace(/S/g, "𝓢").replace(/T/g, "𝓣").replace(/U/g, "𝓤")
    .replace(/V/g, "𝓥").replace(/W/g, "𝓦").replace(/X/g, "𝓧").replace(/Y/g, "𝓨").replace(/Z/g, "𝓩")
    .replace(/a/g, "𝓪").replace(/b/g, "𝓫").replace(/c/g, "𝓬").replace(/d/g, "𝓭")
    .replace(/e/g, "𝓮").replace(/f/g, "𝓯").replace(/g/g, "𝓰").replace(/h/g, "𝓱").replace(/i/g, "𝓲").replace(/j/g, "𝓳")
    .replace(/k/g, "𝓴").replace(/l/g, "𝓵").replace(/m/g, "𝓶").replace(/n/g, "𝓷").replace(/o/g, "𝓸").replace(/p/g, "𝓹")
    .replace(/q/g, "𝓺").replace(/r/g, "𝓻").replace(/s/g, "𝓼").replace(/t/g, "𝓽").replace(/u/g, "𝓾").replace(/v/g, "𝓿")
    .replace(/w/g, "𝔀").replace(/x/g, "𝔁").replace(/y/g, "𝔂").replace(/z/g, "𝔃");

    answer2.value = replacing2;


    var replacing3 = input1.replace(/A/g, "𝔸").replace(/B/g, "𝔹").replace(/C/g, "ℂ")
    .replace(/D/g, "𝔻").replace(/E/g, "𝔼").replace(/F/g, "𝔽").replace(/G/g, "𝔾").replace(/H/g, "ℍ").replace(/I/g, "𝕀")
    .replace(/J/g, "𝕁").replace(/K/g, "𝕂").replace(/L/g, "𝕃").replace(/M/g, "𝕄").replace(/N/g, "ℕ").replace(/O/g, "𝕆")
    .replace(/P/g, "ℙ").replace(/Q/g, "ℚ").replace(/R/g, "ℝ").replace(/S/g, "𝕊").replace(/T/g, "𝕋").replace(/U/g, "𝕌")
    .replace(/V/g, "𝕍").replace(/W/g, "𝕎").replace(/X/g, "𝕏").replace(/Y/g, "𝕐").replace(/Z/g, "ℤ")
    .replace(/a/g, "𝕒").replace(/b/g, "𝕓").replace(/c/g, "𝕔").replace(/d/g, "𝕕")
    .replace(/e/g, "𝕖").replace(/f/g, "𝕗").replace(/g/g, "𝕘").replace(/h/g, "𝕙").replace(/i/g, "𝕚").replace(/j/g, "𝕛")
    .replace(/k/g, "𝕜").replace(/l/g, "𝕝").replace(/m/g, "𝕞").replace(/n/g, "𝕟").replace(/o/g, "𝕠").replace(/p/g, "𝕡")
    .replace(/q/g, "𝕢").replace(/r/g, "𝕣").replace(/s/g, "𝕤").replace(/t/g, "𝕥").replace(/u/g, "𝕦").replace(/v/g, "𝕧")
    .replace(/w/g, "𝕨").replace(/x/g, "𝕩").replace(/y/g, "𝕪").replace(/z/g, "𝕫")
    .replace(/1/g, "𝟙").replace(/2/g, "𝟚").replace(/3/g, "𝟛")
    .replace(/4/g, "𝟜").replace(/5/g, "𝟝").replace(/6/g, "𝟞").replace(/7/g, "𝟟").replace(/8/g, "𝟠").replace(/9/g, "𝟡")
    .replace(/0/g, "𝟘");

    answer3.value = replacing3;

    var replacing4 = input1.replace(/A/g, "𝐀").replace(/B/g, "𝐁").replace(/C/g, "𝐂")
    .replace(/D/g, "𝐃").replace(/E/g, "𝐄").replace(/F/g, "𝐅").replace(/G/g, "𝐆").replace(/H/g, "𝐇").replace(/I/g, "𝐈")
    .replace(/J/g, "𝐉").replace(/K/g, "𝐊").replace(/L/g, "𝐋").replace(/M/g, "𝐌").replace(/N/g, "𝐍").replace(/O/g, "𝐎")
    .replace(/P/g, "𝐏").replace(/Q/g, "𝐐").replace(/R/g, "𝐑").replace(/S/g, "𝐒").replace(/T/g, "𝐓").replace(/U/g, "𝐔")
    .replace(/V/g, "𝐕").replace(/W/g, "𝐖").replace(/X/g, "𝐗").replace(/Y/g, "𝐘").replace(/Z/g, "𝐙")
    .replace(/a/g, "𝐚").replace(/b/g, "𝐛").replace(/c/g, "𝐜").replace(/d/g, "𝐝")
    .replace(/e/g, "𝐞").replace(/f/g, "𝐟").replace(/g/g, "𝐠").replace(/h/g, "𝐡").replace(/i/g, "𝐢").replace(/j/g, "𝐣")
    .replace(/k/g, "𝐤").replace(/l/g, "𝐥").replace(/m/g, "𝐦").replace(/n/g, "𝐧").replace(/o/g, "𝐨").replace(/p/g, "𝐩")
    .replace(/q/g, "𝐪").replace(/r/g, "𝐫").replace(/s/g, "𝐬").replace(/t/g, "𝐭").replace(/u/g, "𝐮").replace(/v/g, "𝐯")
    .replace(/w/g, "𝐰").replace(/x/g, "𝐱").replace(/y/g, "𝐲").replace(/z/g, "𝐳").replace(/1/g, "𝟏").replace(/2/g, "𝟐").replace(/3/g, "𝟑")
    .replace(/4/g, "𝟒").replace(/5/g, "𝟓").replace(/6/g, "𝟔").replace(/7/g, "𝟕").replace(/8/g, "𝟖").replace(/9/g, "𝟗")
    .replace(/0/g, "𝟎");

    answer4.value = replacing4;

    var replacing5 = input1.replace(/A/g, "𝑨").replace(/B/g, "𝑩").replace(/C/g, "𝑪")
    .replace(/D/g, "𝑫").replace(/E/g, "𝑬").replace(/F/g, "𝑭").replace(/G/g, "𝑮").replace(/H/g, "𝑯").replace(/I/g, "𝑰")
    .replace(/J/g, "𝑱").replace(/K/g, "𝑲").replace(/L/g, "𝑳").replace(/M/g, "𝑴").replace(/N/g, "𝑵").replace(/O/g, "𝑶")
    .replace(/P/g, "𝑷").replace(/Q/g, "𝑸").replace(/R/g, "𝑹").replace(/S/g, "𝑺").replace(/T/g, "𝑻").replace(/U/g, "𝑼")
    .replace(/V/g, "𝑽").replace(/W/g, "𝑾").replace(/X/g, "𝑿").replace(/Y/g, "𝒀").replace(/Z/g, "𝒁")
    .replace(/a/g, "𝒂").replace(/b/g, "𝒃").replace(/c/g, "𝒄").replace(/d/g, "𝒅")
    .replace(/e/g, "𝒆").replace(/f/g, "𝒇").replace(/g/g, "𝒈").replace(/h/g, "𝒉").replace(/i/g, "𝒊").replace(/j/g, "𝒋")
    .replace(/k/g, "𝒌").replace(/l/g, "𝒍").replace(/m/g, "𝒎").replace(/n/g, "𝒏").replace(/o/g, "𝒐").replace(/p/g, "𝒑")
    .replace(/q/g, "𝒒").replace(/r/g, "𝒓").replace(/s/g, "𝒔").replace(/t/g, "𝒕").replace(/u/g, "𝒖").replace(/v/g, "𝒗")
    .replace(/w/g, "𝒘").replace(/x/g, "𝒙").replace(/y/g, "𝒚").replace(/z/g, "𝒛");

    answer5.value = replacing5;

    var replacing6 = input1.replace(/A/g, "🅰").replace(/B/g, "🅱").replace(/C/g, "🅲")
    .replace(/D/g, "🅳").replace(/E/g, "🅴").replace(/F/g, "🅵").replace(/G/g, "🅶").replace(/H/g, "🅷").replace(/I/g, "🅸")
    .replace(/J/g, "🅹").replace(/K/g, "🅺").replace(/L/g, "🅻").replace(/M/g, "🅼").replace(/N/g, "🅽").replace(/O/g, "🅾")
    .replace(/P/g, "🅿").replace(/Q/g, "🆀").replace(/R/g, "🆁").replace(/S/g, "🆂").replace(/T/g, "🆃").replace(/U/g, "🆄")
    .replace(/V/g, "🆅").replace(/W/g, "🆆").replace(/X/g, "🆇").replace(/Y/g, "🆈").replace(/Z/g, "🆉")
    .replace(/a/g, "🅰").replace(/b/g, "🅱").replace(/c/g, "🅲").replace(/d/g, "🅳")
    .replace(/e/g, "🅴").replace(/f/g, "🅵").replace(/g/g, "🅶").replace(/h/g, "🅷").replace(/i/g, "🅸").replace(/j/g, "🅹")
    .replace(/k/g, "🅺").replace(/l/g, "🅻").replace(/m/g, "🅼").replace(/n/g, "🅽").replace(/o/g, "🅾").replace(/p/g, "🅿")
    .replace(/q/g, "🆀").replace(/r/g, "🆁").replace(/s/g, "🆂").replace(/t/g, "🆃").replace(/u/g, "🆄").replace(/v/g, "🆅")
    .replace(/w/g, "🆆").replace(/x/g, "🆇").replace(/y/g, "🆈").replace(/z/g, "🆉");

    answer6.value = replacing6;


    var replacing7 = input1.replace(/A/g, "Ⓐ").replace(/B/g, "Ⓑ").replace(/C/g, "Ⓒ")
    .replace(/D/g, "Ⓓ").replace(/E/g, "Ⓔ").replace(/F/g, "Ⓕ").replace(/G/g, "Ⓖ").replace(/H/g, "Ⓗ").replace(/I/g, "Ⓘ")
    .replace(/J/g, "Ⓙ").replace(/K/g, "Ⓚ").replace(/L/g, "Ⓛ").replace(/M/g, "Ⓜ").replace(/N/g, "Ⓝ").replace(/O/g, "Ⓞ")
    .replace(/P/g, "Ⓟ").replace(/Q/g, "Ⓠ").replace(/R/g, "Ⓡ").replace(/S/g, "Ⓢ").replace(/T/g, "Ⓣ").replace(/U/g, "Ⓤ")
    .replace(/V/g, "Ⓥ").replace(/W/g, "Ⓦ").replace(/X/g, "Ⓧ").replace(/Y/g, "Ⓨ").replace(/Z/g, "Ⓩ")
    .replace(/a/g, "ⓐ").replace(/b/g, "ⓑ").replace(/c/g, "ⓒ").replace(/d/g, "ⓓ")
    .replace(/e/g, "ⓔ").replace(/f/g, "ⓕ").replace(/g/g, "ⓖ").replace(/h/g, "ⓗ").replace(/i/g, "ⓘ").replace(/j/g, "ⓙ")
    .replace(/k/g, "ⓚ").replace(/l/g, "ⓛ").replace(/m/g, "ⓜ").replace(/n/g, "ⓝ").replace(/o/g, "ⓞ").replace(/p/g, "ⓟ")
    .replace(/q/g, "ⓠ").replace(/r/g, "ⓡ").replace(/s/g, "ⓢ").replace(/t/g, "ⓣ").replace(/u/g, "ⓤ").replace(/v/g, "ⓥ")
    .replace(/w/g, "ⓦ").replace(/x/g, "ⓧ").replace(/y/g, "ⓨ").replace(/z/g, "ⓩ").replace(/1/g, "①").replace(/2/g, "②").replace(/3/g, "③")
    .replace(/4/g, "④").replace(/5/g, "⑤").replace(/6/g, "⑥").replace(/7/g, "⑦").replace(/8/g, "⑧").replace(/9/g, "⑨").replace(/0/g, "⓪");

    answer7.value = replacing7;


    var replacing9 = input1.replace(/A/g, "A͓̽").replace(/B/g, "B͓̽").replace(/C/g, "C͓̽")
    .replace(/D/g, "D͓̽").replace(/E/g, "E͓̽").replace(/F/g, "F͓̽").replace(/G/g, "G͓̽").replace(/H/g, "H͓̽").replace(/I/g, "I͓̽")
    .replace(/J/g, "J͓̽").replace(/K/g, "K͓̽").replace(/L/g, "L͓̽").replace(/M/g, "M͓̽").replace(/N/g, "N͓̽").replace(/O/g, "O͓̽")
    .replace(/P/g, "P͓̽").replace(/Q/g, "Q͓̽").replace(/R/g, "R͓̽").replace(/S/g, "S͓̽").replace(/T/g, "T͓̽").replace(/U/g, "U͓̽")
    .replace(/V/g, "V͓̽").replace(/W/g, "W͓̽").replace(/X/g, "X͓̽").replace(/Y/g, "Y͓̽").replace(/Z/g, "Z͓̽")
    .replace(/a/g, "a͓̽").replace(/b/g, "b͓̽").replace(/c/g, "c͓̽").replace(/d/g, "d͓̽")
    .replace(/e/g, "e͓̽").replace(/f/g, "f͓̽").replace(/g/g, "g͓̽").replace(/h/g, "h͓̽").replace(/i/g, "i͓̽").replace(/j/g, "j͓̽")
    .replace(/k/g, "k͓̽").replace(/l/g, "l͓̽").replace(/m/g, "m͓̽").replace(/n/g, "n͓̽").replace(/o/g, "o͓̽").replace(/p/g, "p͓̽")
    .replace(/q/g, "q͓̽").replace(/r/g, "r͓̽").replace(/s/g, "s͓̽").replace(/t/g, "t͓̽").replace(/u/g, "u͓̽").replace(/v/g, "v͓̽")
    .replace(/w/g, "w͓̽").replace(/x/g, "x͓̽").replace(/y/g, "y͓̽").replace(/z/g, "z͓̽").replace(/1/g, "1͓̽").replace(/2/g, "2͓̽").replace(/3/g, "3͓̽")
    .replace(/4/g, "4͓̽").replace(/5/g, "5͓̽").replace(/6/g, "6͓̽").replace(/7/g, "7͓̽").replace(/8/g, "8͓̽").replace(/9/g, "9͓̽").replace(/0/g, "0͓̽");

    answer9.value = replacing9;
}   


document.getElementById('copy1').addEventListener('click', () => {
    let cbtn = document.getElementById('copy1')
    let answer = document.getElementById('thnRbt');
    answer.select();
    answer.setSelectionRange(0, 9999999999999);
    document.execCommand('copy');
    showing1(cbtn);
});

document.getElementById('copy2').addEventListener('click', () => {
    let cbtn = document.getElementById('copy2')
    let answer = document.getElementById('rnchrs');
    answer.select();
    answer.setSelectionRange(0, 9999999999999);
    document.execCommand('copy');
    showing1(cbtn);
});


document.getElementById('copy3').addEventListener('click', () => {
    let cbtn = document.getElementById('copy3')
    let answer = document.getElementById('x2');
    answer.select();
    answer.setSelectionRange(0, 9999999999999);
    document.execCommand('copy');
    showing1(cbtn);
});


document.getElementById('copy4').addEventListener('click', () => {
    let cbtn = document.getElementById('copy4')
    let answer = document.getElementById('x3');
    answer.select();
    answer.setSelectionRange(0, 9999999999999);
    document.execCommand('copy');
    showing1(cbtn);
});


document.getElementById('copy5').addEventListener('click', () => {
    let cbtn = document.getElementById('copy5')
    let answer = document.getElementById('x4');
    answer.select();
    answer.setSelectionRange(0, 9999999999999);
    document.execCommand('copy');
    showing1(cbtn);
});

document.getElementById('copy6').addEventListener('click', () => {
    let cbtn = document.getElementById('copy6')
    let answer = document.getElementById('x5');
    answer.select();
    answer.setSelectionRange(0, 9999999999999);
    document.execCommand('copy');
    showing1(cbtn);
});

document.getElementById('copy7').addEventListener('click', () => {
    let cbtn = document.getElementById('copy7')
    let answer = document.getElementById('x6');
    answer.select();
    answer.setSelectionRange(0, 9999999999999);
    document.execCommand('copy');
    showing1(cbtn);
});


document.getElementById('copy9').addEventListener('click', () => {
    let cbtn = document.getElementById('copy9')
    let answer = document.getElementById('x8');
    answer.select();
    answer.setSelectionRange(0, 9999999999999);
    document.execCommand('copy');
    showing1(cbtn);
});


var tarehe = new Date();
var mwaka = tarehe.getFullYear()
var mwezi = tarehe.getMonth() + 1
var leo = tarehe.getDate()
var saa = tarehe.getHours()
var dakika = tarehe.getMinutes()
var sekunde = tarehe.getSeconds()


document.getElementById('yaLeo').innerHTML = leo + "/" + mwezi + "/" + mwaka

function showing1(copyBtn) {
    let defaultHTML = copyBtn.innerHTML
    copyBtn.style.backgroundColor = 'green'
    copyBtn.style.color = 'white'
    copyBtn.innerText = 'Copied ✔'
    setTimeout(()=>{
        copyBtn.style.backgroundColor = ''
        copyBtn.style.color = ''
        copyBtn.innerHTML = defaultHTML
    }, 2000)
}
