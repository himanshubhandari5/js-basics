// First, visit all the nodes in the left subtree
// Then the root node
// Visit all the nodes in the right subtree
/*
                    4
            3                 5
        9       4         1       2
      2   2   2   4     4   5   3   4
*/
/* 

[2,9,2,3,2,4,4,
4,
4,1,5,5,
3,2,4] 

[2, 9, 2, 3, 2, 4,
  4, 4, 4, 1, 5, 5,
  4, 2, 3
]
*/

const inorderTraversal = (root) => {
  let arr = []

  function traverse(node) {
    if (!node) {
      return
    }
    traverse(node.left)
    arr.push(node.val)
    traverse(node.right)
  }
  traverse(root)

  return arr
}

/* class Node {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
} */
function Node(val) {
  this.val = val
  this.left = null
  this.right = null
}

const N1 = new Node(4)
const N2 = new Node(3)
const N3 = new Node(5)
const N4 = new Node(9)
const N5 = new Node(4)
const N6 = new Node(1)
const N7 = new Node(2)
const N8 = new Node(2)
const N9 = new Node(2)
const N10 = new Node(2)
const N11 = new Node(4)
const N12 = new Node(4)
const N13 = new Node(5)
const N14 = new Node(4)
const N15 = new Node(3)

N1.left = N2
N1.right = N3

N2.left = N4
N2.right = N5

N4.left = N8
N4.right = N9

N3.left = N6
N3.right = N7

N5.left = N10
N5.right = N11

N6.left = N12
N6.right = N13

N7.left = N14
N7.right = N15
/*
                    4
            3                 5
        9       4         1       2
      2   2   2   4     4   5   3   4
*/
/* [4,2,9,2,3,2,4,4,4,1,5,3,2,4] */
/*
                                        N1(4)
                      N2(3)                                 N3(5)
            N4(9)             N5(4)                N6(1)             N7(2)
      N8(2)     N9(2)   N10(2)     N11(4)   N12(4)     N13(5)  N14(4)     N15(3)
*/

/* const root = {
  val: 1,
  right: {
    right: {
      val: 2,
      left: {
        val: 3
      }
    }
  },
  left: {
    val: 9,
    right: {
      val: 2,
      left: {
        val: 3
      }
    }
  }
} */

console.log(inorderTraversal(N1))

// Regular binary trees
var tree1 = new Node(4)
tree1.left = new Node(1)
tree1.right = new Node(3)

var tree2 = new Node(5)
tree2.left = new Node(10)
tree2.left.left = new Node(17)
tree2.left.right = new Node(3)
tree2.right = new Node(8)

// Binary search trees
var tree3 = new Node(6)
tree3.left = new Node(3)

var tree4 = new Node(5)
tree4.left = new Node(3)
tree4.left.left = new Node(2)
tree4.left.left.left = new Node(1)

var tree5 = new Node(8)
tree5.left = new Node(6)
tree5.right = new Node(9)
tree5.left.left = new Node(5)
tree5.left.right = new Node(7)
tree5.right.right = new Node(10)


console.log(inorderTraversal(tree2))// [17, 10, 3, 5, 8]
console.log(inorderTraversal(tree3))// [3, 6]