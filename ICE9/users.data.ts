import fsReadFilePromise from 'fs-readfile-promise';

export async function getData(): Promise<string> {
     return await fsReadFilePromise("./Data/users.json", "utf8");
} 


