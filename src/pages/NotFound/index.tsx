import { NotificationText } from "../../components/Notification/styled";
import { textMessages } from "../../utils/constants";

export default function NotFound() {
  return <NotificationText>{textMessages.notFound}</NotificationText>;
}
