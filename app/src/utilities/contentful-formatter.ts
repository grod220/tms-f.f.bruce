export const removeHashes = (str: string | undefined): string | undefined => str?.split('#').shift().trim();
