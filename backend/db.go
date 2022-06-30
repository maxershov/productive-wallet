package main

import (
	"database/sql"
	"fmt"

	_ "github.com/mattn/go-sqlite3"
)

func ReadData() []Task {
	fmt.Printf("readDb")
	db, err := sql.Open("sqlite3", "data.db")
	if err != nil {
		panic(err)
	}
	rows, err := db.Query("select * from Tasks")
	if err != nil {
		panic(err)
	}
	defer rows.Close()
	tasks := []Task{}

	for rows.Next() {
		p := Task{}
		err := rows.Scan(&p.ID, &p.Date, &p.Type, &p.Price, &p.UserId, &p.Title)
		if err != nil {
			fmt.Println(err)
			continue
		}
		tasks = append(tasks, p)
	}
	for _, p := range tasks {
		fmt.Println(p.ID, p.Date, p.Type, p.Price, p.UserId, p.Title)
	}
	fmt.Println(tasks)
	return tasks
}

func AddTask() {
	db, err := sql.Open("sqlite3", "data.db")
	if err != nil {
		panic(err)
	}
	defer db.Close()
	db.Exec("INSERT INTO Tasks (ID, Date, Type, UserId, Price, Title) VALUES ($1,$2,$3,$4,$5, $6)", 3, "2021-06-19T21:00:00.000Z", "TASK", 1, 600, "Third")
}
