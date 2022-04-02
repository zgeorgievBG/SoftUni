function solve(input) {

    let articles = {};
    let users = {};

    input.map(el => {
        if( el.includes('user')) {
            let userName = el.slice('user'.length + 1);
            users[userName] = {};
        } else if (el.includes('article ')) {
            let articleName = el.slice('article'.length + 1);
            articles[articleName] = [];
        } else {
            let tokens = el.split(': ');
            let [user, article] = tokens[0].split(' posts on ');
            let [title, content] = tokens[1].split(', ');
            
            if (users.hasOwnProperty(user) && articles.hasOwnProperty(article)) {
                let currentObj = {
                    user,
                    title,
                    content
                }
                articles[article].push(currentObj);
            }
        }
    })

    let sorted = Object.entries(articles).sort((a, b) => b[1].length - a[1].length);
    sorted.map(el => {
        let header = el[0];
        console.log(`Comments on ${header}`);
        let newSorted = Object.values(el[1]).sort((a, b) => a.user.localeCompare(b.user));
        newSorted.forEach(el => console.log(`--- From user ${el.user}: ${el.title} - ${el.content}`))
    })

}

solve(['user aUser123', 'someUser posts on someArticle: NoTitle, stupidComment', 'article Books', 'article Movies', 'article Shopping', 'user someUser', 'user uSeR4', 'user lastUser', 'uSeR4 posts on Books: I like books, I do really like them', 'uSeR4 posts on Movies: I also like movies, I really do', 'someUser posts on Shopping: title, I go shopping every day', 'someUser posts on Movies: Like, I also like movies very much'])