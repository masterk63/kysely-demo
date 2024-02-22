import * as PersonRepository from "./PersonRepository";

const main = async () => {
  const test = await PersonRepository.findPersonById(1);

  console.log(test);
};

main();
