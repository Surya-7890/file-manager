package app

import (
	"file-manager/app/watchdog"
	"fmt"
	"os"
)

type Application struct {
	CurrentLocation string
	WatchDog        *watchdog.WatchDog
}

func NewApplication() *Application {
	wd := watchdog.NewWatchDog()

	go func() {
		wd.Watch()
	}()

	return &Application{
		CurrentLocation: "~",
		WatchDog:        wd,
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

	fmt.Println("hellow")
	a.WatchDog.MsgChannel <- path
	fmt.Println("hellow da")
	/*
	   response contains list of files and folders in the current path
	   the data is an array of bytes
	   closing the responseChannel
	*/
	data := <-a.WatchDog.ResponseChannel

	return string(data)
}
