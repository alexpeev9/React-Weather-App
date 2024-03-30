import { MeasurementForm } from "../MeasurementForm";

import { HeaderContainer, Link } from "./styled";

export default function Header() {
  return (
    <HeaderContainer>
      <Link to="/">9 Clouds</Link>
      <MeasurementForm />
    </HeaderContainer>
  );
}
