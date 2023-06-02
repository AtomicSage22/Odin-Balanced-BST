class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class Tree {
  constructor(input) {
    this.root = buildTree(input, 0, input.length - 1);
  }
}

function buildTree(array, start, end) {
  const data = Array.from(new Set(array));
  const node = new Node();
  if (start > end) {
    return null;
  }
  const mid = Math.floor((start + end) / 2);
  node.data = data[mid];
  console.log(mid);
  node.left = buildTree(data, start, mid - 1);
  node.right = buildTree(data, mid + 1, end);
  return node;
}

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    console.log(node.right);
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

function insert(tree, value) {
  let node = new Node(value);
  if(!tree){
    tree = node;  
    return
  }
  let prev = null;
  let temp = tree;
  while(temp){
    if(temp.data > value){
      prev = temp;
      temp = temp.left;
    }
    else if(temp.data < value){
      prev = temp;
      temp = temp.right;
    }
  }
  if(prev.data > value){
    prev.left = node;
  }
  else{
    prev.right = node;
  }
}

function deleteNode(root , k) {
 

  if (root == null)
      return root;


  if (root.data > k) {
      root.left = deleteNode(root.left, k);
      return root;
  } else if (root.data < k) {
      root.right = deleteNode(root.right, k);
      return root;
  }


  if (root.left == null) {
var temp = root.right;
      return temp;
  } else if (root.right == null) {
var temp = root.left;
      return temp;
  }
  else {
var succParent = root;

var succ = root.right;

      while (succ.left != null) {
          succParent = succ;
          succ = succ.left;
      }


      if (succParent != root)
          succParent.left = succ.right;
      else
          succParent.right = succ.right;

      root.data = succ.data;

      return root;
  }
}

function find(tree, value){
  if(tree == null){
    return "Element not found";
  }
  if(tree.data == null){
    return "Empty tree";
  }
  else if(tree.data == value){
    return tree;
  }

  if(tree.data < value){
    return find(tree.right, value);
  }
  else if(tree.data > value){
    return find(tree.left, value);
  }
}

function printLevelOrder(root) {
  var queue = [];
  queue.push(root);
  while (queue.length != 0) {
      var tempNode = queue.shift();
      console.log(tempNode.data + " ");

      /* Enqueue left child */
      if (tempNode.left != null) {
          queue.push(tempNode.left);
      }

      /* Enqueue right child */
      if (tempNode.right != null) {
          queue.push(tempNode.right);
      }
  }
}

function printInorder(node) {
  if (node == null)
      return;

  // First recur on left child */
  printInorder(node.left);

  // Then print the data of node
  console.log(node.data + " ");

  // Now recur on right child
  printInorder(node.right);
}

function printPreorder(node) {
  if (node == null)
      return;

  // First print data of node
  document.write(node.data + " ");

  // Then recur on left subtree
  printPreorder(node.left);

  // Now recur on right subtree
  printPreorder(node.right);
}

function printPostorder(node) {
  if (node == null)
      return;

  // First recur on left subtree
  printPostorder(node.left);

  // Then recur on right subtree
  printPostorder(node.right);

  // Now deal with the node
  console.log(node.data + " ");
}

function height(root){
 
  // Initialising a variable to count the
  // height of tree
  let depth = 0

  let q = []
   
  // pushing first level element along with null
  q.push(root)
  q.push(null)
  while(q.length>0){
      let temp = q.shift()
   
      // When null encountered, increment the value
      if(temp == null)
          depth += 1
       
      // If null not encountered, keep moving
      if(temp != null){
          if(temp.left)
              q.push(temp.left)
           
          if(temp.right)
              q.push(temp.right)
      }
           
      // If queue still have elements left,
      // push null again to the queue.
      else if(q.length>0)
          q.push(null)
  }
  return depth

}

function depth(node)
    {
        if (node == null)
            return 0;
        else
        {
            /* compute the depth of each subtree */
            let lDepth = depth(node.left);
            let rDepth = depth(node.right);
   
            /* use the larger one */
            if (lDepth > rDepth)
                return (lDepth + 1);
             else
                return (rDepth + 1);
        }
    }

var isBalanced = function(root) {
      // If the tree is empty, we can say it’s balanced...
      if (root == null)  return true;
      // Height Function will return -1, when it’s an unbalanced tree...
    if (height(root) == -1)  return false;
    return true;
}

function storeBSTNodes(root, nodes)
  {
        // Base case
        if (root == null)
            return;
   
        // Store nodes in Inorder (which is sorted
        // order for BST)
        storeBSTNodes(root.left, nodes);
        nodes.push(root);
        storeBSTNodes(root.right, nodes);
}
   
    // This functions converts an unbalanced BST to
    // a balanced BST
function rebalanceBST(root)
  {
        // Store nodes of given BST in sorted order
        let nodes = [];
        storeBSTNodes(root, nodes);
   
        // Constructs BST from nodes[]
        let n = nodes.length;
        return buildTree(nodes, 0, n - 1);
}

