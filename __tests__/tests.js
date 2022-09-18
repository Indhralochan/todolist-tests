const { expect, beforeAll } = require("@jest/globals");
const todoList=require("../index");
const {all, add, markAsComplete, overdue, dueToday, dueLater, toDisplayableList}=todoList();
describe("todo test suite",()=>{
    beforeAll(()=>{
        add({
            title:"test",
            completed:false,
            dueDate: "2022-09-17"
          });
    })
    test('should add todo list', () => {
      const todayItemCount= all.length;
      add({
        title:"test",
        completed:false,
        dueDate: "2022-09-17"
      });
      expect(all.length).toBe(todayItemCount+1); 
    }) 
    test('should checks marking a todo as completed.', () => {
      expect(all[0].completed).toBe(false);
      markAsComplete(0);
      expect(all[0].completed).toBe(true);
    })
    test("Over due tasks", () => {
      expect(overdue(all)).toBeDefined();
    });
    test("Due today tasks", () => {
      expect(dueToday(all)).toBeDefined();
    });
    test("Due later tasks", () => {
      expect(dueLater(all)).toBeDefined();
    });
})