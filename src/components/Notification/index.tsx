import { NotificationContainer, NotificationText } from "./styled";

export default function Notification({ message }: { message: string }) {
  return (
    <NotificationContainer>
      <NotificationText>{message}</NotificationText>
    </NotificationContainer>
  );
}
