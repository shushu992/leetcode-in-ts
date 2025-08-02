import ListNode, { arrToListNode } from './definition/list-node';

/**
 * https://leetcode.com/problems/merge-two-sorted-lists/
 *
 * The number of nodes in both lists is in the range [0, 50].
 * -100 <= Node.val <= 100
 * Both list1 and list2 are sorted in non-decreasing order.
 */
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  let h1: ListNode | null = list1;
  let h2: ListNode | null = list2;

  const head = new ListNode();
  let h3 = head;

  while (true) {
    if (h1 === null) {
      h3.next = h2;
      break;
    }

    if (h2 === null) {
      h3.next = h1;
      break;
    }

    if (h1.val <= h2.val) {
      h3.next = new ListNode(h1.val);
      h3 = h3.next;
      h1 = h1.next;
    } else {
      h3.next = new ListNode(h2.val);
      h3 = h3.next;
      h2 = h2.next;
    }
  }

  return head.next;
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it('example 1', () => {
    const list1 = arrToListNode(1, 2, 4);
    const list2 = arrToListNode(1, 3, 4);
    const output = arrToListNode(1, 1, 2, 3, 4, 4);

    expect(mergeTwoLists(list1, list2)).toEqual(output);
    expect(mergeTwoLists(list2, list1)).toEqual(output);
  });

  it('example 2', () => {
    const list1 = arrToListNode();
    const list2 = arrToListNode();
    const output = arrToListNode();

    expect(mergeTwoLists(list1, list2)).toEqual(output);
    expect(mergeTwoLists(list2, list1)).toEqual(output);
  });

  it('example 3', () => {
    const list1 = arrToListNode();
    const list2 = arrToListNode(0);
    const output = arrToListNode(0);

    expect(mergeTwoLists(list1, list2)).toEqual(output);
    expect(mergeTwoLists(list2, list1)).toEqual(output);
  });

  it('test 1', () => {
    const list1 = arrToListNode(1);
    const list2 = arrToListNode(1, 3, 4);
    const output = arrToListNode(1, 1, 3, 4);

    expect(mergeTwoLists(list1, list2)).toEqual(output);
    expect(mergeTwoLists(list2, list1)).toEqual(output);
  });

  it('test 2', () => {
    const list1 = arrToListNode(2);
    const list2 = arrToListNode(1, 3, 4);
    const output = arrToListNode(1, 2, 3, 4);

    expect(mergeTwoLists(list1, list2)).toEqual(output);
    expect(mergeTwoLists(list2, list1)).toEqual(output);
  });

  it('test 3', () => {
    const list1 = arrToListNode(3);
    const list2 = arrToListNode(1, 3, 4);
    const output = arrToListNode(1, 3, 3, 4);

    expect(mergeTwoLists(list1, list2)).toEqual(output);
    expect(mergeTwoLists(list2, list1)).toEqual(output);
  });

  it('test 4', () => {
    const list1 = arrToListNode(4);
    const list2 = arrToListNode(1, 3, 4);
    const output = arrToListNode(1, 3, 4, 4);

    expect(mergeTwoLists(list1, list2)).toEqual(output);
    expect(mergeTwoLists(list2, list1)).toEqual(output);
  });

  it('test 5', () => {
    const list1 = arrToListNode(5);
    const list2 = arrToListNode(1, 3, 4);
    const output = arrToListNode(1, 3, 4, 5);

    expect(mergeTwoLists(list1, list2)).toEqual(output);
    expect(mergeTwoLists(list2, list1)).toEqual(output);
  });
}
