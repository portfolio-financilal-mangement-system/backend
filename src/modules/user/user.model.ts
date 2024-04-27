import { Sequelize, Model, DataTypes, Optional } from "sequelize";

const sequelize = new Sequelize(
  "your_database_name",
  "your_username",
  "your_password",
  {
    dialect: "mssql", // Specify dialect for SQL Server
    host: "your_server_host", // Replace with your SQL Server host
    port: 1433, // Default SQL Server port
  }
);

export interface UserAttributes {
  id: number;
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  // Add other user-related fields as needed (e.g., firstName, lastName)
  createdAt?: Date;
  updatedAt?: Date;
}

interface UserCreationAttributes extends Optional<UserAttributes, "id"> {} // Allow omitting 'id' during creation

class User extends Model<UserAttributes, UserCreationAttributes> {
  public id!: number; // Non-null assertion for primary key
  public username!: string;
  public firstname!: string;
  public lastname!: string;
  public email!: string;
  public password!: string;
  // Add other user-related fields as needed (e.g., firstName, lastName)
  public readonly createdAt!: Date; // Readonly timestamp
  public readonly updatedAt!: Date; // Readonly timestamp
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    // Add other user-related fields as needed (e.g., firstName, lastName)
  },
  {
    sequelize,
    tableName: "users",
    timestamps: true,
  }
);

// (Optional) Force table creation (dropping existing data)
// sequelize.sync({ force: true })
//   .then(() => {
//     console.log('User table created successfully');
//   })
//   .catch((error) => {
//     console.error('Error creating user table:', error);
//   });

export default User;
