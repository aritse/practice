/**
 *
 * @param {products[]} order
 * @param {pis[]} userPIs
 * @returns []
 */
const GetPIsThatCanPayForOrder = (order, userPIs) => {
  const canPayWith = [];
  const cannotPayWith = [];

  products.forEach(product => {
    if (product.canPayWith && product.canPayWith.length > 0) canPayWith.push(...product.canPayWith);
    else if (product.cannotPayWith && product.cannotPayWith.length > 0) cannotPayWith.push(...product.cannotPayWith);
  });

  cannotPayWith.forEach(method => {
    const index = canPayWith.indexOf(method);
    if (index > -1) canPayWith.splice(index, 1);
  });

  const methods = [];
  userPIs.forEach(({ type }) => {
    const index = canPayWith.indexOf(type);

    if (index > -1) methods.push(type);
  });

  return methods;
};

const products = [
  {
    id: 2,
    canPayWith: ["creditCard", "paypal"]
  },
  {
    id: 1,
    cannotPayWith: ["paypal"]
  }
];

const userPIs = [
  {
    id: "A",
    type: "creditCard"
  },
  {
    id: "B",
    type: "paypal"
  },
  {
    id: "C",
    type: "bankAccount"
  }
];

console.log("Answer:", GetPIsThatCanPayForOrder(products, userPIs)); // ["creditCard"]
