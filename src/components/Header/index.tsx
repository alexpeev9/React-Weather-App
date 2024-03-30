import { UnitForm } from "../UnitForm";

import { HeaderContainer, Link } from "./styled";

export default function Header() {
  return (
    <HeaderContainer>
      <Link to="/">&#x1F326; 9 Clouds</Link>
      <UnitForm />
    </HeaderContainer>
  );
}
