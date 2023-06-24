export const getLocalStore = (arg: string): string => {
  const storage = localStorage.getItem(arg) || "light";
  return storage;
}

export const setLocalStore = (arg: string, data: string) => {
 localStorage.setItem(arg, data)
}