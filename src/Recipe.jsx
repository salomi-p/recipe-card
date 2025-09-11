export default function Recipecard(data) {
  return (
    <div className="recipe-container">
      <header className="recipe-header">
        <h2>{data.title}</h2>
      </header>

      <section className="recipe-details">
        <p>
          <strong>Type : {data.type}</strong>
        </p>

        <p className="highlight-text">{data.desc}</p>
        <img className="foodimg" src={data.image} alt="" />
      </section>

      <footer className="recipe-footer">
        <small>crafted with ❤️ By Salomi</small>
      </footer>
    </div>
  );
}
