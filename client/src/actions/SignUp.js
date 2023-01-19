const handleSignUp = async (
  e,
  firstName,
  lastName,
  email,
  password,
  setMessage,
  history
) => {
  // e.preventDefault();
  const postURL = "/auth/register";
  try {
    const res = await fetch(postURL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password,
      }),
    });

    if (!res.ok) {
      throw new Error(res.statusText);
    }

    setMessage("Account successfully created!");
    setTimeout(() => {
      history.push("/login");
    }, 1000);
    console.log("You have been added to the system!");
  } catch (err) {
    console.error(err);
  }
};

export { handleSignUp };
