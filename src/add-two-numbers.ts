import ListNode, { arrToListNode } from './definition/list-node';

/**
 * https://leetcode.com/problems/add-two-numbers/description/
 *
 * The number of nodes in each linked list is in the range [1, 100].
 * 0 <= Node.val <= 9
 * It is guaranteed that the list represents a number that does not have leading zeros.
 */
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  if (l1 === null) return l2;
  if (l2 === null) return l1;

  const result = new ListNode();
  let hr: ListNode = result;

  let h1: ListNode | null = l1;
  let h2: ListNode | null = l2;

  while (true) {
    if (h1) {
      hr.val += h1.val;
      h1 = h1.next;
    }

    if (h2) {
      hr.val += h2.val;
      h2 = h2.next;
    }

    const carry = hr.val >= 10 ? 1 : 0;
    hr.val %= 10;

    if (h1 === null && h2 === null && carry === 0)
      break;

    hr.next = new ListNode(carry);
    hr = hr.next;
  }

  return result;
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it('example 1', () => {
    const l1 = arrToListNode(2, 4, 3);
    const l2 = arrToListNode(5, 6, 4);
    const output = arrToListNode(7, 0, 8);
    expect(addTwoNumbers(l1, l2)).toEqual(output);
  });

  it('example 2', () => {
    const l1 = new ListNode(0);
    const l2 = new ListNode(0);
    const output = new ListNode(0);
    expect(addTwoNumbers(l1, l2)).toEqual(output);
  });

  it('example 3', () => {
    const l1 = arrToListNode(9, 9, 9, 9, 9, 9, 9);
    const l2 = arrToListNode(9, 9, 9, 9);
    const output = arrToListNode(8, 9, 9, 9, 0, 0, 0, 1);
    expect(addTwoNumbers(l1, l2)).toEqual(output);
  });

  it('check null nodes 1', () => {
    const l1 = null;
    const l2 = new ListNode(2);
    const output = new ListNode(2);
    expect(addTwoNumbers(l1, l2)).toEqual(output);
  });

  it('check null nodes 2', () => {
    const l1 = new ListNode(3);
    const l2 = null;
    const output = new ListNode(3);
    expect(addTwoNumbers(l1, l2)).toEqual(output);
  });

  it('check null nodes 3', () => {
    const l1 = null;
    const l2 = null;
    const output = null;
    expect(addTwoNumbers(l1, l2)).toEqual(output);
  });
}
