export default function sanityLoader({ src, width, quality = 90 }) {
  return `${src}?w=${width}&q=${quality}`;
}
