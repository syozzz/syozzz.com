import styled from 'styled-components'

export const MainTitle = styled.div`
  
  position: fixed;
  z-index: 8;
  top: 32px;
  left: 36px;
  color: #d6d6d6;
  mix-blend-mode: difference;
  text-decoration: none;
  
  @media (min-width: 769px) {
    top: 50px;
    left: 60px;
  }
  
  br {
    @media (min-width: 769px) {
      display: none;
    }
  }
  
  .studio-name {
    font-size: 15px;
    line-height: 0;
    letter-spacing: 0.3em;

    @media (max-width: 769px) {
      line-height: 1.3;
    }
  }
  
  .studio-location {
    font-size: 13px;
    letter-spacing: 0.4em;
    margin-top: 5px;
    transform: scale(0.7);
    transform-origin: left top;

    @media (max-width: 769px) {
      line-height: 0;
    }
  }
`;

export const SwitchThemeBox = styled.p`
  position: fixed;
  z-index: 8;
  top: 32px;
  right: 36px;
  line-height: 16px;
  transition: transform 0.3s cubic-bezier(0.52, 3.05, 0.73, 0.6);
  cursor: pointer;

  &:hover {
    transform: scale(1.3);
  }

  @media (min-width: 769px) {
    top: 50px;
    right: 60px;
  }
`;

export const BackgroundBox = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1;
`

export const FixedLeftRoute = styled.div`
  position: fixed;
  z-index: 8;
  left: 60px;
  top: 50%;
  transform: translateY(-50%);
  mix-blend-mode: difference;
  text-decoration: none;

  @media (max-width: 769px) {
    display: none;
  }
  
  
  ul {
    margin-left: 0;
  }
  
  li {
    list-style: none;

    &:before {
      content: '';
    }
    
    a {
      color: #666666;
      font-size: 12px;
      letter-spacing: 0.2em;
      transition: all 0.1s ease-out;
      display: inline-block;
      transform-origin: left center;
      position: relative;

      span {
        transform-origin: 50% 50% 0px;
        display: block;
        background: #481d13;
        width: 6px;
        height: 6px;
        border-radius: 50%!important;
        position: absolute;
        left: -16px;
        top: calc(50% - 3px);
      }
      
      &:hover {
        color: #D6D6D6;
        transform: scale(1.05);
      }
      
      &.active {
        color: #D6D6D6;
        
        &:before {
          
        }
      }
    }
  }
`
