export const getCart = () => {
  if (!localStorage.getItem('cart')) {
    localStorage.setItem('cart', JSON.stringify({ products: [] }));
  }
  return JSON.parse(localStorage.getItem('cart'));
}
