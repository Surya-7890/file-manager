import { Create } from "../wailsjs/go/app/Application";

export const create = async (type: string, name: string): Promise<boolean> => {
  try {
    const result = await Create(name, type);
    if (result !== "success") {
      console.error("error: ", result);
      return false;
    }
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};
