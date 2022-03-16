import { promises } from 'fs';
const fsPromises = promises;

export async function getData() {
    return await fsPromises.readFile("./Data/users.json", "utf8", (err, data) => {
            if (err) {
                console.error(err.message);
            }
            return data;
        });
}


