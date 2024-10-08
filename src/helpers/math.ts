export const getIntArray = (min: number, max:number) => {
    const result:number[] = [];

    for (let i = min; i <= max; i++){
        result.push(i);
    }
    return result;
}

export const getRamdomIntArrayInRange2 = (min: number,max: number,count: number) => {
    return Array(max)
    .fill(0)
    .map((_,idx) => min + idx + 1)
    .sort(() => Math.random() - 0.5)
    .slice(0, count);
}

export const getRamdomIntArrayInRange = (min: number, max: number, count: number) => {
    const result: number[] = [];

    for (let i = min; i <= max; i++){
        result.push(i);
    }

    for (let i = result.length -1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]]
    }

    return result.slice(0, count);
}