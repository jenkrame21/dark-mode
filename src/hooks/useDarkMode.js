import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (param) => {
    const [someValue, setSomeValue] = useLocalStorage('key', param);
    return [someValue, setSomeValue];
}