
export const handleAddItem = (id, result) => {
    const productID = result?.find(item => item.id === id);
    console.log(productID);

    const prevArrayItems = localStorage.getItem('itemCart');

    if (!prevArrayItems) {
      const item = [{ ...productID, quantity: 1 }];
      localStorage.setItem('itemCart', JSON.stringify(item));
      return;
    }

    const prevArrayCarts = JSON.parse(prevArrayItems);

    const ItemInPrevArray = prevArrayCarts.find(item => item.id === id);
    console.log(ItemInPrevArray);

    if (ItemInPrevArray) {
      return;
    }

    const item = [...prevArrayCarts, { ...productID, quantity: 1 }];
    localStorage.setItem('itemCart', JSON.stringify(item));
  };