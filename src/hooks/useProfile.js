import { useEffect, useState } from "react";

const useProfile = (user) => {
  const [profile, setProfile] = useState({});
  const email = user?.email;
  useEffect(() => {
    fetch(`https://wooden-tools.onrender.com/users/${email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setProfile(data));
  }, [email]);
  return [profile];
};
export default useProfile;
