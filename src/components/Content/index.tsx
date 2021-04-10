import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

const Wrapper = styled(motion.div)`
  ${({ theme }) => css`
    width: min(110rem, 100%);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${theme.spacings.medium};
  `}
`;

const easing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
  initial: {
    y: -40,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: easing },
  },
};

const Content: React.FC = ({ children }) => {
  return (
    <Wrapper initial={fadeInUp.initial} animate={fadeInUp.animate}>
      {children}
    </Wrapper>
  );
};

export default Content;
