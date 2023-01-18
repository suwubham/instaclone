import { faker } from "@faker-js/faker";
import Post from "./Post.type";

export default function createRandomPost(): Post {
  return {
    _id: faker.datatype.uuid(),
    image: faker.image.image(),
    caption: faker.lorem.sentence(),
    username: faker.internet.userName(),
  };
}

