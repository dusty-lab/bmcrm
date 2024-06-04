import { ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './AuthPageTemplate.module.scss';
import Container from 'shared/ui/Container/Container.tsx';

type AuthPageTemplateProps = {
  className?: string;
  children?: ReactNode;
};

const AuthPageTemplate = ({ className, children }: AuthPageTemplateProps) => {
  return (
    <section className={classNames(styles.authPage, {}, [className])}>
      <Container>
        {children}
      </Container>
    </section>
  );
};

export default AuthPageTemplate;
