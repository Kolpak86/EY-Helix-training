export const sleep = (duration: number): Promise<any> => new Promise((resolve) => setTimeout(resolve, duration));
