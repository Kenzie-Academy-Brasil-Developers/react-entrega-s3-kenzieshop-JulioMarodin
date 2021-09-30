const initialState = [
  {
    id: 1,
    name: 'Echo Dot',
    price: 279.0,
    image:
      'https://a-static.mlcdn.com.br/618x463/echo-dot-4a-geracao-com-relogio-com-alexa-amazon/magazineluiza/227363400/07f407c1fd32727acc6a077fa7eacb86.jpg',
  },
  {
    id: 2,
    name: 'Kindle Paperwhite',
    price: 499.0,
    image:
      'https://a-static.mlcdn.com.br/1500x1500/novo-kindle-paperwhite-amazon-a-prova-de-agua-tela-6-8gb-wi-luz-embutida-preto/magazineluiza/222123800/cf6f1e93676415871f97926c0538023d.jpg',
  },
  {
    id: 3,
    name: 'Notebook Lenovo IdeaPad',
    price: 2799.0,
    image:
      'https://a-static.mlcdn.com.br/1500x1500/notebook-lenovo-ideapad-s145-82dj0003br-intel-core-i5-8gb-256gb-ssd-lcd-15-6-hd-windows-10/magazineluiza/227907200/781f6ca009dc87608351c11fd2099050.jpg',
  },
  {
    id: 4,
    name: 'Notebook Dell Inspiron',
    price: 3039.0,
    image:
      'https://a-static.mlcdn.com.br/1500x1500/notebook-dell-inspiron-15-3000-3501-a25p-intel-core-i3-4gb-256gb-ssd-156-led-windows-10/magazineluiza/228079200/8a14fa5828e95c1e2052dbbc5ee91e67.jpg',
  },
  {
    id: 5,
    name: 'Notebook Ideapad Gaming',
    price: 6099.0,
    image:
      'https://a-static.mlcdn.com.br/618x463/notebook-gamer-lenovo-ideapad-gaming-3i-82cg0002br-intel-core-i5-8gb-256gb-ssd-156-full-hd/magazineluiza/228769100/536be1e1e35d1ebecb9934506fd7b7fd.jpg',
  },
  {
    id: 6,
    name: 'Apple MacBook Air',
    price: 7589.0,
    image:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1603332211000',
  },
  {
    id: 7,
    name: 'Samsung BookIntel',
    price: 2699.0,
    image:
      'https://a-static.mlcdn.com.br/618x463/notebook-samsung-book-intel-core-i3-1115g4-windows-10-home-256gb-ssd-8gb-ram-tela-15-6-full-hd-led/mastercellcorporate/705p/5236e90bcf1803664ccbb36c205b575a.jpg',
  },
  {
    id: 8,
    name: 'Notebook Acer Aspire 5',
    price: 6461.0,
    image:
      'https://a-static.mlcdn.com.br/618x463/notebook-acer-aspire-5-a515-54-57en-intel-core-i5-8gb-256gb-ssd-156-full-hd-led-windows-10/magazineluiza/230310100/10188c0b18f8d6722b57397709169ae0.jpg',
  },
  {
    id: 9,
    name: 'Apple MacBook Pro',
    price: 9259.0,
    image:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-spacegray-select-202011?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1613672894000',
  },
  {
    id: 10,
    name: 'Notebook Asus VivoBook',
    price: 2189.0,
    image:
      'https://www.notebookcheck.info/uploads/tx_nbc2/AsusVivobookS15-S533F-white__1_.JPG',
  },
];

const productsReducer = (state = initialState, action) => {
  return state;
};

export default productsReducer;
