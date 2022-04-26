/*
Binary Tree

This is a project requested by university.
*/

const valuesToInsert = [10, 11, 9, 8, 13, 12, 7];
const binaryTree = {};

valuesToInsert.forEach((value) => {
  insert(binaryTree, value);
});

function insert(tree, value) {
  if (tree.value) {
    if (value > tree.value) {
      insert(tree.right, value);
    } else {
      insert(tree.left, value);
    }
  } else {
    tree.value = value;
    tree.right = {};
    tree.left = {};
  }
}

const output = JSON.stringify(binaryTree, null, 2);
console.log(output);
