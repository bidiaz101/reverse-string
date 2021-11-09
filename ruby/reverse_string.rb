def reverse_string(str)
  # type your code in here
  newString = []

  str.split("").each do |char|
    newString.unshift(char)
  end

  newString.join
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 'ih'"
  puts "=>", reverse_string('hi')

  puts

  puts "Expecting: 'ybabtac'"
  puts "=>", reverse_string('catbaby')

  # Don't forget to add your own!
end

# Please add your pseudocode to this file

# Take String
# Split string in array
# add string to the front of a new array with iteration
# return array joined back into string

# And a written explanation of your solution

# the string was split into an array. 
# They array elements were then added to the beginning of the array
# The array was joined together back into a string and returned