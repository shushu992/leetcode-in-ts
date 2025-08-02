export default class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}

export function arrToListNode(...arr: number[]): ListNode | null {
  if (arr.length === 0) return null;

  const head = new ListNode(arr[0]);

  for (let i = 1, node = head;
       i < arr.length;
       i++) {
    node.next = new ListNode(arr[i]);
    node = node.next;
  }

  return head;
}

export function listNodeToArray(node: ListNode | null): number[] {
  const arr: number[] = [];

  while (node !== null) {
    arr.push(node.val);
    node = node.next;
  }

  return arr;
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it('arr to list node', () => {
    const node = arrToListNode(1, 3, 5, 7);
    expect(node?.val).toEqual(1);
    expect(node?.next?.val).toEqual(3);
    expect(node?.next?.next?.val).toEqual(5);
    expect(node?.next?.next?.next?.val).toEqual(7);
  });

  it('list node to arr', () => {
    const node =
      new ListNode(1,
        new ListNode(3,
          new ListNode(5,
            new ListNode(7))));
    const arr = listNodeToArray(node);
    expect(arr).toEqual([ 1, 3, 5, 7 ]);
  });

  it('list equals to list', () => {
    const arr1 = arrToListNode(1, 3, 5, 7);
    const arr2 = arrToListNode(1, 3, 5, 7);
    expect(arr1).toEqual(arr2);
  });

  it('arr equals to arr', () => {
    const node1 =
      new ListNode(1,
        new ListNode(3,
          new ListNode(5,
            new ListNode(7))));
    const list1 = listNodeToArray(node1);

    const node2 =
      new ListNode(1,
        new ListNode(3,
          new ListNode(5,
            new ListNode(7))));
    const list2 = listNodeToArray(node2);

    expect(list1).toEqual(list2);
  });
}
