package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
)

type User struct {
	Name    string `json:"name"`
	Balance int    `json:"balance"`
	Tasks   []Task
}

type Task struct {
	Date   string `json:"date"`
	ID     int    `json:"ID"`
	Type   string `json:"type"`
	UserId int    `json:"userId"`
	Title  string `json:"title"`
	Price  int    `json:"price"`
}

func main() {
	http.HandleFunc("/get-user", handleUser)
	http.HandleFunc("/add-task", handleAddTask)

	fmt.Printf("Server listen on 8080 port\n")
	http.ListenAndServe(":8080", nil)
}

func handleUser(w http.ResponseWriter, req *http.Request) {
	task1 := Task{
		Date:   "2021-06-19T21:00:00.000Z",
		ID:     1,
		Type:   "TASK",
		UserId: 1,
		Title:  "First Task",
		Price:  100}
	task2 := Task{
		Date:   "2021-07-19T21:00:00.000Z",
		ID:     2,
		Type:   "TASK",
		UserId: 1,
		Title:  "SecondTask",
		Price:  200}
	user := &User{Name: "Max", Balance: 100, Tasks: []Task{task1, task2}}
	fmt.Println("Handle user", user)

	addCorsHeader(w)

	w.WriteHeader(http.StatusOK)

	userJSON, err := json.Marshal(user)
	if err != nil {
		fmt.Println(err)
		return
	}
	w.Write(userJSON)
}

func handleAddTask(w http.ResponseWriter, req *http.Request) {
	addCorsHeader(w)

	// TODO Handle in func
	if req.Method == "OPTIONS" {
		w.WriteHeader(http.StatusOK)
		return
	}
	body, err := ioutil.ReadAll(req.Body)
	var data Task
	json.Unmarshal(body, &data)
	if err != nil {
		panic(err.Error())
	}
	fmt.Println("Handle add task", data)

	w.WriteHeader(http.StatusOK)
	user := &User{Name: "Max", Balance: 100, Tasks: []Task{data}}

	userJSON, err := json.Marshal(user)
	if err != nil {
		fmt.Println(err)
		return
	}
	w.Write(userJSON)
}

func addCorsHeader(res http.ResponseWriter) {
	headers := res.Header()
	headers.Add("Access-Control-Allow-Origin", "*")
	headers.Add("Vary", "Origin")
	headers.Add("Vary", "Access-Control-Request-Method")
	headers.Add("Vary", "Access-Control-Request-Headers")
	headers.Add("Access-Control-Allow-Headers", "Content-Type, Origin, Accept, token")
	headers.Add("Access-Control-Allow-Methods", "GET, POST,OPTIONS")
}
