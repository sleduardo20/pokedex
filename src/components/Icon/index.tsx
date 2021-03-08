import Link from 'next/link';
import * as S from './styles';

export interface IconProps {
  icon?: React.ReactNode;
  link: string;
}

const Icon: React.FC<IconProps> = ({ children, icon, link }) => {
  return (
    <S.Icon>
      <Link href={link} passHref>
        <a>
          {children}
          {icon}
        </a>
      </Link>
    </S.Icon>
  );
};

export default Icon;
