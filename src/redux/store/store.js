const ADD_USER = "ADD_USER";

// ACTIONS -----------------------------------
// Add User
export const addUser = (user) => {
  return {
    type: ADD_USER,
    user,
  };
};

const defaultUsers = [
  {
    firstName: "Sachin",
    lastName: "Sharma",
  },
];

// REDUCER --------------------------------------
const users = (state = defaultUsers, action) => {
  switch (action.type) {
    case ADD_USER:
      return [
        ...state,
        {
          firstName: "action.user",
        },
      ];
  }
  return state;
};
