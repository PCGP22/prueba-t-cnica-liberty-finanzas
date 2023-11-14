import CardsContainer from "./CardsContainer";
import Filters from "./Filters";

function Header() {
  return (
    <header>
      <h1>Prima por cobrar</h1>
      <Filters />
      <CardsContainer />
    </header>
  );
}

export default Header;
