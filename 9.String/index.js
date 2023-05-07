let name1 = 'Rohan';
for(let i in name1){
    console.log(name1[i]);
}

let name2 = "Sandeep";

// use of Template literals

let sentance1 = `${name1} and ${name2} is Friend`;
console.log(sentance1);

let sentance2 = `Earth is a "PLANET"`;
console.log(sentance2);

// Escape sequence characters
let sentance3 = 'Mango is a \'Fruit\'';
console.log(sentance3);

let sentance4 = "Mango is a \"Fruit\"";
console.log(sentance4);

let sentance5 = "Javascript \nis \nawesome";
console.log(sentance5);

let sentance6 = "Javascript \tis \tawesome";
console.log(sentance6);

let sentance7 = "Javascript is \rawesome";
let pattern = /\r/;
let result = sentance7.search(pattern);
console.log(result);

// String quotes

/* \f matches form-feed.
\r matches carriage return.
\n matches linefeed.
\t matches horizontal tab.
\v matches vertical tab.
\0 matches NUL character.
[\b] matches backspace.
\s matches whitespace (short for [\f\n\r\t\v\u00A0\u2028\u2029]).
\S matches anything but a whitespace (short for [^\f\n\r\t\v\u00A0\u2028\u2029]).
\w matches any alphanumerical character (word characters) including underscore (short for [a-zA-Z0-9_]).
\W matches any non-word characters (short for [^a-zA-Z0-9_]).
\d matches any digit (short for [0-9]).
\D matches any non-digit (short for [^0-9]).
\b matches a word boundary (the position between a word and a space).
\B matches a non-word boundary (short for [^\b]).
\cX matches a control character. E.g: \cm matches control-M.
\xhh matches the character with two characters of hexadecimal code hh.
\uhhhh matches the Unicode character with four characters of hexadecimal code hhhh. */