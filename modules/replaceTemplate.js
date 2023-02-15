module.exports = (tempCard, product) => {
  let output = tempCard.replaceAll("{%PRODUCTNAME%}", product.productName);
  output = output.replaceAll("{%IMAGE%}", product.image);
  output = output.replaceAll("{%QUANTITY%}", product.quantity);
  output = output.replaceAll("{%NUTRIENTS%}", product.nutrients);
  output = output.replaceAll("{%ID%}", product.id);
  output = output.replaceAll("{%FROM%}", product.from);
  output = output.replaceAll("{%PRICE%}", product.price);
  output = output.replaceAll("{%DESCRIPTION%}", product.description);
  if (!product.organic) {
    output = output.replaceAll("{%NOT_ORGANIC%}", "not-organic");
  } else {
    output = output.replaceAll("{%NOT_ORGANIC%}", "");
  }
  return output;
};
