### Refresher
http://conceptf1.blogspot.nl/2013/11/javascript-closures.html
https://toddmotto.com/everything-you-wanted-to-know-about-javascript-scope/
http://www.adequatelygood.com/JavaScript-Scoping-and-Hoisting.html
https://medium.freecodecamp.com/5-javascript-bad-parts-that-are-fixed-in-es6-c7c45d44fd81

https://www.reddit.com/r/learnjavascript/comments/1v6n8p/closure_explain_likei_am_in_high_school/?st=ixsp0mbe&sh=5526d150
A VERY popular StackOverflow article:
http://stackoverflow.com/questions/111102/how-do-javascript-closures-work

### Homework 

1. 
Our esteemed Italian, Mauro, gave an excellent lecture on IIFE, scope, and related topics. So, let's continue to learn a little more about scope and Closures. 

Please solve the following three questions as a warmup to thinking about scope. 

https://www.freecodecamp.com/challenges/global-scope-and-functions
https://www.freecodecamp.com/challenges/local-scope-and-functions
https://www.freecodecamp.com/challenges/global-vs-local-scope-in-functions

2. 
What will be the output of the following code - and more importantly - WHY? 

```
for (var i = 0; i < 3; i++) {
      setTimeout(function() { alert(i); }, 1000 + i);
}
```

3. 
Write a function that would allow you to do this: 

```
var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27
```

4. 
You will need to create an html document out of the below snippet to run the below code. A hint - the code is syntactically correct but doesn't do what you would expect. Can you see why and fix it?  

Don't cheat - but if you get stuck ... http://stackoverflow.com/questions/750486/javascript-closure-inside-loops-simple-practical-example

```
<button id="btn-0">Button 1!</button>
<button id="btn-1">Button 2!</button>
<button id="btn-2">Button 3!</button>

<script type="text/javascript">
    var prizes = ['A Unicorn!', 'A Hug!', 'Fresh Laundry!'];
    for (var btnNum = 0; btnNum < prizes.length; btnNum++) {
        // for each of our buttons, when the user clicks it...
        document.getElementById('btn-' + btnNum).onclick = function() {
            // tell her what she's won!
            alert(prizes[btnNum]);
        };
    }
</script>
```

Next time we're going to cover the following Javascript topics: 
- Promises (callbacks part 2)
- The power of `let` 
- Using APIs 

Please read up on these topics

