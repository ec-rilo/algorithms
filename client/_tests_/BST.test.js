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

describe('find method', () => {
  it('should return false if there is no root.', () => {
    expect(BST.find(3)).toBe(false);
  });

  it('should return true if it\'s within the BST.', () => {
    BST.insert(10);
    BST.insert(6);
    BST.insert(12);
    BST.insert(3);
    BST.insert(8);
    BST.insert(12);
    BST.insert(11);
    BST.insert(15);
    BST.insert(13);
    BST.insert(16);

    const tempNode = new Node(15);
    const left = new Node(13);
    const right = new Node(16);
    tempNode.left = left;
    tempNode.right = right;
    expect(BST.find(15)).toMatchObject(tempNode);
  });

  it('should return false if it\'s not within the BST.', () => {
    BST.insert(10);
    BST.insert(6);
    BST.insert(12);
    BST.insert(3);
    BST.insert(8);
    BST.insert(12);
    BST.insert(11);
    BST.insert(15);
    BST.insert(13);
    BST.insert(16);
    expect(BST.find(14)).toBe(false);
  });
});

describe('Breadth first search method', () => {
  it('should return an emtpy array if there is no root',() =>  {
    expect(BST.BFS()).toEqual([]);
  });

  it('should return an array of values in breadth first order', () => {
    BST.insert(10);
    BST.insert(6);
    BST.insert(15);
    BST.insert(3);
    BST.insert(8);
    BST.insert(20);
    expect(BST.BFS()).toEqual([10, 6, 15, 3, 8, 20]);
  });
});
