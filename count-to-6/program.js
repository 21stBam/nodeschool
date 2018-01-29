//console.log("HELLO ES6");

//let name = process.argv[2];
//console.log(`Hello, ${name}!
//Your name lowercased is "${name.toLowerCase()}".`);

//var inputs = process.argv.slice(2);
//var results = inputs.map( x => x.charAt(0))
//                    .reduce( (x, y) => x + y);
//console.log(`[${inputs}] becomes "${results}"`);

//var foot = {
//    kick: function () {
//        this.yelp = "Ouch!";
//        setImmediate(() => console.log(this.yelp));
//    }
//};
//foot.kick();

//let userArray = process.argv.slice(2);
//let result = {};
//[, result.username, result.email] = userArray;
//console.log(result);

//let args = process.argv.slice(2);
//let min = Math.min(...args);
//console.log(`The minimum of [${args}] is ${min}`);

//module.exports = function average(...numbers) {
//  let result = 0;	
//  for(let i = 0; i < numbers.length; i++) {
//    result += numbers[i];
//   }
//  return result / numbers.length;
//};

//module.exports = function midpoint(lower = 0, upper = 1) {
//  return (lower + upper) / 2;
//};

//module.exports = function makeImportant(string, bangs = string.length) {
//  return string + "!".repeat(bangs);
//}


console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

function html(pieces, ...substitutions) {
    var result = pieces[0];
    for (var i = 0; i < substitutions.length; ++i) {
        result += escape(substitutions[i]) + pieces[i + 1];
    }

    return result;
}

function escape(s) {
    return s.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/'/g, "&apos;")
            .replace(/"/g, "&quot;");
}













