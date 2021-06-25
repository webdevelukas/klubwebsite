import List from "../../elements/List";
import PageSection from "../../elements/PageSection";
import { Users } from "../../types";
import Avatar from "./Avatar";

export type Props = {
  users: Users;
  title: string;
};

function AvatarList({ users, title }: Props) {
  return (
    <PageSection title={title}>
      <List>
        {users.map((user, index) => (
          <Avatar key={index} user={user} />
        ))}
      </List>
    </PageSection>
  );
}

export default AvatarList;
