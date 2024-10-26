const words = [
    "apple", "banana", "orange", "grape", "kiwi",
    "mango", "lemon", "peach", "cherry", "apricot",
    "plum", "pear", "pineapple", "strawberry", "blueberry",
    "raspberry", "coconut", "fig", "date", "pomegranate",
    "melon", "tangerine", "nectarine", "lime", "papaya",
    "watermelon", "passionfruit", "cantaloupe", "guava", "dragonfruit",
    "jackfruit", "persimmon", "zucchini", "pumpkin", "carrot",
    "broccoli", "spinach", "lettuce", "cabbage", "cauliflower",
    "peas", "bean", "potato", "sweetpotato", "corn",
    "onion", "garlic", "ginger", "celery", "beet",
    "radish", "pepper", "eggplant", "tomato", "cucumber",
    "mushroom", "artichoke", "asparagus", "kale", "chard",
    "arugula", "parsley", "basil", "thyme", "rosemary",
    "sage", "oregano", "mint", "cilantro", "dill",
    "chives", "tarragon", "fennel", "curry", "paprika",
    "mustard", "soy", "sesame", "chili", "vinegar",
    "olive", "coconut", "almond", "walnut", "pecan",
    "peanut", "cashew", "hazelnut", "pistachio", "chestnut",
    "sunflower", "pumpkinseed", "flaxseed", "chia", "hemp"
];

const russianWords = [
    "яблоко",
    "банан",
    "апельсин",
    "виноград",
    "киви",
    "манго",
    "лимон",
    "персик",
    "вишня",
    "абрикос",
    "слива",
    "груша",
    "ананас",
    "клубника",
    "черника",
    "малина",
    "кокос",
    "инжир",
    "финик",
    "гранат",
    "дыня",
    "мандарин",
    "нектарин",
    "лайм",
    "папайя",
    "арбуз",
    "маракуйя",
    "канталупа",
    "гуава",
    "питахайя",
    "джекфрут",
    "хурма",
    "цуккини",
    "тыква",
    "морковь",
    "брокколи",
    "шпинат",
    "салат",
    "капуста",
    "цветная капуста",
    "горох",
    "боб",
    "картофель",
    "батат",
    "кукуруза",
    "лук",
    "чеснок",
    "имбирь",
    "сельдерей",
    "свекла",
    "редис",
    "перец",
    "баклажан",
    "помидор",
    "огурец",
    "гриб",
    "артишок",
    "спаржа",
    "кейл",
    "мангольд",
    "рукола",
    "петрушка",
    "базилик",
    "тимьян",
    "розмарин",
    "шалфей",
    "орегано",
    "мята",
    "кинза",
    "укроп",
    "чесночные стрелки",
    "эстрагон",
    "фенхель",
    "карри",
    "паприка",
    "горчица",
    "соя",
    "кунжут",
    "чили",
    "уксус",
    "оливка",
    "миндаль",
    "грецкий орех",
    "пекан",
    "арахис",
    "кешью",
    "фундук",
    "фисташка",
    "каштан",
    "подсолнух",
    "тыквенные семечки",
    "семена льна",
    "чиа",
    "конопля"
];

const wordsAzerbaijani = [
    "alma", "banan", "portağal", "üzüm", "kiwi",
    "mango", "limon", "şeftəli", "xə lemons", "abrikos",
    "gavalı", "armud", "ananas", "qızılgül", "mavi qarağat",
    "moruq", "hindistancevizi", "quruğ", "xurma", "nar",
    "qarpız", "tərkib", "nektarin", "lima", "papaýa",
    "şirniyyat", "passionfruit", "kantalupa", "guava", "dragonfruit",
    "jackfruit", "persimon", "badımcan", "düyü", "kartof",
    "şirin kartof", "qarğıdalı", "soğan", "sarımsaq", "zəncəfil",
    "kərəviz", "xreman", "turp", "biber", "badımcan",
    "pomidor", "xiyar", "göbələk", "artişok",
    "kələm", "kale", "mangoş", "cəfəri", "reyhan",
    "əzma", "oregano", "nanə", "koriander", "dill",
     "tarragon", "şehriyə", "karrı", "paprika",
    "mürəbbə", "soya", "acı", "sirkə",
    "zeytun", "hindistancevizi", "badam", "qoz", 
     "kəşş", "fındıq", "fıstıq", "kestane",
    "günəbaxan", "şirin fıstıq", "kətan toxumu", "chia", "kenevir"
];

let players = []
function start() {
    let lang = document.getElementById('lang').value;
    if (lang == "AZ") {
        word = wordsAzerbaijani[Math.floor(Math.random() * wordsAzerbaijani.length)];
    }
    else if (lang == "RU") {
        word = russianWords[Math.floor(Math.random() * russianWords.length)];
    }
    else if (lang == "EN") {
        word = words[Math.floor(Math.random() * words.length)];
    }
    document.getElementById("count").style.display = "none";
    document.getElementById("start").style.display = "none"; //elave
    let player_count = document.getElementById("count").value;
    if (player_count < 3 || player_count > 99) {
        document.getElementById("error").style.display = "block";
        document.getElementById("start").style.display = "inline" //elave
    }
    else {
        document.getElementById("error").style.display = "none";
        document.querySelector(".btn").style.display = "inline";
        console.log(player_count);
    
        for (let i = 0; i < player_count; i++) {
            players.push(word)
        }

        let spy = Math.floor(Math.random() * players.length)
        players[spy] = "spy";
        console.log(players);
    }
    
}

function select() {
    document.getElementById("select").style.display = "none"; //elave
    document.getElementById("card").style.display = "block";
    let player = Math.floor(Math.random() * players.length)
    console.log(players[player]);
    document.getElementById('h1').innerText = players[player]
    players.splice(player, 1)
    console.log(players);
}

function hide() {
    document.getElementById("select").style.display = "inline"; //elave
    document.getElementById("card").style.display = "none";
    if (players.length == 0) {
        document.getElementById("box").style.display = "none";
        document.getElementById("new").style.display = "inline";
    }
}