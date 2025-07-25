const filters = {
  portrait: [
    { name: "Soft Skin", formula: "boxblur=2:1", thumb: "soft-skin.jpg" },
    { name: "Golden Hour", formula: "colorbalance=rs=.1:gs=.1:bs=-.1", thumb: "golden.jpg" }
  ],
  cinematic: [
    { name: "Teal/Orange", formula: "colorbalance=rs=-.3:bs=.3", thumb: "teal-orange.jpg" }
  ]
};

function loadFilters(category) {
  const grid = document.getElementById('filterGrid');
  grid.innerHTML = '';
  
  filters[category].forEach(filter => {
    const card = document.createElement('div');
    card.className = 'filter-card';
    card.innerHTML = `
      <img src="assets/thumbs/${filter.thumb}">
      <p>${filter.name}</p>
    `;
    card.onclick = () => previewFilter(filter.formula);
    grid.appendChild(card);
  });
}
