## Section 1 Reflection

1. How did the SuperLearner Article resonate with you? What from this list do you already do? Want to start doing or do more of? Is there anything not on this list, that you would add to it?

  When I was growing up, one of my friends was easily the smartest kid in the school. He had already skipped a grade, and on top of that he was taking classes far beyond anyone else in our grade. I always wondered how he became so smart, and one day it clicked that he was always reading! Ever since that realization, I picked up reading as a hobby. I noticed that my vocabulary was growing without me doing anything else different. This is exactly what the author of the article was trying to get across to the reader when he said that "Reading is to the mind what exercise is to your body".

  While reading was something that I was already doing in my free time, the importance of spending time teaching others to help myself retain information was a new concept to me. This is something that I will be willing to implement into my learning to code.

2. What are the data types you learned about in this section? In your own words, define each.

  The data types discussed in section one include numbers, strings, and booleans. Numbers include all numbers, positive and negative, whole or decimal. Strings are words or phrases and can include numbers, however what sets strings apart is that they are within single or double quotation marks. A boolean is essentially a true or false input, either allowing or preventing an action in the script.

3. How would you log the string `"Hello World!"` to the console?

  console.log("Hello World!");

4. What is/are the character(s) you would use to indicate comments in a JavaScript file? What is the purpose of a code comment?

  The two options for including comments in code are '//' before a single line comment, or /* closed out with */ when writing a multiple line comment. The purpose of code comments is to leave notes that can help you or other developers working on your code understand the steps you took, or to prevent a line of code from running.

5. In your own words, what is a variable? How would you explain it to a 5 year old?

  A variable allows a developer to assign values to a word to make it easier to recall those values later on down the line. A variable is like a sticky note: you can write a word on that sticky note and move it around anywhere in your notes that you need it to be.

6. Think of a site or app you use frequently. What are three variables that are probably used? Which data type would each of those variables probably hold?

  I frequently use Amazon to watch movies, listen to music, and make online orders. When using Amazon, there are multiple variables in use. When entering your email address to log-in, the system is going to check and see if that email matches one that is already in the system as a user or not. This is an example of a boolean data type as it either will (var isUser = true;) or will not (var isUser = false;) match an existing user log-in. Amazon also could have var featuredItems = 10; which is a number variable representing how many featured items there are. During the holiday season, you may see a string variable similar to var quote = 'Happy Holidays!';

7. In your own words, explain what concatenation is.

  Concatenation is the act of adding in previously defined variables to a new variable or console.log command line. This can be accomplished with the + sign followed by the variable name.

8. Think of a site or app you use frequently. Where do you think the developers used concatenation?

  I believe that concatenation is likely used in the Amazon shopping cart to find the total price of all of the items in the list. An example of this could be:
  var pasta = 5;
  var soda = 6;
  var sauce = 4;
  var totalPrice = pasta + soda + sauce;
  console.log(totalPrice);

9. What questions do you still have about the work we've done so far? (not having a question is not an option)

  Why does JavaScript end every line of code with a semi-colon?
