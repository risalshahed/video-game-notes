import bulls_eye from '../assets/Emojis/bulls-eye.webp';
import thumbs_up from '../assets/Emojis/thumbs-up.webp';
import meh from '../assets/Emojis/meh.webp';
import { Image, ImageProps } from '@chakra-ui/react';

// // "35" Add Emojis
// rating as props
interface Props {
  rating: number;
}

// "35" Add Emojis
const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;
  // "ImageProps" is defined in chakra-ui
  const emojiMap: { [key: number]: ImageProps } = {
    // ei object er every property er keys hoilo game er rating
    3: { src: meh, alt: 'meh', boxSize: '25px' },
    4: { src: thumbs_up, alt: 'recommended', boxSize: '25px' },
    5: { src: bulls_eye, alt: 'exceptional', boxSize: '35px' },
  }

  return (
    // spreading kray component a all props add hye jabe
    <Image {...emojiMap[rating]} marginTop={1} />
  );
};

export default Emoji;