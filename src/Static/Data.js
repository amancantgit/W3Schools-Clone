export const courseDetails = {
    Java: {
        "Introduction": {
            "description": "In Java, variables are used to store information that can be changed during the program's execution. You can declare variables with a data type and a name.",
            "example": "int age = 25; // Declares an integer variable 'age' and assigns the value 25."
        },
        "Syntax": {
            "description": "Conditional statements allow your program to make decisions based on certain conditions. Common conditional statements include if-else, switch, and ternary operator.",
            "example": "if (age >= 18) { System.out.println(\"You are eligible to vote.\"); }"
        },
        "Variables": {
            "description": "Loops in Java are used to repeatedly execute a block of code. Common loop structures include for, while, and do-while loops.",
            "example": "for (int i = 0; i < 5; i++) { System.out.println(\"Iteration \" + i); }"
        },
        "Data Types": {
            "description": "Arrays are used to store multiple values of the same data type in Java. They provide a convenient way to work with collections of data.",
            "example": "int[] numbers = {1, 2, 3, 4, 5}; // Declares an array of integers."
        },
        "Type Casting": {
            "description": "Functions, also known as methods in Java, allow you to group a set of statements into a single unit. They promote code reusability and modular programming.",
            "example": "public int addNumbers(int a, int b) { return a + b; }"
        },
        "Operators": {
            "description": "Unlike languages like C++, Java does not have explicit pointers. Instead, Java uses references to objects, which are automatically managed by the Java Virtual Machine (JVM).",
            "example": "Object obj = new Object(); // 'obj' is a reference to an object in Java."
        },

        "Arrays": {
            "description": "Java does not have built-in support for structures. Instead, developers commonly use classes to define structures that encapsulate data and behavior.",
            "example": "class Person { String name; int age; } // Defines a structure using a class."
        },

        "Methods": {
            "description": "File handling in Java involves reading from and writing to files. The java.nio package provides classes for efficient file operations.",
            "example": "try (BufferedReader reader = new BufferedReader(new FileReader(\"file.txt\"))) { String line = reader.readLine(); } catch (IOException e) { e.printStackTrace(); }"
        },

        "Overloading": {
            "description": "Java manages memory automatically through its garbage collection system. Developers do not need to manually allocate or deallocate memory.",
            "example": "No explicit memory allocation example needed, as Java handles it automatically."
        },

        "Overriding": {
            "description": "Recursion in Java involves a method calling itself to solve a problem. It is commonly used for tasks like traversing tree structures.",
            "example": "public int factorial(int n) { return (n == 0 || n == 1) ? 1 : n * factorial(n - 1); }"
        },

        "Scope": {
            "description": "Java supports a variety of data types, including primitive types (int, double, char) and reference types (objects). Understanding data types is essential for effective programming.",
            "example": "int intValue = 42; // Example of a primitive data type"
        },

        "Recursion": {
            "description": "Operators in Java perform operations on variables and values. Common operators include arithmetic operators (+, -, *), comparison operators (==, !=), and logical operators (&&, ||).",
            "example": "int result = a + b; // Addition operator example"
        },

        "Classes": {
            "description": "Strings in Java are sequences of characters. The String class provides various methods for working with strings, such as concatenation and substring extraction.",
            "example": "String greeting = \"Hello, \";\nString name = \"John\";\nString message = greeting + name; // Concatenation example"
        },

        "Modifier": {
            "description": "A linked list is a data structure in Java where each element (node) points to the next one in the sequence. Linked lists are dynamic and allow efficient insertion and deletion.",
            "example": "class Node {\n  int data;\n  Node next;\n}\n// Example of a simple linked list node"
        },

        "Packages / API": {
            "description": "A stack is a data structure in Java that follows the Last In, First Out (LIFO) principle. Elements are added and removed from the top of the stack.",
            "example": "Stack<Integer> stack = new Stack<>();\nstack.push(1); // Pushing an element onto the stack"
        },

        "Interface": {
            "description": "A queue is a data structure in Java that follows the First In, First Out (FIFO) principle. Elements are added at the rear and removed from the front of the queue.",
            "example": "Queue<String> queue = new LinkedList<>();\nqueue.add(\"Task 1\"); // Adding an element to the queue"
        },

        "Constructor": {
            "description": "A tree is a hierarchical data structure in Java with a root node and branches connecting various nodes. Trees are commonly used for representing hierarchical relationships.",
            "example": "class TreeNode {\n  int data;\n  List<TreeNode> children;\n}\n// Example of a simple tree node"
        },
        "Type Casting": {
            "description": "Java supports various data types, including primitive types like int, double, char, and boolean, as well as reference types like objects and arrays.",
            "example": "int num = 10; // Example of using a primitive data type\nString message = \"Hello\"; // Example of using a reference data type"
        },

        "Encapsulation": {
            "description": "Operators in Java are symbols that perform operations on operands. They include arithmetic operators, relational operators, logical operators, and more.",
            "example": "int result = 10 + 5; // Example of using an arithmetic operator\nboolean isGreaterThan = (10 > 5); // Example of using a relational operator"
        },

        "Inheritance": {
            "description": "Strings in Java are sequences of characters. Java provides a rich set of methods for working with strings, such as concatenation, substring extraction, and searching.",
            "example": "String fullName = \"John Doe\"; // Example of creating a string\nint length = fullName.length(); // Example of getting the length of a string"
        },

        "Polymorphism": {
            "description": "A linked list is a data structure consisting of a sequence of elements, where each element points to the next one in the sequence. Java provides the LinkedList class for implementing linked lists.",
            "example": "LinkedList<String> list = new LinkedList<>(); // Example of creating a linked list\nlist.add(\"Apple\"); // Example of adding an element to the linked list"
        },

        "Abstraction": {
            "description": "A stack is a data structure that follows the Last In, First Out (LIFO) principle. Java provides the Stack class for implementing stacks.",
            "example": "Stack<Integer> stack = new Stack<>(); // Example of creating a stack\nstack.push(10); // Example of pushing an element onto the stack"
        },

        "Enum": {
            "description": "A queue is a data structure that follows the First In, First Out (FIFO) principle. Java provides the Queue interface and its implementations, such as LinkedList and ArrayDeque, for implementing queues.",
            "example": "Queue<String> queue = new LinkedList<>(); // Example of creating a queue\nqueue.offer(\"Apple\"); // Example of adding an element to the queue"
        },

        "File Handling": {
            "description": "A tree is a hierarchical data structure with a root node and branches connecting various nodes. Java provides libraries for working with trees, such as the java.util.TreeMap and java.util.TreeSet classes.",
            "example": "TreeMap<Integer, String> treeMap = new TreeMap<>(); // Example of creating a tree map\n treeMap.put(1, \"One\"); // Example of adding a key-value pair to the tree map"
        },

        "ArrayList": {
            "description": "Sorting algorithms are used to arrange elements in a specific order. Java provides various sorting algorithms, including bubble sort, selection sort, insertion sort, merge sort, and quick sort.",
            "example": "int[] array = {5, 2, 7, 1, 9};\nArrays.sort(array); // Example of using the built-in sort method to sort an array"
        },

        "LinkedList": {
            "description": "Searching algorithms are used to find a specific element in a collection of data. Java provides various searching algorithms, including linear search and binary search.",
            "example": "int[] array = {5, 2, 7, 1, 9};\nint index = Arrays.binarySearch(array, 7); // Example of using the built-in binary search method to find an element"
        },

        "Iterator": {
            "description": "Error handling in Java involves handling exceptions that may occur during program execution. Java provides try-catch blocks for handling exceptions and ensuring graceful program termination.",
            "example": "try {\n    // Code that may throw an exception\n} catch (Exception e) {\n    // Handle the exception\n}"
        },
        "HashMap": {
            "description": "HashMap Error handling in Java involves handling exceptions that may occur during program execution. Java provides try-catch blocks for handling exceptions and ensuring graceful program termination.",
            "example": "try {\n    // Code that may throw an exception\n} catch (Exception e) {\n    // Handle the exception\n}"
        },
        "HashSet": {
            "description": "HashSet Error handling in Java involves handling exceptions that may occur during program execution. Java provides try-catch blocks for handling exceptions and ensuring graceful program termination.",
            "example": "try {\n    // Code that may throw an exception\n} catch (Exception e) {\n    // Handle the exception\n}"
        },
        "Exceptions": {
            "description": "Exceptions Error handling in Java involves handling exceptions that may occur during program execution. Java provides try-catch blocks for handling exceptions and ensuring graceful program termination.",
            "example": "try {\n    // Code that may throw an exception\n} catch (Exception e) {\n    // Handle the exception\n}"
        },
    },
    HTML: {
        "Introduction": {
            "description": "In C, variables are used to store data values. They provide named memory locations that can hold different types of data, such as numbers or characters.",
            "example": "int age = 25; // Declares an integer variable 'age' and assigns the value 25."
        },
        "Editors": {
            "description": "Conditional statements in C, such as if-else statements, allow your program to make decisions based on certain conditions. They control the flow of execution.",
            "example": "if (age >= 18) { printf(\"You are eligible to vote.\"); }"
        },
        "Basic": {
            "description": "Loops in C, like for and while loops, are used to repeatedly execute a block of code. They are essential for automating repetitive tasks.",
            "example": "for (int i = 0; i < 5; i++) { printf(\"Iteration %d\\n\", i); }"
        },
        "Elements": {
            "description": "Arrays in C are data structures that store a collection of elements. They provide a way to organize and access a group of related values under a single name.",
            "example": "int numbers[5] = {1, 2, 3, 4, 5}; // Declares an array of integers."
        },
        "Attributes": {
            "description": "Functions in C are blocks of code designed to perform a specific task. They improve code modularity and reusability, allowing you to organize your program effectively.",
            "example": "int addNumbers(int a, int b) { return a + b; }"
        },
        "Headings": {
            "description": "Pointers in C are variables that store memory addresses. They are used for dynamic memory allocation, accessing data structures, and implementing certain algorithms.",
            "example": "int *ptr; // Declares a pointer variable\nint value = 10;\nptr = &value; // Assigns the address of 'value' to the pointer"
        },
        "Paragraphs": {
            "description": "Structures in C are user-defined data types that allow bundling different data types together under a single name. They provide a way to organize related variables.",
            "example": "struct Person { char name[50]; int age; }; // Defines a structure using 'struct'"
        },
        "Styles": {
            "description": "File handling in C involves operations like reading from and writing to files. Standard library functions, such as fopen, fread, and fwrite, support these operations.",
            "example": "FILE *file = fopen(\"example.txt\", \"r\"); // Opens a file for reading\nchar buffer[100];\nfread(buffer, sizeof(char), sizeof(buffer), file); // Reads data from the file"
        },
        "Formating": {
            "description": "Memory allocation in C is managed through functions like malloc and free. These functions allow dynamic allocation and deallocation of memory.",
            "example": "int *dynamicArray = (int *)malloc(5 * sizeof(int)); // Allocates memory for an array dynamically\nfree(dynamicArray); // Deallocates the allocated memory"
        },
        "Comments": {
            "description": "Recursion in C involves a function calling itself to solve a problem. It is commonly used in algorithms for tasks such as traversing trees and solving mathematical problems.",
            "example": "int factorial(int n) { return (n == 0 || n == 1) ? 1 : n * factorial(n - 1); }"
        },
        "Quotations": {
            "description": "Data types in C define the type of data that a variable can hold. Common data types include int, float, char, and double, each serving different purposes.",
            "example": "int integerNumber = 42; // Example of using an integer data type\nfloat floatingNumber = 3.14; // Example of using a floating-point data type"
        },
        "Colors": {
            "description": "Operators in C perform operations on variables and values. They include arithmetic operators (+, -, *, /), relational operators (<, >, ==), and logical operators (&&, ||).",
            "example": "int result = 10 + 5; // Example of using an arithmetic operator\nbool isEqual = (10 == 5); // Example of using a relational operator"
        },
        "Links": {
            "description": "Strings in C are arrays of characters that represent text. They are manipulated using functions from the string.h library, providing operations like concatenation and comparison.",
            "example": "char greeting[20] = \"Hello, \";\nstrcat(greeting, \"world!\"); // Concatenates strings"
        },
        "Images": {
            "description": "A linked list in C is a data structure consisting of nodes, where each node contains data and a reference to the next node in the sequence.",
            "example": "struct Node { int data; struct Node *next; }; // Example of a node in a linked list"
        },
        "Favicon": {
            "description": "A stack in C is a data structure following the Last In, First Out (LIFO) principle. Elements are added and removed from the top of the stack.",
            "example": "struct Stack { int data; struct Stack *next; }; // Example of a stack node"
        },
        "Page Title": {
            "description": "A queue in C is a data structure following the First In, First Out (FIFO) principle. Elements are added at the rear and removed from the front.",
            "example": "struct Queue { int data; struct Queue *next; }; // Example of a queue node"
        },
        "Tables": {
            "description": "A tree in C is a hierarchical data structure with a root node and branches connecting various nodes. Trees are used in applications like hierarchical data representation.",
            "example": "struct TreeNode { int data; struct TreeNode *left; struct TreeNode *right; }; // Example of a tree node"
        },
        "Lists": {
            "description": "Sorting algorithms in C arrange elements in a specific order. Common sorting algorithms include bubble sort, merge sort, and quicksort.",
            "example": "int array[] = {5, 2, 8, 1, 6};\nbubbleSort(array, 5); // Example of using bubble sort"
        },
        "Block & Inline": {
            "description": "Searching algorithms in C locate a specific element within a collection of data. Common searching algorithms include linear search and binary search.",
            "example": "int array[] = {5, 2, 8,8}"
        },
        "Classes": {
            "description": "In C, structures allow you to group different data types under a single name. They provide a way to represent a record or a collection of related information.",
            "example": "struct Person { char name[50]; int age; float salary; }; // Defines a structure for a person"
        },

        "ID": {
            "description": "File handling in C involves operations like opening, reading, writing, and closing files. Standard library functions like fopen, fread, fwrite, and fclose are commonly used.",
            "example": "FILE *file = fopen(\"example.txt\", \"w\");\nif (file != NULL) { fprintf(file, \"Hello, World!\"); fclose(file); }"
        },

        "IFrames": {
            "description": "Dynamic memory allocation in C is done using functions like malloc, calloc, realloc, and free. It allows you to allocate and deallocate memory during runtime.",
            "example": "int *arr = (int *)malloc(5 * sizeof(int)); // Allocates an array of 5 integers dynamically\nfree(arr); // Deallocates the allocated memory"
        },

        "JavaScirpt": {
            "description": "Recursion in C involves a function calling itself to solve a problem. It is commonly used in algorithms like factorial computation and traversing data structures.",
            "example": "int factorial(int n) { return (n == 0 || n == 1) ? 1 : n * factorial(n - 1); }"
        },

        "File Paths": {
            "description": "In C, arrays and pointers are closely related. Pointers can be used to navigate and manipulate array elements, and arrays can decay into pointers in certain contexts.",
            "example": "int numbers[5] = {1, 2, 3, 4, 5};\nint *ptr = numbers; // 'ptr' points to the first element of the array"
        },

        "Head": {
            "description": "File handling in C involves operations like opening, reading, writing, and closing files. Standard library functions like fopen, fread, fwrite, and fclose are commonly used.",
            "example": "FILE *file = fopen(\"example.txt\", \"w\");\nif (file != NULL) { fprintf(file, \"Hello, World!\"); fclose(file); }"
        },

        "Layout": {
            "description": "Error handling in C is often done through return values and error codes. Functions may return specific values to indicate success or failure, and error-checking is essential.",
            "example": "int result = someFunction();\nif (result == -1) { perror(\"Error in someFunction\"); exit(EXIT_FAILURE); }"
        },
        "Responsive": {
            "description": "Error handling in C is often done through return values and error codes. Functions may return specific values to indicate success or failure, and error-checking is essential.",
            "example": "int result = someFunction();\nif (result == -1) { perror(\"Error in someFunction\"); exit(EXIT_FAILURE); }"
        },
        "Semantics": {
            "description": "Error handling in C is often done through return values and error codes. Functions may return specific values to indicate success or failure, and error-checking is essential.",
            "example": "int result = someFunction();\nif (result == -1) { perror(\"Error in someFunction\"); exit(EXIT_FAILURE); }"
        },
        "Style Guide": {
            "description": "Error handling in C is often done through return values and error codes. Functions may return specific values to indicate success or failure, and error-checking is essential.",
            "example": "int result = someFunction();\nif (result == -1) { perror(\"Error in someFunction\"); exit(EXIT_FAILURE); }"
        },
        "Entities": {
            "description": "Error handling in C is often done through return values and error codes. Functions may return specific values to indicate success or failure, and error-checking is essential.",
            "example": "int result = someFunction();\nif (result == -1) { perror(\"Error in someFunction\"); exit(EXIT_FAILURE); }"
        },
        "Symbols": {
            "description": "Error handling in C is often done through return values and error codes. Functions may return specific values to indicate success or failure, and error-checking is essential.",
            "example": "int result = someFunction();\nif (result == -1) { perror(\"Error in someFunction\"); exit(EXIT_FAILURE); }"
        },
        "Charsets": {
            "description": "Error handling in C is often done through return values and error codes. Functions may return specific values to indicate success or failure, and error-checking is essential.",
            "example": "int result = someFunction();\nif (result == -1) { perror(\"Error in someFunction\"); exit(EXIT_FAILURE); }"
        },
        "URL Encode": {
            "description": "Error handling in C is often done through return values and error codes. Functions may return specific values to indicate success or failure, and error-checking is essential.",
            "example": "int result = someFunction();\nif (result == -1) { perror(\"Error in someFunction\"); exit(EXIT_FAILURE); }"
        },
        "XHTML": {
            "description": "Error handling in C is often done through return values and error codes. Functions may return specific values to indicate success or failure, and error-checking is essential.",
            "example": "int result = someFunction();\nif (result == -1) { perror(\"Error in someFunction\"); exit(EXIT_FAILURE); }"
        },
        
    },
    // .Net: {},
    Php: {
        "Introduction": {
            "description": "In Java, variables are used to store information that can be changed during the program's execution. You can declare variables with a data type and a name.",
            "example": "int age = 25; // Declares an integer variable 'age' and assigns the value 25."
        },
        "Install": {
            "description": "Conditional statements allow your program to make decisions based on certain conditions. Common conditional statements include if-else, switch, and ternary operator.",
            "example": "if (age >= 18) { System.out.println(\"You are eligible to vote.\"); }"
        },
        "Syntax": {
            "description": "Loops in Java are used to repeatedly execute a block of code. Common loop structures include for, while, and do-while loops.",
            "example": "for (int i = 0; i < 5; i++) { System.out.println(\"Iteration \" + i); }"
        },
        "Comments": {
            "description": "Arrays are used to store multiple values of the same data type in Java. They provide a convenient way to work with collections of data.",
            "example": "int[] numbers = {1, 2, 3, 4, 5}; // Declares an array of integers."
        },
        "Variables": {
            "description": "Functions, also known as methods in Java, allow you to group a set of statements into a single unit. They promote code reusability and modular programming.",
            "example": "public int addNumbers(int a, int b) { return a + b; }"
        },
        "Scope": {
            "description": "Unlike languages like C++, Java does not have explicit pointers. Instead, Java uses references to objects, which are automatically managed by the Java Virtual Machine (JVM).",
            "example": "Object obj = new Object(); // 'obj' is a reference to an object in Java."
        },

        "Echo": {
            "description": "Java does not have built-in support for structures. Instead, developers commonly use classes to define structures that encapsulate data and behavior.",
            "example": "class Person { String name; int age; } // Defines a structure using a class."
        },

        "Data Types": {
            "description": "File handling in Java involves reading from and writing to files. The java.nio package provides classes for efficient file operations.",
            "example": "try (BufferedReader reader = new BufferedReader(new FileReader(\"file.txt\"))) { String line = reader.readLine(); } catch (IOException e) { e.printStackTrace(); }"
        },

        "Strings": {
            "description": "Java manages memory automatically through its garbage collection system. Developers do not need to manually allocate or deallocate memory.",
            "example": "No explicit memory allocation example needed, as Java handles it automatically."
        },

        "Escape Characters": {
            "description": "Recursion in Java involves a method calling itself to solve a problem. It is commonly used for tasks like traversing tree structures.",
            "example": "public int factorial(int n) { return (n == 0 || n == 1) ? 1 : n * factorial(n - 1); }"
        },

        "Casting": {
            "description": "Java supports a variety of data types, including primitive types (int, double, char) and reference types (objects). Understanding data types is essential for effective programming.",
            "example": "int intValue = 42; // Example of a primitive data type"
        },

        "Operators": {
            "description": "Operators in Java perform operations on variables and values. Common operators include arithmetic operators (+, -, *), comparison operators (==, !=), and logical operators (&&, ||).",
            "example": "int result = a + b; // Addition operator example"
        },

        "Nested if": {
            "description": "Strings in Java are sequences of characters. The String class provides various methods for working with strings, such as concatenation and substring extraction.",
            "example": "String greeting = \"Hello, \";\nString name = \"John\";\nString message = greeting + name; // Concatenation example"
        },

        "Switch": {
            "description": "A linked list is a data structure in Java where each element (node) points to the next one in the sequence. Linked lists are dynamic and allow efficient insertion and deletion.",
            "example": "class Node {\n  int data;\n  Node next;\n}\n// Example of a simple linked list node"
        },

        "Loops": {
            "description": "A stack is a data structure in Java that follows the Last In, First Out (LIFO) principle. Elements are added and removed from the top of the stack.",
            "example": "Stack<Integer> stack = new Stack<>();\nstack.push(1); // Pushing an element onto the stack"
        },

        "While Loop": {
            "description": "A queue is a data structure in Java that follows the First In, First Out (FIFO) principle. Elements are added at the rear and removed from the front of the queue.",
            "example": "Queue<String> queue = new LinkedList<>();\nqueue.add(\"Task 1\"); // Adding an element to the queue"
        },

        "Do While Loop": {
            "description": "A tree is a hierarchical data structure in Java with a root node and branches connecting various nodes. Trees are commonly used for representing hierarchical relationships.",
            "example": "class TreeNode {\n  int data;\n  List<TreeNode> children;\n}\n// Example of a simple tree node"
        },
        "For Loop": {
            "description": "Java supports various data types, including primitive types like int, double, char, and boolean, as well as reference types like objects and arrays.",
            "example": "int num = 10; // Example of using a primitive data type\nString message = \"Hello\"; // Example of using a reference data type"
        },

        "Foreach Loop": {
            "description": "Operators in Java are symbols that perform operations on operands. They include arithmetic operators, relational operators, logical operators, and more.",
            "example": "int result = 10 + 5; // Example of using an arithmetic operator\nboolean isGreaterThan = (10 > 5); // Example of using a relational operator"
        },

        "Break": {
            "description": "Strings in Java are sequences of characters. Java provides a rich set of methods for working with strings, such as concatenation, substring extraction, and searching.",
            "example": "String fullName = \"John Doe\"; // Example of creating a string\nint length = fullName.length(); // Example of getting the length of a string"
        },

        "Continue": {
            "description": "A linked list is a data structure consisting of a sequence of elements, where each element points to the next one in the sequence. Java provides the LinkedList class for implementing linked lists.",
            "example": "LinkedList<String> list = new LinkedList<>(); // Example of creating a linked list\nlist.add(\"Apple\"); // Example of adding an element to the linked list"
        },

        "Functions": {
            "description": "A stack is a data structure that follows the Last In, First Out (LIFO) principle. Java provides the Stack class for implementing stacks.",
            "example": "Stack<Integer> stack = new Stack<>(); // Example of creating a stack\nstack.push(10); // Example of pushing an element onto the stack"
        },

        "Arrays": {
            "description": "A queue is a data structure that follows the First In, First Out (FIFO) principle. Java provides the Queue interface and its implementations, such as LinkedList and ArrayDeque, for implementing queues.",
            "example": "Queue<String> queue = new LinkedList<>(); // Example of creating a queue\nqueue.offer(\"Apple\"); // Example of adding an element to the queue"
        },
    },
    JavaScript: {
        "Variables": {
            "description": "In Java, variables are used to store information that can be changed during the program's execution. You can declare variables with a data type and a name.",
            "example": "int age = 25; // Declares an integer variable 'age' and assigns the value 25."
        },
        "Data Types": {
            "description": "Conditional statements allow your program to make decisions based on certain conditions. Common conditional statements include if-else, switch, and ternary operator.",
            "example": "if (age >= 18) { System.out.println(\"You are eligible to vote.\"); }"
        },
        "Operators": {
            "description": "Loops in Java are used to repeatedly execute a block of code. Common loop structures include for, while, and do-while loops.",
            "example": "for (int i = 0; i < 5; i++) { System.out.println(\"Iteration \" + i); }"
        },
        "Control Flow": {
            "description": "Arrays are used to store multiple values of the same data type in Java. They provide a convenient way to work with collections of data.",
            "example": "int[] numbers = {1, 2, 3, 4, 5}; // Declares an array of integers."
        },
        "Loops": {
            "description": "Functions, also known as methods in Java, allow you to group a set of statements into a single unit. They promote code reusability and modular programming.",
            "example": "public int addNumbers(int a, int b) { return a + b; }"
        },
        "Functions": {
            "description": "Unlike languages like C++, Java does not have explicit pointers. Instead, Java uses references to objects, which are automatically managed by the Java Virtual Machine (JVM).",
            "example": "Object obj = new Object(); // 'obj' is a reference to an object in Java."
        },

        "Scope": {
            "description": "Java does not have built-in support for structures. Instead, developers commonly use classes to define structures that encapsulate data and behavior.",
            "example": "class Person { String name; int age; } // Defines a structure using a class."
        },

        "Arrays": {
            "description": "File handling in Java involves reading from and writing to files. The java.nio package provides classes for efficient file operations.",
            "example": "try (BufferedReader reader = new BufferedReader(new FileReader(\"file.txt\"))) { String line = reader.readLine(); } catch (IOException e) { e.printStackTrace(); }"
        },

        "Objects": {
            "description": "Java manages memory automatically through its garbage collection system. Developers do not need to manually allocate or deallocate memory.",
            "example": "No explicit memory allocation example needed, as Java handles it automatically."
        },

        "JSON": {
            "description": "Recursion in Java involves a method calling itself to solve a problem. It is commonly used for tasks like traversing tree structures.",
            "example": "public int factorial(int n) { return (n == 0 || n == 1) ? 1 : n * factorial(n - 1); }"
        },

        "Classes": {
            "description": "Java supports a variety of data types, including primitive types (int, double, char) and reference types (objects). Understanding data types is essential for effective programming.",
            "example": "int intValue = 42; // Example of a primitive data type"
        },

        "Prototype": {
            "description": "Operators in Java perform operations on variables and values. Common operators include arithmetic operators (+, -, *), comparison operators (==, !=), and logical operators (&&, ||).",
            "example": "int result = a + b; // Addition operator example"
        },

        "Closures": {
            "description": "Strings in Java are sequences of characters. The String class provides various methods for working with strings, such as concatenation and substring extraction.",
            "example": "String greeting = \"Hello, \";\nString name = \"John\";\nString message = greeting + name; // Concatenation example"
        },

        "Callbacks": {
            "description": "A linked list is a data structure in Java where each element (node) points to the next one in the sequence. Linked lists are dynamic and allow efficient insertion and deletion.",
            "example": "class Node {\n  int data;\n  Node next;\n}\n// Example of a simple linked list node"
        },

        "Promises": {
            "description": "A stack is a data structure in Java that follows the Last In, First Out (LIFO) principle. Elements are added and removed from the top of the stack.",
            "example": "Stack<Integer> stack = new Stack<>();\nstack.push(1); // Pushing an element onto the stack"
        },

        "Async/Await": {
            "description": "A queue is a data structure in Java that follows the First In, First Out (FIFO) principle. Elements are added at the rear and removed from the front of the queue.",
            "example": "Queue<String> queue = new LinkedList<>();\nqueue.add(\"Task 1\"); // Adding an element to the queue"
        },

        "Event Handling": {
            "description": "A tree is a hierarchical data structure in Java with a root node and branches connecting various nodes. Trees are commonly used for representing hierarchical relationships.",
            "example": "class TreeNode {\n  int data;\n  List<TreeNode> children;\n}\n// Example of a simple tree node"
        },
        "DOM Manipulation": {
            "description": "Java supports various data types, including primitive types like int, double, char, and boolean, as well as reference types like objects and arrays.",
            "example": "int num = 10; // Example of using a primitive data type\nString message = \"Hello\"; // Example of using a reference data type"
        },

        "AJAX": {
            "description": "Operators in Java are symbols that perform operations on operands. They include arithmetic operators, relational operators, logical operators, and more.",
            "example": "int result = 10 + 5; // Example of using an arithmetic operator\nboolean isGreaterThan = (10 > 5); // Example of using a relational operator"
        },

        "Fetch API": {
            "description": "Strings in Java are sequences of characters. Java provides a rich set of methods for working with strings, such as concatenation, substring extraction, and searching.",
            "example": "String fullName = \"John Doe\"; // Example of creating a string\nint length = fullName.length(); // Example of getting the length of a string"
        },

        "ES Modules": {
            "description": "A linked list is a data structure consisting of a sequence of elements, where each element points to the next one in the sequence. Java provides the LinkedList class for implementing linked lists.",
            "example": "LinkedList<String> list = new LinkedList<>(); // Example of creating a linked list\nlist.add(\"Apple\"); // Example of adding an element to the linked list"
        },

        "Error Handling": {
            "description": "A stack is a data structure that follows the Last In, First Out (LIFO) principle. Java provides the Stack class for implementing stacks.",
            "example": "Stack<Integer> stack = new Stack<>(); // Example of creating a stack\nstack.push(10); // Example of pushing an element onto the stack"
        },

        "Regular Expressions": {
            "description": "A queue is a data structure that follows the First In, First Out (FIFO) principle. Java provides the Queue interface and its implementations, such as LinkedList and ArrayDeque, for implementing queues.",
            "example": "Queue<String> queue = new LinkedList<>(); // Example of creating a queue\nqueue.offer(\"Apple\"); // Example of adding an element to the queue"
        },

        "Template Literals": {
            "description": "A tree is a hierarchical data structure with a root node and branches connecting various nodes. Java provides libraries for working with trees, such as the java.util.TreeMap and java.util.TreeSet classes.",
            "example": "TreeMap<Integer, String> treeMap = new TreeMap<>(); // Example of creating a tree map\n treeMap.put(1, \"One\"); // Example of adding a key-value pair to the tree map"
        },

        "Destructuring": {
            "description": "Sorting algorithms are used to arrange elements in a specific order. Java provides various sorting algorithms, including bubble sort, selection sort, insertion sort, merge sort, and quick sort.",
            "example": "int[] array = {5, 2, 7, 1, 9};\nArrays.sort(array); // Example of using the built-in sort method to sort an array"
        },

        "Spread Syntax": {
            "description": "Searching algorithms are used to find a specific element in a collection of data. Java provides various searching algorithms, including linear search and binary search.",
            "example": "int[] array = {5, 2, 7, 1, 9};\nint index = Arrays.binarySearch(array, 7); // Example of using the built-in binary search method to find an element"
        },

        "Rest Parameters": {
            "description": "Error handling in Java involves handling exceptions that may occur during program execution. Java provides try-catch blocks for handling exceptions and ensuring graceful program termination.",
            "example": "try {\n    // Code that may throw an exception\n} catch (Exception e) {\n    // Handle the exception\n}"
        },
        "Higher-Order Functions": {
            "description": "Error handling in Java involves handling exceptions that may occur during program execution. Java provides try-catch blocks for handling exceptions and ensuring graceful program termination.",
            "example": "try {\n    // Code that may throw an exception\n} catch (Exception e) {\n    // Handle the exception\n}"
        },
        "Set": {
            "description": "Error handling in Java involves handling exceptions that may occur during program execution. Java provides try-catch blocks for handling exceptions and ensuring graceful program termination.",
            "example": "try {\n    // Code that may throw an exception\n} catch (Exception e) {\n    // Handle the exception\n}"
        },
        "Map": {
            "description": "Error handling in Java involves handling exceptions that may occur during program execution. Java provides try-catch blocks for handling exceptions and ensuring graceful program termination.",
            "example": "try {\n    // Code that may throw an exception\n} catch (Exception e) {\n    // Handle the exception\n}"
        },
        "WeakMap": {
            "description": "Error handling in Java involves handling exceptions that may occur during program execution. Java provides try-catch blocks for handling exceptions and ensuring graceful program termination.",
            "example": "try {\n    // Code that may throw an exception\n} catch (Exception e) {\n    // Handle the exception\n}"
        },
        "WeakSet": {
            "description": "Error handling in Java involves handling exceptions that may occur during program execution. Java provides try-catch blocks for handling exceptions and ensuring graceful program termination.",
            "example": "try {\n    // Code that may throw an exception\n} catch (Exception e) {\n    // Handle the exception\n}"
        },
        "Functional Programming Concepts": {
            "description": "Error handling in Java involves handling exceptions that may occur during program execution. Java provides try-catch blocks for handling exceptions and ensuring graceful program termination.",
            "example": "try {\n    // Code that may throw an exception\n} catch (Exception e) {\n    // Handle the exception\n}"
        },
        "Browser Storage": {
            "description": "Error handling in Java involves handling exceptions that may occur during program execution. Java provides try-catch blocks for handling exceptions and ensuring graceful program termination.",
            "example": "try {\n    // Code that may throw an exception\n} catch (Exception e) {\n    // Handle the exception\n}"
        },
        "Web APIs": {
            "description": "Error handling in Java involves handling exceptions that may occur during program execution. Java provides try-catch blocks for handling exceptions and ensuring graceful program termination.",
            "example": "try {\n    // Code that may throw an exception\n} catch (Exception e) {\n    // Handle the exception\n}"
        },
        "WebSocket": {
            "description": "Error handling in Java involves handling exceptions that may occur during program execution. Java provides try-catch blocks for handling exceptions and ensuring graceful program termination.",
            "example": "try {\n    // Code that may throw an exception\n} catch (Exception e) {\n    // Handle the exception\n}"
        },
        "Service Workers": {
            "description": "Error handling in Java involves handling exceptions that may occur during program execution. Java provides try-catch blocks for handling exceptions and ensuring graceful program termination.",
            "example": "try {\n    // Code that may throw an exception\n} catch (Exception e) {\n    // Handle the exception\n}"
        },
        "Webpack (Module Bundler)": {
            "description": "Error handling in Java involves handling exceptions that may occur during program execution. Java provides try-catch blocks for handling exceptions and ensuring graceful program termination.",
            "example": "try {\n    // Code that may throw an exception\n} catch (Exception e) {\n    // Handle the exception\n}"
        },
        "Debugging Techniques": {
            "description": "Error handling in Java involves handling exceptions that may occur during program execution. Java provides try-catch blocks for handling exceptions and ensuring graceful program termination.",
            "example": "try {\n    // Code that may throw an exception\n} catch (Exception e) {\n    // Handle the exception\n}"
        },
        "Performance Optimization": {
            "description": "Error handling in Java involves handling exceptions that may occur during program execution. Java provides try-catch blocks for handling exceptions and ensuring graceful program termination.",
            "example": "try {\n    // Code that may throw an exception\n} catch (Exception e) {\n    // Handle the exception\n}"
        },
        "Express": {
            "description": "Error handling in Java involves handling exceptions that may occur during program execution. Java provides try-catch blocks for handling exceptions and ensuring graceful program termination.",
            "example": "try {\n    // Code that may throw an exception\n} catch (Exception e) {\n    // Handle the exception\n}"
        },
        "RESTful APIs": {
            "description": "Error handling in Java involves handling exceptions that may occur during program execution. Java provides try-catch blocks for handling exceptions and ensuring graceful program termination.",
            "example": "try {\n    // Code that may throw an exception\n} catch (Exception e) {\n    // Handle the exception\n}"
        },
        "Authentication and Authorization": {
            "description": "Error handling in Java involves handling exceptions that may occur during program execution. Java provides try-catch blocks for handling exceptions and ensuring graceful program termination.",
            "example": "try {\n    // Code that may throw an exception\n} catch (Exception e) {\n    // Handle the exception\n}"
        },
        "Middleware": {
            "description": "Error handling in Java involves handling exceptions that may occur during program execution. Java provides try-catch blocks for handling exceptions and ensuring graceful program termination.",
            "example": "try {\n    // Code that may throw an exception\n} catch (Exception e) {\n    // Handle the exception\n}"
        },
    },
    TypeScript: {
        "Introduction to TypeScript": {
            "description": "In Java, variables are used to store information that can be changed during the program's execution. You can declare variables with a data type and a name.",
            "example": "int age = 25; // Declares an integer variable 'age' and assigns the value 25."
        },
        "Type Annotations": {
            "description": "Conditional statements allow your program to make decisions based on certain conditions. Common conditional statements include if-else, switch, and ternary operator.",
            "example": "if (age >= 18) { System.out.println(\"You are eligible to vote.\"); }"
        },
        "Basic Types": {
            "description": "Loops in Java are used to repeatedly execute a block of code. Common loop structures include for, while, and do-while loops.",
            "example": "for (int i = 0; i < 5; i++) { System.out.println(\"Iteration \" + i); }"
        },
        "Interfaces": {
            "description": "Arrays are used to store multiple values of the same data type in Java. They provide a convenient way to work with collections of data.",
            "example": "int[] numbers = {1, 2, 3, 4, 5}; // Declares an array of integers."
        },
        "Classes": {
            "description": "Functions, also known as methods in Java, allow you to group a set of statements into a single unit. They promote code reusability and modular programming.",
            "example": "public int addNumbers(int a, int b) { return a + b; }"
        },
        "Inheritance": {
            "description": "Unlike languages like C++, Java does not have explicit pointers. Instead, Java uses references to objects, which are automatically managed by the Java Virtual Machine (JVM).",
            "example": "Object obj = new Object(); // 'obj' is a reference to an object in Java."
        },

        "Access Modifiers": {
            "description": "Java does not have built-in support for structures. Instead, developers commonly use classes to define structures that encapsulate data and behavior.",
            "example": "class Person { String name; int age; } // Defines a structure using a class."
        },

        "Generics": {
            "description": "File handling in Java involves reading from and writing to files. The java.nio package provides classes for efficient file operations.",
            "example": "try (BufferedReader reader = new BufferedReader(new FileReader(\"file.txt\"))) { String line = reader.readLine(); } catch (IOException e) { e.printStackTrace(); }"
        },

        "Type Inference": {
            "description": "Java manages memory automatically through its garbage collection system. Developers do not need to manually allocate or deallocate memory.",
            "example": "No explicit memory allocation example needed, as Java handles it automatically."
        },

        "Type Guards": {
            "description": "Recursion in Java involves a method calling itself to solve a problem. It is commonly used for tasks like traversing tree structures.",
            "example": "public int factorial(int n) { return (n == 0 || n == 1) ? 1 : n * factorial(n - 1); }"
        },

        "Enums": {
            "description": "Java supports a variety of data types, including primitive types (int, double, char) and reference types (objects). Understanding data types is essential for effective programming.",
            "example": "int intValue = 42; // Example of a primitive data type"
        },

        "Tuple Types": {
            "description": "Operators in Java perform operations on variables and values. Common operators include arithmetic operators (+, -, *), comparison operators (==, !=), and logical operators (&&, ||).",
            "example": "int result = a + b; // Addition operator example"
        },

        "Literal Types": {
            "description": "Strings in Java are sequences of characters. The String class provides various methods for working with strings, such as concatenation and substring extraction.",
            "example": "String greeting = \"Hello, \";\nString name = \"John\";\nString message = greeting + name; // Concatenation example"
        },

        "Type Assertions": {
            "description": "A linked list is a data structure in Java where each element (node) points to the next one in the sequence. Linked lists are dynamic and allow efficient insertion and deletion.",
            "example": "class Node {\n  int data;\n  Node next;\n}\n// Example of a simple linked list node"
        },

        "Modules": {
            "description": "A stack is a data structure in Java that follows the Last In, First Out (LIFO) principle. Elements are added and removed from the top of the stack.",
            "example": "Stack<Integer> stack = new Stack<>();\nstack.push(1); // Pushing an element onto the stack"
        },

        "Namespaces": {
            "description": "A queue is a data structure in Java that follows the First In, First Out (FIFO) principle. Elements are added at the rear and removed from the front of the queue.",
            "example": "Queue<String> queue = new LinkedList<>();\nqueue.add(\"Task 1\"); // Adding an element to the queue"
        },

        "Decorators": {
            "description": "A tree is a hierarchical data structure in Java with a root node and branches connecting various nodes. Trees are commonly used for representing hierarchical relationships.",
            "example": "class TreeNode {\n  int data;\n  List<TreeNode> children;\n}\n// Example of a simple tree node"
        },
        "Continuous Integration/Continuous Deployment": {
            "description": "Java supports various data types, including primitive types like int, double, char, and boolean, as well as reference types like objects and arrays.",
            "example": "int num = 10; // Example of using a primitive data type\nString message = \"Hello\"; // Example of using a reference data type"
        },

        "Mixins": {
            "description": "Operators in Java are symbols that perform operations on operands. They include arithmetic operators, relational operators, logical operators, and more.",
            "example": "int result = 10 + 5; // Example of using an arithmetic operator\nboolean isGreaterThan = (10 > 5); // Example of using a relational operator"
        },

        "TypeScript Configuration": {
            "description": "Strings in Java are sequences of characters. Java provides a rich set of methods for working with strings, such as concatenation, substring extraction, and searching.",
            "example": "String fullName = \"John Doe\"; // Example of creating a string\nint length = fullName.length(); // Example of getting the length of a string"
        },

        "Advanced Types": {
            "description": "A linked list is a data structure consisting of a sequence of elements, where each element points to the next one in the sequence. Java provides the LinkedList class for implementing linked lists.",
            "example": "LinkedList<String> list = new LinkedList<>(); // Example of creating a linked list\nlist.add(\"Apple\"); // Example of adding an element to the linked list"
        },

        "Utility Types": {
            "description": "A stack is a data structure that follows the Last In, First Out (LIFO) principle. Java provides the Stack class for implementing stacks.",
            "example": "Stack<Integer> stack = new Stack<>(); // Example of creating a stack\nstack.push(10); // Example of pushing an element onto the stack"
        },

        "Declaration Merging": {
            "description": "A queue is a data structure that follows the First In, First Out (FIFO) principle. Java provides the Queue interface and its implementations, such as LinkedList and ArrayDeque, for implementing queues.",
            "example": "Queue<String> queue = new LinkedList<>(); // Example of creating a queue\nqueue.offer(\"Apple\"); // Example of adding an element to the queue"
        },

        "Error Handling": {
            "description": "A tree is a hierarchical data structure with a root node and branches connecting various nodes. Java provides libraries for working with trees, such as the java.util.TreeMap and java.util.TreeSet classes.",
            "example": "TreeMap<Integer, String> treeMap = new TreeMap<>(); // Example of creating a tree map\n treeMap.put(1, \"One\"); // Example of adding a key-value pair to the tree map"
        },

        "Debugging": {
            "description": "Sorting algorithms are used to arrange elements in a specific order. Java provides various sorting algorithms, including bubble sort, selection sort, insertion sort, merge sort, and quick sort.",
            "example": "int[] array = {5, 2, 7, 1, 9};\nArrays.sort(array); // Example of using the built-in sort method to sort an array"
        },

        "Code Formatting": {
            "description": "Searching algorithms are used to find a specific element in a collection of data. Java provides various searching algorithms, including linear search and binary search.",
            "example": "int[] array = {5, 2, 7, 1, 9};\nint index = Arrays.binarySearch(array, 7); // Example of using the built-in binary search method to find an element"
        },

        "Optimizing": {
            "description": "Error handling in Java involves handling exceptions that may occur during program execution. Java provides try-catch blocks for handling exceptions and ensuring graceful program termination.",
            "example": "try {\n    // Code that may throw an exception\n} catch (Exception e) {\n    // Handle the exception\n}"
        },
        "Design Patterns": {
            "description": "Error handling in Java involves handling exceptions that may occur during program execution. Java provides try-catch blocks for handling exceptions and ensuring graceful program termination.",
            "example": "try {\n    // Code that may throw an exception\n} catch (Exception e) {\n    // Handle the exception\n}"
        },
    },
    jQuery: {},
    Angular: {},
    React: {},
    Vue: {},
    Node: {},
    Spring: {},
    MongoDB: {},
    Rust: {},
    Go: {},
    Swift: {},
    Scala: {},
    Ruby: {},
    MySQL: {},
    PostgreSQL: {},
    Django: {},
    Kotlin: {},
    Git: {},
    GitHub: {},

}