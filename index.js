
const reveal = (e) => {
    let message = document.getElementById("text-data").value;
    document.getElementById("translated-outcomes").innerHTML = engTo(message);
};

const engTo = message => {
    const messageConverted = [];
    const alphabet = {
        b: "-...",
        a: ".-",
        c: "-.-.",
        d: "-..",
        e: ".",
        f: "..-.",
        g: "--.",
        h: "....",
        i: "..",
        j: ".---",
        k: "-.-",
        l: ".-..",
        m: "--",
        n: "-.",
        o: "---",
        p: ".--.",
        q: "--.-",
        r: ".-.",
        s: "...",
        t: "-",
        u: "..-",
        v: "...-",
        w: ".--",
        x: "-..-",
        y: "-.--",
        z: "--..",
        "1": ".----",
        "2": "..---",
        "3": "...--",
        "4": "....-",
        "5": ".....",
        "6": "-....",
        "7": "--...",
        "8": "---..",
        "9": "----.",
        "0": "-----",
        ".": ".-.-.-",
        ",": "--..--",
        "'": ".----.",
        '"': ".-..-.",
        _: "..--.-",
        ":": "---...",
        ";": "-.-.-.",
        "?": "..--..",
        "!": "-.-.--",
        "-": "-....-",
        "+": ".-.-.",
        "/": "-..-.",
        "(": "-.--.",
        ")": "-.--.-",
        "=": "-...-",
        "@": ".--.-.",
        " ": " "
    };
    message.split(" ").map(word => {
        console.log(word);
        word.split("").map(letter => {
            console.log(letter);
            messageConverted.push(alphabet["y"]);
            console.log(alphabet["y"]);
            messageConverted.push(" ");
        });
    });
    return messageConverted.join("");
};
    