package app

import (
	"fmt"
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

func (a *Application) GetInitialData() string {
	return functions.InitialData()
}

// CreateFolder is now exported and can be used externally if needed
func CreateFolder(newFolderPath string) error {
    fmt.Printf("Attempting to create folder: %s\n", newFolderPath)

    if _, err := os.Stat(newFolderPath); !os.IsNotExist(err) {
        return fmt.Errorf("folder already exists: %s", newFolderPath)
    }

    err := os.Mkdir(newFolderPath, 0755)
    if err != nil {
        return fmt.Errorf("failed to create folder %s: %w", newFolderPath, err)
    }
    return nil
}

func (a *Application) CreateFolder(newFolderPath string) string {
    fmt.Println("creating folder")

    // Attempt to create the folder
    err := CreateFolder(newFolderPath)
    fmt.Println(err)
    if err != nil {
        return err.Error()
    }
    return "folder created successfully"
}
