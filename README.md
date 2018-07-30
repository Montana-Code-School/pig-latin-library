This is a simple Javascript Pig Latin translator.

### Installation:
$ npm i pig-latin-library

#### The Rules of Pig Latin:

For words that begin with consonant sounds, all letters before the initial
vowel are placed at the end of the word sequence, then “ay” is added.

For words that start with a vowel, all you need to do is add “way” and “ultimate” becomes “ultimateway”.

For words that begins with “y” is treated as a consonant word “yellow” becomes “ellowyay”.

Capitalized words will also be capitalized after test is return.

Singular punctuation is maintained at the beginning and end of a sentence.


#### Example Usage:
```
const pigLatin = require("pig-latin-library");

pigLatin('This is a pig latin library.');
```
#### Output:
```
Isthay isway away igpay atinlay ibrarylay.  
```
