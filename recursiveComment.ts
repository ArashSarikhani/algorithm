interface IComment {
  id: number;
  parent: number;
  content: string;
  comments: IComment[];
}

const OneD: IComment[] = [
  {
    id: 5819,
    parent: 0,
    content: "Waar vind ik meer?",
    comments: [],
  },
  {
    id: 5820,
    parent: 5819,
    content: "Epic site!",
    comments: [],
  },
  {
    id: 5821,
    parent: 5819,
    content: "Stoinks.",
    comments: [],
  },
  {
    id: 5822,
    parent: 5821,
    content: "Can I get a what now?",
    comments: [],
  },
  {
    id: 5823,
    parent: 0,
    content: "Yeeeee",
    comments: [],
  },
];

const NO_PARENT = 0;

const indexedComments = OneD.reduce((previous, current) => {
  // create a coppy of comment so we do not modify original comments
  // if you want to preserve, just use `= current` instead
  previous[current.id] = { ...current };
  return previous;
}, <{ [key: number]: IComment }>{});

for (const comment of OneD) {
  if (comment.parent !== NO_PARENT) {
    indexedComments[comment.parent].comments.push(comment);
  }
}

// If you modified exiting comments in the first step, you can filter over OneD instead
const ThreeD = Object.values(indexedComments).filter(
  (comment) => comment.parent === NO_PARENT
);

console.log(ThreeD);
