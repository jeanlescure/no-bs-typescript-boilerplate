import AvatarLoader from './avatar-loader';
import { AvatarLoaderOptions } from './interfaces';

export default (options: AvatarLoaderOptions) => {
  const avatarLoader = new AvatarLoader(options);
  console.log(avatarLoader.avatar);
};
