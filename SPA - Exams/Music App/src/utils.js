export const getUserData = () => {
        return JSON.parse(localStorage.getItem('user'));
};

export const getUserToken = () => {

    const user = getUserData();
    if(user) {
        return user.accessToken;
    } else{
        return null;
    }
};

export const getUserId = () => {

    const user = getUserData();
    if(user) {
        return user._id;
    } else{
        return null;
    }
};

export const clearUserData = () => {
    localStorage.removeItem('user');
};

export const createUserData = (data) => {
    localStorage.setItem('user', JSON.stringify(data));
};

export const checkForEmptyFields = (formData) => {
    const isEmpty = Object.values(formData).some(field => field == '');
    if(isEmpty) {
        throw new Error('All fields are required');
    }
};