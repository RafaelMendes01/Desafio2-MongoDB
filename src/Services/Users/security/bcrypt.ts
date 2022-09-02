
import * as bcrypt from 'bcrypt';

export function encodePassword(rawpassword: string){
    const SALT = bcrypt.genSaltSync();
    return bcrypt.hashSync(rawpassword, SALT);
}
