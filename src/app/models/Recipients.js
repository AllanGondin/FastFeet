import Sequelize, { Model } from "sequelize";

class Recipients extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        street: Sequelize.STRING,
        number: Sequelize.INTEGER,
        complement: Sequelize.STRING,
        uf: Sequelize.STRING,
        city: Sequelize.STRING,
        cep: Sequelize.STRING,
      },
      {
        sequelize,
      }
      
    );
  }
}

export default Recipients;
