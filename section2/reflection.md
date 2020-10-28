## Section 2 Reflection

1. Regarding the blog posts in Part A, how do you feel about asking questions? Do you tend to ask them too soon, or wait too long, or somewhere in between?

Just like most other people, I fear looking dumb or silly when I have to ask a question in front of the class. I generally wait too long to ask questions, however after reading these three articles I do believe that I will be asking for help much sooner. I found that I could relate very well to the third blog post.

1. In this section, we removed some of the supports that you had in Section 1. We didn't give the directions for how to run a file in node, and really sent you off to learn about functions by exploring several outside resources. How did that feel? What was uncomfortable about it? How did it support your learning?

I feel that this was a perfect transition. I knew what information to look for and where to find it thanks to the similar layout to the previous section. Not including the node directions every time helped me actively try and recall the keyword and file path.

1. What is a conditional statement? Give one example of a daily life conditional. Give one example of where a conditional is probably used in a web application you use.

A conditional statement is when a line of code tells the computer to take one action or an alternative action based on a defined requirement.

An example of a daily life conditional could be:

```javascript  
var benjamin = 'awake';

if (benjamin === 'asleep') {
  console.log("snoring");
} else if (benjamin === 'awake') {
  console.log("coding");
}
```

An example of a conditional used in a web application could be:

```javascript
var account = 'prime';

if (account === 'basic') {
  console.log("upgrade!");
} else if (account === 'prime') {
  console.log("welcome!");
}
```

1. How do you add multiple conditions to an `if` statement? In your own words, explain how to program reads them and determines what to do.

Following the code block after the original `if` statement condition with an `else if` statement can allow you to have multiple conditions.

1. What tools are available to you, as a developer, if you want to check that TWO conditions are met? Or, if you want to check that 1 of 2 conditions are met, before running a block of code?

The tools you can use are called logical operators, written as && and ||. The program will read if both requirements are met (with &&) or if one or the other requirements are met (with ||).

1. What questions do you still have about `if` statements and/or functions?
