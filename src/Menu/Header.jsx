export default function Header({ title, description }) {
  return (
    <header className="recipe-header">
      <h2>{title}</h2>
      <p> {description} </p>
    </header>
  );
}
