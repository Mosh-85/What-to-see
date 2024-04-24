import ResponsiveAppBar from "./ResponsiveAppBar";

export default function Header({ logedIn, setLogedIn }) {
  return <ResponsiveAppBar logedIn={logedIn} setLogedIn={setLogedIn} />;
}
