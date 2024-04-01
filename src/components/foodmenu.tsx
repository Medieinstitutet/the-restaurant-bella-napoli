import "../styles/_foodMenu.scss";

export const FoodMenu = () => {
  const menuItems = [
    {
      id: 1,
      name: "Risotto",
      price: 250,
      image:
        "https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_173618/cf_259/risotto_med_karamelliserad_fankal_och_misostekt_svamp.jpg",
    },
    {
      id: 2,
      name: "Carbonarar",
      price: 290,
      image:
        "https://www.santamariaworld.com//globalassets/_recipes/spices/carbonara.jpg",
    },
    {
      id: 3,
      name: "Salad",
      price: 190,
      image:
        "https://www.allrecipes.com/thmb/k0Yugx575taH6eaSpD51xIC3s-4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-14452-GreenSalad-0025-4x3-527a1d42f2c042c9bcaf1a68223d34e5.jpg",
    },
    {
      id: 4,
      name: "Bolognese",
      price: 235,
      image:
        "https://img.koket.se/standard-mega/jennies-pasta-bolognese.png.jpg",
    },
    {
      id: 5,
      name: "Margherita",
      price: 250,
      image:
        "https://www.odenochaventyr.se/siteassets/artiklar/2021/pizza/sh172683830-nh-tt-stock-kebabpiz.jpg",
    },
    {
      id: 6,
      name: "Burger",
      price: 290,
      image:
        "https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg",
    },
    {
      id: 7,
      name: "Pesto alla Genovese",
      price: 190,
      image:
        "https://img.apmcdn.org/0e4435c2e116941cafc74410f7419e47d1de860c/uncropped/84dad5-splendid-table-470822257.jpg",
    },
    {
      id: 8,
      name: "Grekisk pasta",
      price: 235,
      image:
        "https://www.santamariaworld.com/optimized/maximum/globalassets/_recipes/spices/pasta_herbs.jpg",
    },
    {
      id: 1,
      name: "Ugnsbakad lax",
      price: 250,
      image:
        "https://img.koket.se/standard-mega/ugnsbakad-lax-med-citronsas.jpg",
    },
  ];

  return (
    <div className="food-menu-container">
      <h2>Meny</h2>
      <ul className="food-menu-list">
        {menuItems.map((item) => (
          <li key={item.id} className="food-menu-item">
            <img src={item.image} alt={item.name} />
            <div className="food-menu-item-details">
              <span className="food-menu-item-name">{item.name}</span>
              <span className="food-menu-item-price">{item.price} kr</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
