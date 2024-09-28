package app

import (
	"file-manager/app/functions"
	"file-manager/app/watchdog"
)

type Application struct {
	CurrentLocation string
}

func NewApplication() *Application {
	return &Application{
		CurrentLocation: "~",
	}
}

func (a *Application) ChangeDirectory(path string) []byte {
	functions.TraverseDirectories(path)
	wd := watchdog.NewWatchDog()

	wd.MsgChannel <- path

	/*
	   response contains list of files and folders in the current path
	   the data is an array of bytes
	*/
	data := <-wd.ResponseChannel

	return data
}
