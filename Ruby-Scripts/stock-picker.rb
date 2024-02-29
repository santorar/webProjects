def stock_picker(array)
  middle = (array.max - array.min) / 2
  highest = 0
  arr = Array.new(2,0)
  array.each_with_index do |stock,i|
    if(stock < middle)
      array.each_with_index do |second,j|
        if(highest < second - stock && j > i)
          highest = second - stock
          arr[0] = i
          arr[1] = j
        end
      end
    end
  end
  return arr
end
p stock_picker([17,3,6,9,15,8,6,1,10])
