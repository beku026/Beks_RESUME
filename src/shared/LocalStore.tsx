export const getLocalStore = (arg: string): string => {
  if (typeof window !== 'undefined') {
    return  localStorage.getItem(arg) || "light";
  }
  return "light"
}

export const setLocalStore = (arg: string, data: string) => {
 localStorage.setItem(arg, data)
}