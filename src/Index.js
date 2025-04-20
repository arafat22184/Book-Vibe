const getReadData = () => {
  const getReadData = localStorage.getItem("read");

  if (getReadData) {
    const convertReadData = JSON.parse(getReadData);
    return convertReadData;
  }
  return [];
};

const addReadData = (id) => {
  const readData = getReadData();
  const isExist = readData.find((data) => data === id);
  if (isExist) {
    return alert("already exist");
  }
  readData.push(id);
  localStorage.setItem("read", JSON.stringify(readData));
};

// Wishlist
const getWishlistData = () => {
  const getWishlistData = localStorage.getItem("wishlist");

  if (getWishlistData) {
    const convertWishlistData = JSON.parse(getWishlistData);
    return convertWishlistData;
  }
  return [];
};

const addWishlistData = (id) => {
  const wishlistData = getWishlistData();
  const isExist = wishlistData.find((data) => data === id);
  if (isExist) {
    return alert("already exist");
  }
  wishlistData.push(id);
  localStorage.setItem("wishlist", JSON.stringify(wishlistData));
};

export { getReadData, addReadData, getWishlistData, addWishlistData };
