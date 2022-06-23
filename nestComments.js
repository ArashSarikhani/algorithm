const object = [
  {
    id: "b-143",
    name: "JON",
    comment: "I SEE IT NOW. I NEED SOME TIME",
    parentId: "p-123",
  },
  {
    id: "p-124",
    name: "DO",
    comment: "PLEASE TOLD ME WHEN IT DONE",
    parentId: "b-143",
  },
  {
    id: "p-123",
    name: "DO",
    comment: "DO YOU SEE THE QUESTION",
    parentId: null,
  },
  {
    id: "a-143",
    name: "JON",
    comment: "IT NEEDS LITTLE BIT OF CHANGE",
    parentId: "p-123",
  },
];
const nestComments = (root, xs) =>
  xs
    .filter(({ parentId }) => parentId === root)
    .map(({ id, parentId, ...rest }) => ({
      id,
      ...rest,
      children: nestComments(id, xs),
    }));

nestComments(null, object);

/* The code above does the following, explained in English:
1. Filter the comments array to only include comments with the same parentId as the root comment.
2. Map the filtered comments array to a new array of objects with the following properties:
  - id: the comment's id
  - parentId: the comment's parentId
  - ...rest: the comment's remaining properties
  - Childern: the comment's childern, which is a new array of objects with the same properties as the original comments array.
3. Recursively call nestComments on the childern of the root comment.
4. Return the root comment with the childern property set to the nested childern. */
