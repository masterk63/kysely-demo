import { createPerson } from "./PersonRepository";
import { faker } from '@faker-js/faker';

const runSeed = async () => {
  const personCreated = await createPerson({
    first_name: faker.person.firstName(),
    last_name: faker.person.lastName(),
    gender: faker.person.gender(),
    metadata: JSON.stringify({
      login_at: new Date().toISOString(),
      ip: faker.internet.ipv4(),
      agent: faker.internet.userAgent(),
      plan: "free",
    }),
  });
  console.log(personCreated);
};

runSeed();
