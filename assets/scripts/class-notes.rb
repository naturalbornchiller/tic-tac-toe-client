#RUBY

class Person 


    def initalize(name, occupation) #initialize is a special method inside 
        #a Ruby class -- the equivalent of constructor in JS
        #it is the first thing Ruby will go to and run in this class
        @name = name #'@' is the equivalent of 'this'
        @occupation = occupation #'@' for 'attribute' aka
        #property or instance variable
    end

    def sleep 
        puts "zzzzzz"
    end

end #end statement is equivalent of ending curly brace

class Rectangle
    def initialize(length, width)
        @length = length
        @width = width
    end
    def area
        @length * @width #in ruby, the very last line is
        #automatically returned... no need for word 'return'...
        #it's an implicit return
    end
end
