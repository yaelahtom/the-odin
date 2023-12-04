# Recursive Methods

## What is it?
Recursion is the idea that a function calls itself. Pretty simple, right? It’s used to take a big problem and start breaking it down into smaller and smaller pieces (“Divide and Conquer”) and continuing to feed their solutions back into the original function until some sort of answer is achieved and the whole chain unwinds.

There’s also a right and wrong way to use recursion. The fact is, any problem you can solve recursively, you can also solve using the iterators that you know and love. If you find yourself saying “why didn’t I just use a while loop here?” then you probably should have. You won’t often end up using a recursive solution to a problem, but you should get a feel for when it might be a good idea. Some problems also break down into far too many pieces and totally overwhelm your computer’s memory. There’s a balance.

## The components of Recursion
Recursion consists of two main components: the base case and the recursive case. The base case is the condition that determines when the recursion should stop. It is the simplest form of the problem that can be solved directly without further recursion. The recursive case is the part of the function that calls itself with a modified input, moving closer to the base case.

## Illustration
To illustrate this, let's consider an example of calculating the factorial of a number using recursion. The factorial of a non-negative integer n, denoted as n!, is the product of all positive integers less than or equal to n. For example, 5! is equal to 5 * 4 * 3 * 2 * 1, which is 120.

## Why is recursion a useful technique for solving a big problem?
Recursion is a useful technique for solving large problems because it breaks down complex tasks into smaller, more manageable subproblems, following a "divide and conquer" approach. This makes the code more readable and easier to understand, and is particularly effective when the problem can be naturally divided into similar subproblems. However, care must be taken to define a base case to prevent infinite recursion and potential stack overflow errors.

## What are the limitations of using recursive solutions?
Recursion, while powerful for breaking down complex problems into manageable subproblems, has limitations. It can lead to stack overflow errors if recursion depth is too high or base case is not properly defined. It also has higher memory and performance overhead compared to iterative solutions due to the need to save the state for each recursive call. Furthermore, understanding and debugging recursive code can be challenging for those unfamiliar with the concept. Lastly, not all programming languages support tail call optimization, making recursion inefficient for large inputs in those languages.

## What types of problems are more suited for simple loops than recursion?
Problems that involve simple, repetitive tasks with a known number of iterations are often more suited for loops than recursion. This includes tasks like iterating over a collection of items, performing a certain action a fixed number of times, or when the task doesn't naturally break down into smaller, similar subproblems. Using loops for these tasks can be more efficient in terms of memory and performance, as loops don't have the overhead of recursive function calls and don't risk causing a stack overflow error.

## What is meant by “recursive depth”?
"Recursive depth" refers to the number of times a recursive function calls itself before reaching the base case. It can be thought of as the number of layers of recursion that are active at a given point. For example, if a function calls itself three times before reaching the base case, the recursive depth is three. It's an important concept because excessive recursive depth can lead to a stack overflow error in many programming languages.

## What is a “stack overflow” (the concept, not the website)?
A "stack overflow" is a type of error that occurs in programming when the call stack, a data structure used to store information about active subroutines or functions, exceeds its limit. This typically happens with excessive recursive calls where the function calls itself so many times that the storage space on the call stack is exhausted, leading to an error. It's important to manage recursive calls carefully to avoid stack overflow errors.

## Why is that relevant to a recursive problem?
The concept of "stack overflow" is relevant to recursive problems because each recursive call adds a new layer to the call stack. If a recursive function calls itself too many times without reaching a base case, it can exhaust the available stack space, leading to a stack overflow error. This is why it's crucial to define a base case that can be reached within a reasonable number of recursive calls, and why understanding the implications of recursive depth is important when working with recursive functions.