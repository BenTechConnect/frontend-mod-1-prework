/*
This exercise file is a little different from the others you have seen so far. Read carefully!

Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
Spend some time changing the variables and running the file to see how the story changes.
*/

var doorChoice = 1;
var bearClothing = "";
var bearChoice = 1;

console.log("You enter a dark room with two doors. Do you go through #1 or #2?");

if (doorChoice === 1) {
  bearClothing = "hat";
} else {
  bearClothing = "scarf";
}

console.log("You see a bear putting on a " + bearClothing);
console.log("It looks like that " + bearClothing + " is too small for the bear, do you...");

console.log("1. Offer your own to the bear?");
console.log("2. Point it out to the bear?");
console.log("3. Make a dash for the next room?");

if (bearChoice === 1) {
  console.log("You offer the bear your " + bearClothing + " and the bear shows you a secret passage out!");
} else if (bearChoice === 2) {
  console.log("You tell the bear the " + bearClothing + " is too small and it starts to cry!");
} else if (bearChoice === 3) {
  console.log("You run as fast as you can into the next room. It's full of snakes!");
} else {
  console.log("You stay with the bear and become it's best friend!");
}

/*
Questions

1. In English, using technical vocabulary, describe what is happening between lines 14 and 18.
  The keyword 'if' is followed by the condition of the variable doorChoice strictly equaling 1.
  The variable doorChoice was previously assigned a value of 1 in line 8, so the subsequent code block is executed.
  Lines 16 through 18 start with the keyword 'else' followed by the code block that would be executed if doorChoice didn't strictly equal 1.

2. What variable has a new value assigned to it after the first if statement executes?
  The variable bearClothing is assigned the string "hat" after the first if statement.

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
  bearClothing would equal the string "scarf" because doorChoice would no longer strictly equal 1.

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.
  In line 27 the keyword 'if' preceeds the condition of the variable bearChoice strictly equalling 1.
  Line 28 is the executed code block when the variable bearChoice strictly equals 1. It prints a concatenation to the console using the variable bearClothing.
  Beginning with the keyword else if, lines 29-30 are the code block that would execute if the variable bearChoice strictly equaled 2.
  Line 30 contains a concatenation that would print to the console if bearChoice strictly equaled 2.
  Lines 31 and 32 are a code block that is executed when bearChoice strictly equals 3.
  Lines 33 thru 35 contain the command executed when the variable bearChoice does not strictly equal 1, 2, or 3.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
  The command in lines 31 and 32 would execute, printing "You run as fast as you can into the next room. It's full of snakes!" into the console.

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
  The final outcome would be "You tell the bear the hat is too small and it starts to cry!"

7. What is your favorite ending?
  My favorite ending is when bearChoice does not strictly equal 1, 2, or 3. This results in staying with the bear and becoming its best friend!
*/
