import { ImgHTMLAttributes } from 'react';
import styles from "./avatar.module.css";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {

    hasBorder?: boolean;
}



const Avatar = ({ hasBorder = true, ...props }: AvatarProps) => {
    return (
        <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} {...props} />
    );
};

export { Avatar };
