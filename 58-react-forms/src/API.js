
export const postUser = async (user) => {
    const configObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(user),
    };
    return await fetch("http://localhost:3001/users", configObject)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw "Oops something went wrong!";
        }
      })
      .catch((error) => error);
  };
