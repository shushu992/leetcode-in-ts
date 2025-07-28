import ListNode, { arrToListNode } from './definition/list-node';

/**
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list/
 *
 * The number of nodes in the list is sz.
 * 1 <= sz <= 30
 * 0 <= Node.val <= 100
 * 1 <= n <= sz
 */
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (head == null) return null;
  if (head.next == null) return null;

  let l: ListNode | null | undefined = head;
  let r: ListNode | null | undefined = head;

  for (let distance = 0; distance < n; distance++) {
    r = r?.next;
  }

  if (r === null) return head.next;

  while (r?.next) {
    l = l?.next;
    r = r?.next;
  }

  // @ts-ignore
  l.next = l?.next?.next || null;
  return head;
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it('check null', () => {
    expect(removeNthFromEnd(null, 0)).toEqual(null);
  });

  it('example 1', () => {
    const head = arrToListNode(1, 2, 3, 4, 5);
    const n = 2;
    const output = arrToListNode(1, 2, 3, 5);
    expect(removeNthFromEnd(head, n)).toEqual(output);
  });

  it('example 2', () => {
    const head = arrToListNode(1);
    const n = 1;
    const output = arrToListNode();
    expect(removeNthFromEnd(head, n)).toEqual(output);
  });

  it('example 3', () => {
    const head = arrToListNode(1, 2);
    const n = 1;
    const output = arrToListNode(1);
    expect(removeNthFromEnd(head, n)).toEqual(output);
  });

  it('test case 1', () => {
    const head = arrToListNode(1, 2);
    const n = 1;
    const output = arrToListNode(1);
    expect(removeNthFromEnd(head, n)).toEqual(output);
  });

  it('test case 2', () => {
    const head = arrToListNode(1, 2);
    const n = 2;
    const output = arrToListNode(2);
    expect(removeNthFromEnd(head, n)).toEqual(output);
  });

  it('test 3', () => {
    const head = arrToListNode(11, 17, 23);
    const n = 1;
    const output = arrToListNode(11, 17);
    expect(removeNthFromEnd(head, n)).toEqual(output);
  });

  it('test 4', () => {
    const head = arrToListNode(11, 17, 23);
    const n = 2;
    const output = arrToListNode(11, 23);
    expect(removeNthFromEnd(head, n)).toEqual(output);
  });

  it('test 5', () => {
    const head = arrToListNode(11, 17, 23);
    const n = 3;
    const output = arrToListNode(17, 23);
    expect(removeNthFromEnd(head, n)).toEqual(output);
  });
}

