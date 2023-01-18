import { faker } from "@faker-js/faker";
import User from "../types/User.type"

export default function createRandomUser(): User {
  const sex = faker.name.sexType();
  const firstName = faker.name.firstName(sex);
  const lastName = faker.name.lastName();
  const email = faker.internet.email(firstName, lastName);
  const username = faker.internet.userName(firstName, lastName);

  return {
    _id: faker.datatype.uuid(),
    avatar: faker.image.avatar(),
    birthday: faker.date.birthdate(),
    email,
    firstName,
    lastName,
    sex,
    username,
  };
}

