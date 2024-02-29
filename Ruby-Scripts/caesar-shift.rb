def caesar_cipher(s,shift)
  array = Array.new()
  s.split("").each do |letter|
    let = letter.ord
    let += shift
    if (('a'..'z').include?(letter))
      let -= 26 if(let > 122)
      letter = let.chr
    end
    if (('A'..'Z').include?(letter))
      let -= 26 if(let > 90)
      letter = let.chr
    end
      array.push(letter)
  end
  return array.join
end
puts caesar_cipher("What a string!", 5)
