module.exports = (sequelize, DataTypes) => {
    const tb_Registros = sequelize.define('tb_registros', {
      idoso: DataTypes.STRING,
      estudantes: DataTypes.STRING,
      internet: DataTypes.STRING,
      normal: DataTypes.STRING,
      horarios: DataTypes.STRING,
      total: DataTypes.STRING,
    });

    return tb_Registros;
  }