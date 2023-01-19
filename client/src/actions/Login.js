export const handleLogin = async (
  e,
  email,
  password,
  setName,
  dispatch,
  history,
  setError
) => {
  e.preventDefault();
  const postURL = "/auth/sign_in";
  try {
    const res = await fetch(postURL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    if (!res.ok) {
      throw new Error(res.statusText);
    }

    const { auth, token, user } = await res.json();
    localStorage.setItem("token", JSON.stringify({ token }));
    localStorage.setItem("auth", JSON.stringify({ auth }));
    localStorage.setItem("name", JSON.stringify({ name: user.firstName }));
    setName(user.firstName);
    dispatch({ type: "SET_USER", user: user.firstName });
    history.push("/");
  } catch (err) {
    setError(true);
    console.error(err);
  }
};
