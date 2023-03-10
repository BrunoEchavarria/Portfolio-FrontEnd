const container = document.getElementById('products-cards-container');
const valuesCards = [{
    image: '/assets/img/hamb.jpg',
    title: 'Mr. Burguer',
    content: 'Nacimos en el 2001 en Avellaneda, provenientes de una extensa tradición gastronómica familiar.',
    btnlink:"https://mrmurger.000webhostapp.com/",
  },
  {
    image: '/assets/img/innpulsateens.jpeg',
    title: 'Innpulsate Teens',
    content: 'Un concurso que premia las ideas innovadoras con el potencial de cambiar el mundo.',
    btnlink:"https://innpulsate.ar/teens",
  },
  {
    image: '/assets/img/GitHub-Logo-21.png',
    title: 'GitHub',
    content: 'Por si te interesa saber un poco mas acerca de lo que hago...',
    btnlink:"https://github.com/BrunoEchavarria",
  },
]

function returnCards(valuesCards) {
  return "<div class=\"products-cards pt-5 d-sm-block d-flex justify-content-around d-lg-flex justify-content-evenly\">" + valuesCards.map(valuesCard => `
  <div class="d-flex justify-content-around mb-1">
    <div class="product-header d-flex flex-column justify-content-around text-white" style=" border-radius:5px; width: 35vh; height: 350px; background-image: url(${valuesCard.image}); background-size: cover;">
        <h4>${valuesCard.title}</h4>
        <p style="padding-right:35px; padding-left:35px;font-size: initial;">${valuesCard.content}</p>
        <a href="${valuesCard.btnlink}" class="info-button w-50" style="margin-left:auto;margin-right:auto;">Visitar</a> 
    </div>

  </div>`).join('') + "</div>";
}

container.innerHTML = returnCards(valuesCards);