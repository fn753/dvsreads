const baseUrl = 'https://devies-reads-be.onrender.com';

export const getAllBooks = async () => {
  const url = `${baseUrl}/books`;

  try {
    const response = await fetch(url);
    console.log('getAllBooks status: ', response.status);

    if (response.ok) {
      const allBooks = await response.json();
      return allBooks;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getSingleBook = async (id) => {
  const url = `${baseUrl}/books/${id}`;

  try {
    const response = await fetch(url);
    console.log('response singlebook', response);
    console.log('getSingleBook status: ', response.status);

    if (response.ok) {
      const singleBook = await response.json();
      return singleBook;
    }
  } catch (error) {
    console.log(error);
  }
};

export const registerUser = async () => {
  const url = `${baseUrl}/auth/register`;

  // this is just for registering a test user that can be used for login
  const username = 'mjau';
  const password = 'supercat';

  const data = {
    username: username,
    password: password,
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    console.log('registerUser status: ', response.status);

    if (response.ok) {
      const responseData = await response.json();
      const accessToken = responseData.accessToken;
      console.log('accessToken', accessToken);
      return accessToken;
    }
  } catch (error) {
    console.log(error);
  }
};

export const login = async (username, password) => {
  const url = `${baseUrl}/auth/login`;

  const data = {
    username: username,
    password: password,
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    console.log('loginUser status: ', response.status);

    if (response.ok) {
      const responseData = await response.json();
      const accessToken = responseData.accessToken;
      console.log('accessToken', accessToken);
      return accessToken;
    }
  } catch (error) {
    console.log(error);
  }
};
