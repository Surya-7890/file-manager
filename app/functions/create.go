package functions

import (
	"fmt"
	"os"
)

func Create(name, type_, path string) error {
	if (type_ == "file") {
		file, err := os.OpenFile(path + name, os.O_CREATE | os.O_RDWR, 0777)
		if err != nil {
			return fmt.Errorf("error while creating file %s: %s", name, err.Error())
		}
		defer file.Close()
		return nil
	} else if (type_ == "folder") {
		err := os.Mkdir(path + name, 0777)
		if err != nil {
			return fmt.Errorf("error while creating folder %s: %s", name, err.Error())
		}
	} else {
		return fmt.Errorf("type should either be file or folder")
	}
	return nil
}