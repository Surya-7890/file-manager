import { CreateFolder } from "../wailsjs/go/app/Application";
import { app as application } from "../state/state";

export const CreateNewFolder = async (
  location: string,
  folderName: string
): Promise<string> => {
  try {
    const response = await CreateFolder(`${location}/${folderName}`);
    alert(response);
    return response;
  } catch (err) {
    console.log(err);
    return "error";
  }
};
