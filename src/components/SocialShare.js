import { FacebookShareButton, WhatsappShareButton, TwitterShareButton,  } from "react-share";
import { FacebookIcon, WhatsappIcon, TwitterIcon } from "react-share";
const SocialShare = props => {
return (
<div>
    <span>
    <FacebookShareButton url={props.url} quote={"Cuisine Carousel"}>
        <FacebookIcon logoFillColor="white" size="25">
        </FacebookIcon>
    </FacebookShareButton>
    </span>
    <span>
    <WhatsappShareButton url={props.url} title="Cuisine Carousel">
        <WhatsappIcon logoFillColor="white" size="25">
        </WhatsappIcon>
    </WhatsappShareButton>
    </span>
    <span>
    <TwitterShareButton url={props.url} title="Cuisine Carousel">
        <TwitterIcon logoFillColor="white" size="25">
        </TwitterIcon>
    </TwitterShareButton>
    </span>
</div>
)};

export default SocialShare;