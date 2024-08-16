export let BASE_URL = null
export let config = null
export const secondryColor = "#1E8FD8"

export const loadConfig = async () => {
    const response = await fetch('/config.json');
    config = await response.json();
    BASE_URL = config.BASE_URL;
}