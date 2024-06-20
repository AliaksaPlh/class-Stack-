# class-Stack-

Create a Stack class.
The Stack constructor must take the maximum number of elements in the stack as its only optional parameter. If the parameter is an invalid number, generate an error. If the parameter is not specified, set the maximum stack size to 10.
Implement public methods:

- push(elem) - add a new element to the stack (generate an error if the stack is full);
- pop() - remove the top element of the stack and return it (generate an error if the stack is empty); - peek() - get the top element of the stack (return null if the stack is empty);
- isEmpty() - returns a Boolean value (whether the stack is empty or not);
- toArray() - returns a new array consisting of stack elements.
  Implement static public methods:
- fromIterable(iterable) - returns a new Stack, the elements of which are the elements of the passed iterable entity. The maximum number of elements of such a stack must be equal to the length of this entity. If the entity is not iterable, generate an error.
