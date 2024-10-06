package functions

import "os"

/*
initial data essential for the client
curretly contains the user home directory "/home/{user}"
*/
func InitialData() string {
	dir, err := os.UserHomeDir()
	if err != nil {
		return err.Error()
	}

	return dir
}
