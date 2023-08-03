/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const result = [];
    
    // Функция для генерации перестановок
    function generatePermutations(currentPermutation, remainingNums) {
        // Базовый случай: если больше нет чисел для добавления к текущей перестановке,
        // добавляем ее в результат и выходим из рекурсии
        if (remainingNums.length === 0) {
            result.push(currentPermutation);
            return;
        }
        
        // Рекурсивно генерируем все возможные перестановки, добавляя каждое число из оставшихся
        for (let i = 0; i < remainingNums.length; i++) {
            const newPermutation = currentPermutation.concat(remainingNums[i]);
            const newRemainingNums = remainingNums.slice(0, i).concat(remainingNums.slice(i + 1));
            
            generatePermutations(newPermutation, newRemainingNums);
        }
    }
    
    generatePermutations([], nums);
    
    return result;
};
