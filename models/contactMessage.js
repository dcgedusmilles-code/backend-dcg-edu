// 'use strict';
// const {
//   Model
// } = require('sequelize');

// module.exports = (sequelize, DataTypes) => {
//   class ContactMessage extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here, se necessário futuramente
//     }
//   }

//   ContactMessage.init({
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     email: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       validate: {
//         isEmail: true
//       }
//     },
//     message: {
//       type: DataTypes.TEXT,
//       allowNull: false
//     }
//   }, {
//     sequelize,
//     modelName: 'ContactMessage',
//     tableName: 'contact_messages',
//     timestamps: true, // Inclui createdAt e updatedAt
//   });

//   return ContactMessage;
// };

'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ContactMessage extends Model {
    static associate(models) {
      // define associação se necessário
    }
  }

  ContactMessage.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    message: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'ContactMessage',
    tableName: 'contact_messages',
    timestamps: true
  });

  return ContactMessage;
};
