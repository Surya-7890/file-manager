package functions

import (
	"file-manager/app/data"
	"strings"
)

func GetIconForFileName(filename, filetype string) (string, string) {

	if filetype == FileType["d"] {
		if iconKey, ok := data.FolderMap[filename]; ok {
			val := data.IconMap[iconKey]
			return val.FontId, iconKey
		}
		return "", ""
	}

	if iconKey, ok := data.FileNameMap[filename]; ok {
		val := data.IconMap[iconKey]
		return val.FontId, iconKey
	}

	if iconKey, ok := data.FileMap[filename]; ok {
		val := data.IconMap[iconKey]
		return val.FontId, iconKey
	}

	ext := strings.Join(strings.Split(filename, ".")[1:], ".")

	if iconKey, ok := data.ExtensionMap[ext]; ok {
		val := data.IconMap[iconKey]
		return val.FontId, iconKey
	}

	return "", ""
}
