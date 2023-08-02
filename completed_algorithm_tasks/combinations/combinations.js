let combine = function(n, k) {
    const result = [];
  
    // Функция для генерации комбинаций
    const generateCombinations = (currentCombination, start) => {
        // Если текущая комбинация достигла нужного размера k, добавляем ее в результат
        if (currentCombination.length === k) {
            result.push([...currentCombination]);
            return;
        }
      
        // Генерируем комбинации, начиная со значения start
        for (let i = start; i <= n; i++) {
            currentCombination.push(i); // Добавляем текущий элемент в текущую комбинацию
            generateCombinations(currentCombination, i + 1); // Рекурсивно генерируем комбинации для следующего элемента
            currentCombination.pop(); // Удаляем последний элемент из текущей комбинации для генерации новых комбинаций
        }
    };
  
    generateCombinations([], 1); // Начинаем генерацию комбинаций с пустой комбинации и первого числа
  
    return result;
};
