let containerDeNoticias =  document.querySelector('#listaDeNoticias');


async function pegarNoticias(){
    // let noticias = fetch('https://newsapi.org/v2/top-headlines?country=br&apiKey=d0b1a58aec3949098c838b031d3dedae')
    // .then((resposta)=>{
    //     return resposta.json();
    // })
    // .then((dadosEmJson)=>{
    //     // console.log(dadosEmJson);
    //     dadosEmJson.articles.forEach((noticia,index)=>{
    //         console.log("Endereço da imagem é " + noticia.urlToImage);
    //         console.log("Título da notícia é " + noticia.title);
    //         console.log("A descrição da notícia é " + noticia.description);
    //     })
    // });
    
    // console.log(noticias);

    let noticias = await fetch('https://newsapi.org/v2/top-headlines?country=br&apiKey=d0b1a58aec3949098c838b031d3dedae');

    let listaDeNoticias = await noticias.json();

    listaDeNoticias.articles.forEach((noticia)=>{
        
        // console.log("Endereço da imagem é " + noticia.urlToImage);
        // console.log("Título da notícia é " + noticia.title);
        // console.log("A descrição da notícia é " + noticia.description);

    let coluna = document.createElement('div')
    coluna.setAttribute('class', 'col-3')
    
    let card = document.createElement('div')
    card.setAttribute('class', 'card')
    
    let imgCard = document.createElement('img')
    imgCard.setAttribute('class', 'card-img-top')
    imgCard.setAttribute('src', noticia.urlToImage)
    
    let bodyCard = document.createElement('div')
    bodyCard.setAttribute('class', 'card-body')
    
    let titleCard = document.createElement('h5')
    titleCard.setAttribute('class', 'card-title')
    titleCard.textContent = noticia.title
    
    let descriptionCard = document.createElement('p')
    descriptionCard.setAttribute('class', 'card-text')
    descriptionCard.textContent = noticia.description
    
    let linkCard = document.createElement('a')
    linkCard.setAttribute('class', 'btn btn-primary')
    linkCard.setAttribute('href', noticia.url)
    linkCard.textContent = "Ir para notícia"
    
    
    card.appendChild(imgCard)
    card.appendChild(bodyCard)
    card.appendChild(titleCard)
    card.appendChild(descriptionCard)
    card.appendChild(linkCard)

    coluna.appendChild(card)

    containerDeNoticias.appendChild(coluna);

    })

}

