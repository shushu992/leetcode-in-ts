import ListNode, { arrToListNode } from './definition/list-node';

/**
 * https://leetcode.com/problems/intersection-of-two-linked-lists/
 *
 * The number of nodes of listA is in the m.
 * The number of nodes of listB is in the n.
 *
 * 1 <= m, n <= 3 * 104
 * 1 <= Node.val <= 105
 *
 * 0 <= skipA <= m
 * 0 <= skipB <= n
 *
 * intersectVal is 0 if listA and listB do not intersect.
 * intersectVal == listA[skipA] == listB[skipB] if listA and listB intersect.
 */
function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  let x = 0;
  let nodeA = headA;
  while (nodeA) {
    x++;
    nodeA = nodeA.next;
  }

  let y = 0;
  let nodeB = headB;
  while (nodeB) {
    y++;
    nodeB = nodeB.next;
  }

  while (x > y) {
    headA = headA!.next;
    x--;
  }

  while (x < y) {
    headB = headB!.next;
    y--;
  }

  while (headA && headB) {
    if (headA === headB) {
      return headA;
    }
    headA = headA.next;
    headB = headB.next;
  }

  return null;
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it('example 1', () => {
    const headA = arrToListNode(4, 1);
    const headB = arrToListNode(5, 6, 1);

    const intersection = arrToListNode(8, 4, 5);
    headA!.next!.next = intersection;
    headB!.next!.next!.next = intersection;

    expect(getIntersectionNode(headA, headB)).toEqual(intersection);
  });

  it('example 2', () => {
    const headA = arrToListNode(1, 9, 1);
    const headB = arrToListNode(3);

    const intersection = arrToListNode(2, 4);
    headA!.next!.next!.next = intersection;
    headB!.next = intersection;

    expect(getIntersectionNode(headA, headB)).toEqual(intersection);
  });

  it('example 3', () => {
    const headA = arrToListNode(2, 6, 4);
    const headB = arrToListNode(1, 5);

    expect(getIntersectionNode(headA, headB)).toEqual(null);
  });

  it('test 1', () => {
    const headA = arrToListNode(1);
    const headB = arrToListNode(2);

    expect(getIntersectionNode(headA, headB)).toEqual(null);
  });

  it('test 2', () => {
    const headA = arrToListNode(1);
    const headB = arrToListNode(2);

    const intersection = arrToListNode(3);
    headA!.next = intersection;
    headB!.next = intersection;

    expect(getIntersectionNode(headA, headB)).toEqual(intersection);
  });
}
