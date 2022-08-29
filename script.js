let area = document.getElementById('area');
let clear = document.getElementById('btn');
let word = document.getElementById('word');
let char = document.getElementById('char');

area.addEventListener('input', function () {
    let text = area.value;
    char.textContent = text.length;
    
    word.textContent = text.trim().split(" ").filter(function(e){
        return e != "";
    }).length;

});
clear.addEventListener('click', function () {
    area.value = "";
    word.textContent = "0";
    char.textContent = "0";
});
