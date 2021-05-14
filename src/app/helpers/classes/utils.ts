
export function favoritesObject(): string[]{
    return JSON.parse(localStorage.getItem('favorites') || '[]') as string[];
}
