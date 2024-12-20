// Implement a function called, areThereDuplicates which accepts a 
// variable number of arguments, and checks whether there are any duplicates 
//   among the arguments passed in.
// You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Restrictions:
    // Time - O(n)
    // Space - O(n)
// Bonus:
    // Time - O(n log n)
    // Space - O(1)

function areThereDuplicates(...args){
    for(let i=args.length;i>0;i--){
        console.log(i, args)
        const item = args.pop()
        if(args.includes(item)){
            return true
        }
    }
    return false
}


// areThereDuplicates(1,2,3,4,5,6,7,3,9) // true
// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true 
areThereDuplicates('a', 'b', 'c', 'a') // true 