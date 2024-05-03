const SortingLibrary = {
    exchangeSort(array, order = 'asc') {
        let comparisons = 0;
        let swaps = 0;

        for (let i = 0; i < array.length - 1; i++) {
            for (let j = i + 1; j < array.length; j++) {
                comparisons++;
                if ((order === 'asc' && array[i] > array[j]) || (order === 'desc' && array[i] < array[j])) {
                    [array[i], array[j]] = [array[j], array[i]];
                    swaps++;
                }
            }
        }

        console.log(`Exchange Sort: Comparisons: ${comparisons}, Swaps: ${swaps}`);
    },

    minSort(array, order = 'asc') {
        let comparisons = 0;
        let swaps = 0;

        for (let i = 0; i < array.length - 1; i++) {
            let minIndex = i;
            for (let j = i + 1; j < array.length; j++) {
                comparisons++;
                if ((order === 'asc' && array[j] < array[minIndex]) || (order === 'desc' && array[j] > array[minIndex])) {
                    minIndex = j;
                }
            }
            if (minIndex !== i) {
                [array[i], array[minIndex]] = [array[minIndex], array[i]];
                swaps++;
            }
        }

        console.log(`Min Sort: Comparisons: ${comparisons}, Swaps: ${swaps}`);
    },

    insertionSort(array, order = 'asc') {
        let comparisons = 0;
        let swaps = 0;

        for (let i = 1; i < array.length; i++) {
            let key = array[i];
            let j = i - 1;

            while (j >= 0 && ((order === 'asc' && array[j] > key) || (order === 'desc' && array[j] < key))) {
                comparisons++;
                array[j + 1] = array[j];
                j--;
                swaps++;
            }
            array[j + 1] = key;
        }

        console.log(`Insertion Sort: Comparisons: ${comparisons}, Swaps: ${swaps}`);
    },

    shellSort(array, order = 'asc') {
        let comparisons = 0;
        let swaps = 0;

        for (let gap = Math.floor(array.length / 2); gap > 0; gap = Math.floor(gap / 2)) {
            for (let i = gap; i < array.length; i++) {
                let temp = array[i];
                let j = i;

                while (j >= gap && ((order === 'asc' && array[j - gap] > temp) || (order === 'desc' && array[j - gap] < temp))) {
                    comparisons++;
                    array[j] = array[j - gap];
                    j -= gap;
                    swaps++;
                }
                array[j] = temp;
            }
        }

        console.log(`Shell Sort: Comparisons: ${comparisons}, Swaps: ${swaps}`);
    },

    quickSort(array, order = 'asc') {
        let comparisons = 0;
        let swaps = 0;

        function partition(arr, low, high) {
            let pivot = arr[high];
            let i = low - 1;
            for (let j = low; j < high; j++) {
                comparisons++;
                if ((order === 'asc' && arr[j] < pivot) || (order === 'desc' && arr[j] > pivot)) {
                    i++;
                    [arr[i], arr[j]] = [arr[j], arr[i]];
                    swaps++;
                }
            }
            [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
            swaps++;
            return i + 1;
        }

        function quickSortHelper(arr, low, high) {
            if (low < high) {
                let pi = partition(arr, low, high);
                quickSortHelper(arr, low, pi - 1);
                quickSortHelper(arr, pi + 1, high);
            }
        }

        quickSortHelper(array, 0, array.length - 1);
        console.log(`Quick Sort: Comparisons: ${comparisons}, Swaps: ${swaps}`);
    }
};
