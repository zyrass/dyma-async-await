require('colors');

setTimeout(() => {
    console.log("------------------------------------------------------------------".grey);
    console.log("func_1".toUpperCase().brightRed)
    console.log("syntaxe".toUpperCase().brightBlue)
    console.log(`
    async function func_1() {}
    console.log(func_1);\n`.grey)
    
    console.log("résultat".toUpperCase().brightGreen)
    async function func_1() {}
    console.log(func_1);
    console.log("------------------------------------------------------------------".grey);
}, 1000);


setTimeout(() => {
    console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++".white);
    console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++".white);
    console.log("------------------------------------------------------------------".grey);
    console.log("func_2".toUpperCase().brightRed)
    console.log("syntaxe".toUpperCase().brightBlue)
    console.log(`
    async function func_2() {
        return console.log("Je suis le résultat de la func_2".yellow);
    }
    console.log(func_2());\n`.grey)
    
    console.log("résultat".toUpperCase().brightGreen)
    async function func_2() {
        return console.log("Je suis le résultat de la func_2".yellow);
    }
    console.log(func_2());
    console.log("------------------------------------------------------------------".grey);
}, 3000);


setTimeout(() => {
    console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++".white);
    console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++".white);
    console.log("------------------------------------------------------------------".grey);
    console.log("func_3".toUpperCase().brightRed)
    console.log("syntaxe".toUpperCase().brightBlue)
    console.log(`
    async function func_3() {
        return console.log("Je suis le résultat de la func_3".yellow);
    }
    console.log(func_3().then(result => console.log(result)));\n`.grey)
    
    console.log("résultat".toUpperCase().brightGreen)
    async function func_3() {
        return "Je suis le résultat de la func_3".yellow;
    }
    console.log(func_3().then(result => console.log(result)));
    console.log("------------------------------------------------------------------".grey);
}, 5000);


setTimeout(() => {
    console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++".white);
    console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++".white);
    console.log("------------------------------------------------------------------".grey);
    console.log("func_4".toUpperCase().brightRed)
    console.log("syntaxe".toUpperCase().brightBlue)
    console.log(`
    const promise_func_4 = new Promise( (resolve, reject) => {
        resolve("Je suis 'resolve' la promise_func_4".yellow);
    })

    setTimeout(() => {
        console.log("résultat".toUpperCase().brightGreen);
        async function func_4() {
            return promise_func_4;
        }
        func_4().then(result => console.log(result))
    },1000)
    `.grey)

    const promise_func_4 = new Promise( (resolve, reject) => {
        resolve("Je suis 'resolve' la promise_func_4".yellow);
    })

    setTimeout(() => {
        console.log("résultat".toUpperCase().brightGreen);
        async function func_4() {
            return promise_func_4;
        }
        func_4().then(result => console.log(result))
    },1000)

    console.log("------------------------------------------------------------------".grey);
}, 7000);

setTimeout(() => {
    console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++".white);
    console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++".white);
    console.log("------------------------------------------------------------------".grey);
    console.log("func_5".toUpperCase().brightRed)
    console.log("syntaxe".toUpperCase().brightBlue)
    console.log(`
    const promise_func_5 = new Promise( (resolve, reject) => {
        resolve("Je suis 'resolve' la promise_func_5".yellow);
    })

    setTimeout(() => {
        console.log("résultat".toUpperCase().brightGreen);
        async function func_5() {
            return promise_func_5.then(result => console.log(result));
        }
        func_5();
    },1000)
    `.grey)

    const promise_func_5 = new Promise( (resolve, reject) => {
        resolve("Je suis 'resolve' la promise_func_5".yellow);
    })

    setTimeout(() => {
        console.log("résultat".toUpperCase().brightGreen);
        async function func_5() {
            return promise_func_5.then(result => console.log(result));
        }
        func_5();
    },1000)

    console.log("------------------------------------------------------------------".grey);
}, 10000);

