import fs from 'fs';

class AvatarLoader {
  private _avatar: string;

  constructor() {
    this._avatar = fs.readFileSync('./static/avatar.txt').toString();
  }

  get avatar(): string {
    return this._avatar;
  }
}

export default AvatarLoader;
