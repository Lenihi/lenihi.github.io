export const sort = <T extends { data: { priority: number; date: Date } }>(
  items: T[]
) =>
  items.sort((a, b) => {
    if (a.data.priority !== b.data.priority)
      return b.data.priority - a.data.priority;
    return b.data.date.getTime() - a.data.date.getTime();
  });
