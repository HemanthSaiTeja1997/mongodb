

module.exports = {
  SUCCESS: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  UNPROCESSABLE_ENTITY: 422,
  INTERNAL_SERVER_ERROR: 500,

  //  messages 
  MSG_USER_CREATED: "User Registered Successfully",
  MSG_USER_UPDATED: "User updated successfully",
  MSG_USER_DELETED: "User deleted successfully",
  MSG_USERS_FETCHED: "Users fetched successfully",

  MSG_USER_NOT_FOUND: "User Not Found",
  MSG_INVALID_PASSWORD: "Invalid password",
  MSG_PASSWORDS_MISMATCH: "Passwords do not match",
  MSG_PASSWORDS_IDENTIFIER_REQUIRED: "Identifier and password are required",

  MSG_DB_ERROR: "Database error",
  MSG_DB_ERROR_LOGIN: "Database Error During Login",
  MSG_FETCH_ERROR: "Failed to fetch user",
  MSG_ADD_ERROR: "Failed to Add User",
  MSG_UPDATE_ERROR: "Failed to update user",
  MSG_DELETE_ERROR: "Failed to delete user",

};
