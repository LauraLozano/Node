let articleHistory = [];

function buildArticleMarkup(article){
    return `<div class="article_item">
                <h2>${article.title}</h2>
                <p>${article.body}</p></div>`;
}

function updateHistory(article){
    articleHistory.push(article);
    document.getElementById("history").innerHTML =
     document.getElementById("history").innerHTML + buildArticleMarkup(article);
}

async function onOKButtonClickedAsync(){
    let targetElementId = "main_article";
    let articleID = document.getElementById("article_id_input").value;
    try {
        const response = await fetch(
            `http://jsonplaceholder.typicode.com/posts/${articleID}`
        );
        let article = await response.json();
        document.getElementById(targetElementId).innerHTML = buildArticleMarkup(
            article
        );
        updateHistory(article);
    } catch (err) {
        console.error(`error ${err}`);
    }
}