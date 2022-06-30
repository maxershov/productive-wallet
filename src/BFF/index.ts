import { Task } from "../../types";

export async function getData(): Promise<Task[]> {
  const res = await fetch("http://localhost:8080/get-user");
  console.log(res);

  const json = await res.json();
  return json;
}

export async function addTask(task: Task): Promise<Task[]> {
  console.log("fetch add-task");
  console.log(JSON.stringify(task));
  const res = await fetch("http://localhost:8080/add-task", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  const json = await res.json();

  console.log(json);
  return json;
}

export function getUser(): any {}

export function getBalance(): any {}
