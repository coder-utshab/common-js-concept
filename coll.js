function greeting(greetingHandler, name) {
    greetingHandler(name);
}

function greetingHandler(name) {
    console.log("Good morning", name);
}

greeting(greetingHandler, "Bangladesh");