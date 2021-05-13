import { UserGraph } from '../models';

export const getDuplicatesFromArray = (arr: string[]): Record<string, number> => {
    const counts = {};
    arr.forEach((x) => {
        counts[x] = (counts[x] || 0) + 1;
    });
    return counts;
};

export const convertObjectToArray = (obj: Record<string, number>): UserGraph => {
    return (Object.entries(obj) as [string, number][]).map(([strDate, count]) => [Date.parse(strDate), count]);
};
