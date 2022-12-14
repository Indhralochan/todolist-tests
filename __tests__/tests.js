/* eslint-disable no-undef */
const todo = require("../todo");
const { all, add, markAsComplete, overdue, dueToday, dueLater } = todo();
const today = new Date()
describe("TODO test suite", () => {
  beforeAll(() => {
    add({
      title: "Wake Up",
      dueDate: today.toLocaleDateString("en-CA"),
      completed: false
    });
  });
  test("Add task", () => {
    let lengthBefore = all.length;
    add({
      title: "Eat",
      dueDate: today.toLocaleDateString("en-CA"),
      completed: false
    });
    expect(all.length).toBe(lengthBefore + 1);
  });
  test("Mark task as complete", () => {
    expect(all[0].completed).toBe(false)
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });
  test("Over due tasks", () => {
    const overduecount= overdue(all).length;
    add({
      title: "work",
      dueDate: "2022-09-17",
      completed: false
    });
    expect(overdue(all).length>overduecount);
  });
  test("Due today tasks", () => {
    const duetodaycount= dueToday(all).length;
    add({
      title: "work1",
      dueDate: today.toLocaleDateString("en-CA"),
      completed: false
    });
    expect(dueToday(all).length>duetodaycount);
  });
  test("Due later tasks", () => {
    const duelatercount= dueLater(all).length;
    add({
      title: "work2",
      dueDate: "2022-09-20",
      completed: false
    });
    expect(dueLater(all).length>duelatercount);
  });
});