setTimeout(() => {
    console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++".white);
    console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++".white);
    console.log("------------------------------------------------------------------".grey);
    console.log("func_6".toUpperCase().brightRed)
    console.log("syntaxe".toUpperCase().brightBlue)
    console.log(`
    const promise_func_6 = new Promise( (resolve, reject) => {
        resolve("Je suis 'resolve' la promise_func_6".yellow);
    })

    setTimeout(() => {
        console.log("résultat".toUpperCase().brightGreen);
        async function func_6() {
            const value = promise_func_6
            console.log(value);
        }
        func_6();
    },1000)
    `.grey)

    const promise_func_6 = new Promise( (resolve, reject) => {
        resolve("Je suis 'resolve' la promise_func_6".yellow);
    })

    setTimeout(() => {
        console.log("résultat".toUpperCase().brightGreen);
        async function func_6() {
            const value = promise_func_6
            console.log(value);
            return value;
        }
        func_6();
    },1000)

    console.log("------------------------------------------------------------------".grey);
}, 13000);


setTimeout(() => {
    console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++".white);
    console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++".white);
    console.log("------------------------------------------------------------------".grey);
    console.log("func_7".toUpperCase().brightRed)
    console.log("syntaxe".toUpperCase().brightBlue)
    console.log(`
    const promise_func_7 = new Promise( (resolve, reject) => {
        resolve("Je suis 'resolve' la promise_func_7".yellow);
    })

    setTimeout(() => {
        console.log("résultat".toUpperCase().brightGreen);
        async function func_7() {
            const value = await promise_func_7
            console.log(value);
            return value;
        }
        func_7();
    },1000)
    `.grey)

    const promise_func_7 = new Promise( (resolve, reject) => {
        resolve("Je suis 'resolve' la promise_func_7".yellow);
    })

    setTimeout(() => {
        console.log("résultat".toUpperCase().brightGreen);
        async function func_7() {
            const value = await promise_func_7
            console.log(value);
            return value;
        }
        func_7();
    },1000)

    console.log("------------------------------------------------------------------".grey);
}, 15000);

setTimeout(() => {
    console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++".white);
    console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++".white);
    console.log("------------------------------------------------------------------".grey);
    console.log("func_8".toUpperCase().brightRed)
    console.log("syntaxe".toUpperCase().brightBlue)
    console.log(`
    const promise_func_8 = new Promise( (resolve, reject) => {
        resolve("Je suis 'resolve' la promise_func_8".yellow);
    })

    setTimeout(() => {
        console.log("résultat".toUpperCase().brightGreen);
        try {
            const value = await promise_func_8
            console.log(value);
            return value;
        } catch(e) {
            console.error(e)
        }
        func_8();
    },1000)
    `.grey)

    const promise_func_8 = new Promise( (resolve, reject) => {
        resolve("Je suis 'resolve' la promise_func_8".yellow);
    })

    setTimeout(() => {
        console.log("résultat".toUpperCase().brightGreen);
        async function func_8() {
            try {
                const value = await promise_func_8
                console.log(value);
                return value;
            } catch(e) {
                console.error(e)
            }
        }
        func_8();
    },1000)

    console.log("------------------------------------------------------------------".grey);
}, 18000);

setTimeout(() => {
    console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++".white);
    console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++".white);
    console.log("------------------------------------------------------------------".grey);
    console.log("func_8".toUpperCase().brightRed)
    console.log("syntaxe".toUpperCase().brightBlue)
    console.log(`
    const promise_func_9a = new Promise( (resolve, reject) => {
        resolve("Je suis 'resolve' la promise_func_9a".yellow);
    })
    const promise_func_9b = new Promise( (resolve, reject) => {
        resolve("Je suis 'resolve' la promise_func_9b".yellow);
    })

    setTimeout(() => {
        console.log("résultat".toUpperCase().brightGreen);
        async function func_9() {
            try {
                const value = await Promise.all([
                    promise_func_9a,
                    promise_func_9b
                ])
                console.log(value);
                return value;
            } catch(e) {
                console.error(e)
            }
        }
        func_9();
    },1000)
    `.grey)

    const promise_func_9a = new Promise( (resolve, reject) => {
        resolve("Je suis 'resolve' la promise_func_9a".yellow);
    })
    const promise_func_9b = new Promise( (resolve, reject) => {
        resolve("Je suis 'resolve' la promise_func_9b".yellow);
    })

    setTimeout(() => {
        console.log("résultat".toUpperCase().brightGreen);
        async function func_9() {
            try {
                const value = await Promise.all([
                    promise_func_9a,
                    promise_func_9b
                ])
                console.log({value});
                return value;
            } catch(e) {
                console.error(e)
            }
        }
        func_9();
    },1000)

    console.log("------------------------------------------------------------------".grey);
}, 21000);