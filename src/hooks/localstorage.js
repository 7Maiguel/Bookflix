export default function useLocalStorage(itemName, initialValue) {
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem = initialValue;

  if (!localStorageItem)
    localStorage.setItem(itemName, JSON.stringify(initialValue));
  else parsedItem = JSON.parse(localStorageItem);

  const saveItem = (itemValue) =>
    localStorage.setItem(itemName, JSON.stringify(itemValue));

  return [parsedItem, saveItem];
}
