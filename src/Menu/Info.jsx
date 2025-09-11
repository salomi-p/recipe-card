export default function Info({ serves, type, desc, desc1, desc2 }) {
  return (
    <section className="recipe-details">
      <p>
        <strong>Serves : {serves}</strong>
      </p>
      <p>
        <strong>Type : {type}</strong>
      </p>

      <p className="highlight-text">{desc}</p>

      <p>{desc1}</p>
      <p>{desc2}</p>
    </section>
  );
}
