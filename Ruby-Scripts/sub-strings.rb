def substrings(word, dictionary)
  arr = word.downcase.split(" ")
  dictionary.reduce(Hash.new(0)) do |sum, cons|
    arr.each{|str| sum[cons] += 1 if(str.include?(cons))}
    sum
  end
end
dictionary = ["below","down","go","going","horn","how","howdy","it","i","low","own","part","partner","sit"]
p substrings("below", dictionary)
p substrings("Howdy partner, sit down! How's it going?", dictionary)

