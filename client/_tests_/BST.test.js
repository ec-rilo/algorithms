import { BinarySearchTree, Node } from '../binarySearchTree.js';

let BST = new BinarySearchTree();
let tempBST = new BinarySearchTree();

beforeEach(() => {
  tempBST = new BinarySearchTree();
  BST = new BinarySearchTree();
});

describe('Insert method', () => {
  it('should assign new node to be root node if there is no root.', () => {
    tempBST.root = new Node(1);
    BST.insert(1)
    expect(BST).toMatchObject(tempBST);
  });

  it('Should assign small value to left and large value to right', () => {
    tempBST.root = new Node(5);
    tempBST.root.left = new Node(3);
    tempBST.root.right = new Node(9);

    BST.insert(5);
    BST.insert(3);
    BST.insert(9);
    expect(BST).toMatchObject(tempBST);
  });

  it('should return entire tree once value is inserted', () => {
    tempBST.root = new Node(5);
    tempBST.root.left = new Node(3);
    tempBST.root.right = new Node(9);

    BST.insert(5);
    BST.insert(3);
    expect(BST.insert(9)).toMatchObject(tempBST);
  });

  it('should return undefined if a duplicate is inserted.', () => {
    BST.insert(5);
    BST.insert(3);
    BST.insert(9);
    expect(BST.insert(9)).toBe(undefined);
  })
});

