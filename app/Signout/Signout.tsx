import Home from "../app/page";
import { auth, signIn, signOut } from "/.vscode/projct phase/again/auth";
export default function SignOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button type="submit">Sign Out</button>
      <Home/>
    </form>
  );
}
