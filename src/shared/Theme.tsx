const themeList: string[] = [
  'background',
  'text',
  'primary',
  'btn-color',
  'banner',
  'blur',
]

export const Theme = (arg: string) => {
  localStorage.setItem('theme', arg)
  const root = document.querySelector(':root') as HTMLElement;
  themeList.map(color => {
    root.style.setProperty(`--${color}`, `var(--${arg}-${color})`);
  })
}