const crypto = require('crypto-js');

module.exports = ({ usersCollection }) => {
  return {
    login: async ({ email, password }) => {
      try {
        // First check if user exists with given e-mail address.
        const userData = await usersCollection.findOne({ email });
        if (!userData) {
          return {
            status: 400,
            error_message: 'User does not exist.',
          };
        }
        // Secondly, check if user's password is correct.
        const hashedPassword = crypto.MD5(password).toString();
        if (hashedPassword !== userData.password) {
          return {
            status: 400,
            error_message: 'Incorrect credentials.',
          };
        }
        // Delete user's password as it does not make sense to send it to client.
        delete userData.password;

        return { status: 200, data: { user: userData } };
      } catch (error) {
        return { status: 500, error_message: error.message };
      }
    },
    register: async ({ email, password, confirmPassword }) => {
      // Check passords equality.
      if (password !== confirmPassword) {
        return {
          status: 400,
          error_message: 'Passwords do not match.',
        };
      }

      try {
        // Check if user exists before.
        const userExists = await usersCollection.findOne({ email });
        if (userExists) {
          return {
            status: 400,
            error_message: 'User exists.',
          };
        }

        // Hash user's password and create token that will be user for authentication.
        const hashedPassword = crypto.MD5(password).toString();
        const word = crypto.lib.WordArray.random(48);
        const token = crypto.enc.Base64.stringify(word);

        const insertedUser = await usersCollection.insertOne({
          email,
          token,
          password: hashedPassword,
        });
        if (insertedUser.acknowledged) {
          return {
            status: 201,
            message: 'Successfully registered.',
          };
        }
      } catch (error) {
        return { status: 500, error_message: error.message };
      }
    },
  };
};
