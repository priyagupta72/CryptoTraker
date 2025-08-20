import { useSelector } from "react-redux";

const GuestSection = ({ children }) => {
  const user = useSelector((store) => store.user);

  // Only render children if user is NOT logged in
  if (user && Object.keys(user).length > 0) return null; // user is logged in
  return <>{children}</>;
};

export default GuestSection;
