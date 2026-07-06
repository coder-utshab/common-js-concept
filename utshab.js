function getMax(numbers) {
    if (numbers.length === 0) {
        return null;
    }

    let max = numbers[0];

    for (const num of numbers) {
        if (num > max) {
            max = num;
        }
    }

    return max;
}