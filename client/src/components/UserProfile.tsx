import Button from "./Button";

type UserProfileProps = {
  name: string;
  onLogout: () => void;
};

export default function UserProfile({
  name,
  onLogout,
}: UserProfileProps) {
  return (
    <section>
      <h2>{name}</h2>

      <Button onClick={onLogout}>
        Logout
      </Button>
    </section>
  );
}