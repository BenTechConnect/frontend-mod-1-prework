/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor (author, content, timeStamp, numberOfLikes, comments) {
    this.author = author;
    this.content = content;
    this.timeStamp = timeStamp;
    this.numberOfLikes = numberOfLikes;
    this.comments = comments;
  }

  addLike() {
    this.numberOfLikes++;
  }

  addComment() {
    var newLength = this.comments.push('Pushed Comment!')
  }
}

var visitingHome = new Tweet('Ben', 'Enjoying being home', '23:55', 9, ['Looks cozy!', 'Nice']);
console.log(visitingHome);
visitingHome.addLike();
console.log(visitingHome);
visitingHome.addComment();
console.log(visitingHome);
