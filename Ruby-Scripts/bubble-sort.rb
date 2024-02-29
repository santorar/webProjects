def checkSorted(arr)
  arr.each_with_index do |element, index|
    return false if(index < arr.length - 1 && element > arr[index + 1])
  end
  true
end
def bubble_sort(array)
  sorted = false
  listOfset = 1
  while !sorted
    array.each_with_index do |element, index|
      if(index < array.length - listOfset )
        right = array[index + 1]
        if element > right
          aux = element
          array[index] = right
          array[index + 1] = aux
        end
      end
    end
    sorted = checkSorted(array)
    listOfset += 1
  end
  array
end
p bubble_sort([4,3,78,2,0,2])
