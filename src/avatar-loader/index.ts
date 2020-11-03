import fs from 'fs';
import { AvatarLoaderOptions } from '../interfaces';

class AvatarLoader {
  private _avatar: string;

  constructor({ avatarPath }: AvatarLoaderOptions) {
    this._avatar = fs.readFileSync(avatarPath).toString();
  }

  get avatar(): string {
    return this._avatar;
  }
}

export default AvatarLoader;
