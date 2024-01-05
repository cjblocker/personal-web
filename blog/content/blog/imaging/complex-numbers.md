Title: What are Imaginary Numbers? A first draft
Date: 2020-05-23 7:00

_This post is still a draft, and, as such, need work in clarify several areas and adding applications._

The answer I often hear to this question is something to the effect of "a multiple of the square root of -1."
I think this is a terrible answer.
It is true (_by definition_) but provides no intuition and leaves the asker just as confused.
When we describe negative numbers, we generally would not say -1 is 1 subtracted from zero.
This is similarly true, but if you were not familiar with negative numbers it would make no sense.
Instead, we often bring in conceptual ideas such as debt or geometric ones involving extending the number line.
I hope to build up some of the same ideas for imaginary numbers here.
I think one of the challenges with understanding imaginary numbers is that there applications are less familiar to a general audience when compared to things like debt for negative numbers. Towards the end, I hope to introduce some simple applications.

To start, lets go back in time to before negative numbers were invented.
My goal is not to give a historically accurate account, but to better understand why numbers get invented and what holes they fill in math.
So imagine, if you will, you are working as an accountant or mathematician in one of the several ancient civilizations that did math.
You are familiar with the Natural or "counting" numbers (0,1,2,3 ...) and are working with basic linear equations involving addition and subtraction (e.g. buying and selling) such as these:
$$
    10 + x = 12
$$
$$
    x - 2 = 5
$$
$$
    x + 10 = 3
.$$
You notice that this last equation has no solution, 
and more generally that half of the linear equations 
you can come up with have this problem.
This is inconvenient, but maybe not overly concerning.
I mean, what does it even mean to be given 10 of something and then only have 3 of them?
But consider these two slightly more involved equations.
$$
    7 + (x - 5) = 4
$$
$$
    (7 + x) - 5 = 4
$$
To modern eyes, these equations are equivalent because of the associativity 
of addition and subtraction.
It should not matter what order you do these operations in.
But if you plug in the solution ( $x=2$ ), 
the first equation has an invalid intermediate value ( $2-5$ ).
Without negative numbers, we lose some very desirable properties of algebraic equations.
Inventing the negative numbers makes it easier to work with these equations,
and maybe, despite its absurdity, 
we can justify it as long as the final solution is positive.

With our modern familiarity with negative numbers, this feels natural.
But between the 3rd and 16th centuries, before the name "negative" had caught on,
negative numbers were commonly referred to as "absurd numbers" among European mathematicians.
Apparently the negative numbers felt just as strange to them as imaginary numbers do to many people today!

For this descent into abstraction,
we have gained some nice flexibility 
and can guarantee that all linear equation 
similar to those above will have a solution.
So let's keep moving forward by tackling quadratic equations next.
$$
    x^2 + 1 = 10
$$
$$
    x^2 + 10x + 25 = 0
$$
$$
    x^2 + 20 = 4
$$
Again, the first two have solutions using the numbers we know of so far
(namely $x=\pm 3$ and $x=5$),
but the third has no solution.
We can cover this problem the same way we did before:
by inventing more numbers!
Similar to how negative numbers are a debt that can be covered by later addition,
these new "imaginary" numbers represent a sort of debt to squaring.

Thus far, we have needed to add negative numbers to guarantee a solution to all linear equations,
and we have needed to add imaginary numbers to guarantee a solution to all quadratic equations.
Are we going to have to keep inventing numbers to guarantee solutions of all polynomials?
Interestingly, we don't! The imaginary numbers is where it stops for all polynomials.
Cubic, quartic, quintic functions and beyond have all of there solutions 
describable by a combination of real and imaginary numbers.
This is basically the [Fundamental Theorem of Algebra](https://en.wikipedia.org/wiki/Fundamental_theorem_of_algebra).

If we imagine the natural numbers as existing on a number line
starting at the origin or center and running to the east,
then adding the negative numbers equated to 
extending this line from the origin to the west.
When we add our new numbers, the "imaginary" numbers,
we are going to similarly add a new direction to move in.
Specifically the positive imaginary numbers will go north,
and the negative numbers will go to the south.

Extending the number line to a number plane,
is very useful as we will see later,
but it also breaks something fundamental about numbers,
their ability to be ordered!
The natural or counting numbers were arguably invented
to compare quantities of things
and it seems really weird that we could have two numbers
where neither is "larger" than the other.
Generally, as we expand the set of numbers,
we always lose some structure.
By adding the negative numbers we lost a beginning or "first" number.
The imaginary numbers messed up ordering
and there are more abstract generalizations
called quarternions which lose commutativity.
(Going even further, the octonions lose associativity.)

For this reason,
it can be more intuitive to think of a complex number 
(a normal number added to an imaginary number)
as a coordinate on a map instead of a quantity that can be compared.
We could talk about which coordinate is farther north (more imaginary),
farther east (more real)
or farther from the center,
but it wouldn't make sense to ask which coordinate is bigger.

In the same way that "absurd number" makes negative numbers sound much more complicated then they really are,
"imaginary number" seems like it describe something much more complicated than a coordinate.
Both "absurd" and "imaginary" were poorly chosen names from early in their respective developments.
Gauss proposed calling imaginary numbers "lateral numbers", 
reflecting the fact that they represent moving 
in a direction lateral to the real numbers in a plane.
Unfortunately, this less intimidating name did not catch on.

_More applications to come ..._
