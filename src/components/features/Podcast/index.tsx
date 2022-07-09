import styled from 'styled-components';

const StyledIframe = styled.iframe`
  border: none; 
  min-width: min(100%, 430px);
`;

export function Podcast() {
  // return <div></div>;

  return (
    <StyledIframe
      title='Zion Alliance Church Christian Education Podcast'
      allowtransparency={true}
      height='315'
      width='100%'
      scrolling='no'
      data-name='pb-iframe-player'
      src='https://www.podbean.com/player-v2/?i=dn859-dfb3c4-pbblog-playlist&share=1&download=1&rtl=0&fonts=Arial&skin=1&font-color=auto&logo_link=episode_page&order=episodic&limit=10&filter=all&ss=a713390a017602015775e868a2cf26b0&btn-skin=7&size=315'
      allowfullscreen=''
    ></StyledIframe>
  );
}
