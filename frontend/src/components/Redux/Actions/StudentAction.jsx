// src/actions/studentActions.js

export const registerStudent = (studentData) => {
    return {
      type: 'REGISTER_STUDENT',
      payload: studentData,
    };
  };
  