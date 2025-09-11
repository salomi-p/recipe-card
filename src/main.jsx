import { createRoot } from "react-dom/client";
import Recipecard from "./Recipe";
import "./index.css";
const root = createRoot(document.getElementById("root"));
function Menu() {
  return (
    <>
      <header className="mainhead"> RECIPE MENU CARDS</header>

      <div className="MainParent">
        <Recipecard
          title="chinese Noodles"
          type="Dinner"
          desc="Perfect for dinner or late-night cravings."
          image="https://t4.ftcdn.net/jpg/09/83/57/01/360_F_983570166_1SQBbVXE7MKiglTMq1XTM0WYtj47ykCC.jpg"
        />
        <Recipecard
          title="Steamed Momos"
          type="Snacks"
          desc="Stuffed with vegetables & spices"
          image="https://thumbs.dreamstime.com/b/aromatic-steam-billows-basket-as-colorful-achar-dipping-sauce-splashes-freshly-prepared-momos-sit-enticingly-garnished-381007846.jpg"
        />

        <Recipecard
          title=" Biryani"
          type="Lunch"
          desc="A royal feast on your plate"
          image="https://img.freepik.com/free-photo/gourmet-chicken-biryani-with-steamed-basmati-rice-generated-by-ai_188544-13480.jpg"
        />
        <Recipecard
          title="Bread Omelette"
          type="Evening"
          desc="Quick & delicious bread omelette"
          image="https://i.ytimg.com/vi/1WqSrONbwVM/maxresdefault.jpg"
        />
        <Recipecard
          title="Ice cream"
          type="Dessert"
          desc="Every lick takes you closer to bliss"
          image="https://img.freepik.com/premium-photo/levitating-ice-cream-cones-with-colorful-toppings-against-warm-cherry-wood-backdrop-illuminated-by-sunlight_71756-4665.jpg"
        />
        <Recipecard
          title="Mojito"
          type="Drinks"
          desc="Cool minty magic in every sip"
          image="https://blog.haskells.com/hubfs/AdobeStock_63693451-1.jpeg"
        />

        <Recipecard
          title="Chicken"
          type="Cravings"
          desc="very piece is a flavor explosion"
          image="https://t3.ftcdn.net/jpg/06/10/82/10/360_F_610821014_f7Jm2AO7taNJwEIlNDTxCkb4s4thrZlu.jpg"
        />
        <Recipecard
          title="Rice"
          type="Lunch"
          desc="The meal that hugs your soul"
          image="https://static.vecteezy.com/system/resources/thumbnails/065/445/650/small_2x/isolated-traditional-indian-thali-meal-free-photo.jpg"
        />
      </div>
    </>
  );
}

root.render(<Menu />);
