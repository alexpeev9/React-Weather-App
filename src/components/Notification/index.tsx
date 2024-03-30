import { NotificationContainer, NotificationText } from "./styled";

export default function Notification({ message }: { message: string }) {
  return (
    <NotificationContainer>
      <NotificationText data-test="notification">{message}</NotificationText>
    </NotificationContainer>
  );
}
