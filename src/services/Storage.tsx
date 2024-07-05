const getLocalStorage = () => localStorage;

export const getData = (key: string) => {
  const storage = getLocalStorage();
  return storage.getItem(key);
};

export const addData = (key: string, val: string) => {
  const storage = getLocalStorage();
  try {
    storage.setItem(key, val);
  } catch (e: any) {
    throw new Error(e);
  }
  return "success";
};

export const clearData = () => {
  const storage = getLocalStorage();
  try {
    storage.clear();
  } catch (e: any) {
    throw new Error(e);
  }
  return "success";
};
