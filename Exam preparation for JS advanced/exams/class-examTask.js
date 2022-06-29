class Story {
  #comments;
  #likes;
  #commentsCount;
  constructor(title, creator) {
    this.title = title, 
    this.creator = creator,
    this.#comments = [],
    this.#likes = []
  }

  get likes() {
    if (this.#likes.length == 0) {
      return `${this.title} has 0 likes`;
    } else if (this.#likes.length == 1) {
      return `${this.#likes.join("")} likes this story!`;
    } else {
      return `${this.#likes[0]} and ${
        this.#likes.length - 1
      } others like this story!`;
    }
  }

  like(name) {
    if (this.#likes.includes(name)) {
      throw new Error(`You can't like the same story twice!`);
    } else if (this.creator == name) {
      throw new Error(`You can't like your own story!`);
    } else {
      this.#likes.push(name);
      return `${name} liked ${this.title}!`;
    }
  }

  dislike(name) {
    if (!this.#likes.includes(name)) {
      throw new Error(`You can't dislike this story!`);
    } else {
      const index = this.#likes.indexOf(name);
      this.#likes.splice(index, 1);
      return `${name} disliked ${this.title}`;
    }
  }

  comment(username, content, inputId) {
    const currentComment = {
      id: inputId,
      username: username,
      content,
      reply: [],
    };

    const currentCommentWithId = this.#comments.find((c) => c.id === inputId);

    if (currentCommentWithId) {
      const replyId = Number(`${currentCommentWithId.id}.${currentCommentWithId.reply.length + 1}`);
      const replyObj = {
        replyId,
        username,
        content,
      };

      currentCommentWithId.reply.push(replyObj);

      return `You replied successfully`;
    }

    currentComment.id = this.#comments.length + 1;
    this.#comments.push(currentComment);

    return `${username} commented on ${this.title}`;
  }


  toString(sortType) {
    let sorted = this.#comments.sort((a, b) => {
        if(sortType == 'username') {
            return a.username.localeCompare(b.username)
        } else if(sortType == 'asc') {
            return a.id - b.id
        } else {
            return b.id - a.id
        }
    })

   sorted.map(line => line.reply.sort((a, b) => {
    if(sortType == 'username') {
        return a.username.localeCompare(b.username)
    } else if(sortType == 'asc') {
        return a.id - b.id
    } else {
        return b.id - a.id
    }
   }))

   let result = [];

   result.push(`Title: ${this.title}`)
   result.push(`Creator: ${this.creator}`)
   result.push(`Likes: ${this.#likes.length}`)
   result.push(`Comments:`)
   

   sorted.forEach(line => {
        result.push(`-- ${line.id}. ${line.username}: ${line.content}`)
        if(line.reply.length !== 0) {
            line.reply.forEach(nestedLine => {
                result.push(`--- ${nestedLine.replyId}. ${nestedLine.username}: ${nestedLine.content}`)
            })
        }
   })

return result.join('\n')


  }

 
}

let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));
