const userModel = require('../Models/users');
const key = '123456789trytryrtyr';
const encryptor = require('simple-encryptor')(key);

module.exports.createUserDBService = async (userDetails) => {
  try {
    const userModelData = new userModel();
    userModelData.firstname = userDetails.firstname;
    userModelData.lastname = userDetails.lastname;
    userModelData.email = userDetails.email;
    const encrypted = encryptor.encrypt(userDetails.password);
    userModelData.password = encrypted;
    const result = await userModelData.save();
    console.log(result);
    return true;
  } catch (error) {
    return false;
  }
};

module.exports.loginuserDBService = async (userDetails) => {
  try {
    const result = await userModel.findOne({ email: userDetails.email });
    if (result != undefined && result != null) {
      const decrypted = encryptor.decrypt(result.password);
      if (decrypted == userDetails.password) {
        return { status: true, msg: 'User Validated Successfully' };
      } else {
        return { status: false, msg: 'User Validation Failed' };
      }
    } else {
      return { status: false, msg: 'Invalid User Details' };
    }
  } catch (error) {
    return { status: false, msg: 'Invalid Data' };
  }
};
