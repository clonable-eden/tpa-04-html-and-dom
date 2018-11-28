const container = document.createElement('div');
container.className = 'container';

const h2 = document.createElement('h2');
h2.innerHTML = 'ポスト一覧';

const p = document.createElement('p');
p.innerHTML = '（今日のポスト）';

container.appendChild(h2);
container.appendChild(p);

[
    { title: 'ポスト #1', body: 'ポスト#1の内容はめちゃ面白い' },
    { title: 'ポスト #2', body: 'ポスト#2の内容はすごいぞ' }
].forEach(item => {
    const post = document.createElement('div');

    const title = document.createElement('h3');
    title.innerHTML = item.title;

    const body = document.createElement('p');
    body.innerHTML = item.body;

    post.appendChild(title);
    post.appendChild(body);

    container.appendChild(post);
});

document.querySelector('.wrapper').appendChild(container);
