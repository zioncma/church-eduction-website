import styled from 'styled-components';
import {device} from 'styles';


const StyledIframe = styled.iframe`
  border: none; 
  width: 95%;
  max-width: 100%;
  @media ${device.tablet} {
    width: 700px;
  }
  @media ${device.laptop} {
    width: 800px;
  }
`;

const AppleIframe = styled.iframe`
  width:100%;
  max-width:660px;
  overflow:hidden;
  background:transparent;
`;

export function SpotifyPodcast() {
  return <StyledIframe style={{ borderRadius: "12px" }} src="https://open.spotify.com/embed/show/7i5MIWyFKPLVsRfxNOgz0W?utm_source=generator" height="232" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></StyledIframe>
}

export function ApplePodcast() {
  return <AppleIframe allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" frameBorder="0" height="450" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.podcasts.apple.com/ca/podcast/%E5%AE%A3%E9%81%93%E6%9C%83%E9%8C%AB%E5%AE%89%E5%A0%82%E5%9F%BA%E6%95%99%E9%83%A8/id1634308100"></AppleIframe>
}

export function Podbean() {
  return (
    <StyledIframe
      title='Zion Alliance Church Christian Education Podcast'
      allowTransparency={true}
      // height='315'
      scrolling='no'
      data-name='pb-iframe-player'
      src='https://www.podbean.com/player-v2/?i=dn859-dfb3c4-pbblog-playlist&share=1&download=1&rtl=0&fonts=Arial&skin=1&font-color=auto&logo_link=episode_page&order=episodic&limit=10&filter=all&ss=a713390a017602015775e868a2cf26b0&btn-skin=7&size=315'
    // allowfullscreen=''
    ></StyledIframe>
  );
}

export function Podcast() {
  return <ApplePodcast />
}
