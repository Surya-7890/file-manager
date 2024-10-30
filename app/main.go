package app

import (
	"file-manager/app/functions"
	"file-manager/app/watchdog"
	"os"
)

type Application struct {
	CurrentPath string
	WatchDog    *watchdog.WatchDog
}

func NewApplication() *Application {
	wd := watchdog.NewWatchDog()

	go func() {
		wd.Watch()
	}()

	return &Application{
		CurrentPath: "/",
		WatchDog:    wd,
	}
}

func (a *Application) ChangeDirectory(path string) string {
	dir, err := os.UserHomeDir()
	if err != nil {
		return "error while changing directory" + err.Error() + " " + path
	}

	if err := os.Chdir(dir); err != nil {
		return "error while changing directory" + err.Error() + " " + path
	}
	a.WatchDog.MsgChannel <- path
	/*
	   response contains list of files and folders in the current path
	   the data is an array of bytes
	   closing the responseChannel
	*/
	data := <-a.WatchDog.ResponseChannel

	return string(data)
}

func (a *Application) Create(name, type_ string) string {

	exists, err := functions.GetFileByName(name, a.CurrentPath)
	if err != nil {
		return "err: " + err.Error()
	}
	if exists {
		return "error: file with the name \"" + name + "\" already exists"
	}

	err = functions.Create(name, type_, a.CurrentPath)
	if err != nil {
		return "error: " + err.Error()
	}
	return "success"
}

func (a *Application) GetInitialData() string {
	return functions.InitialData()
}
