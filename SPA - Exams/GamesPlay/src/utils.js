export const getUserData = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export const getUserToken = () => {
  const user = getUserData();
  if (user) {
    return user.accessToken;
  } else {
    return null;
  }
};

export const clearUserData = () => {
  localStorage.removeItem("user");
};

export const checkForEmptyFields = (formData) => {
  const isEmpty = Object.values(formData).some((value) => value == "");
  if (isEmpty) {
    throw new Error("All fields are required");
  }
};

export const checkIfUserIsOwner = (ctx) => {
  if (ctx.user == null) {
    return false;
  }

  if (ctx.user._id == ctx.game._ownerId) {
    return true;
  } else {
    return false;
  }
};
