export default function sanityLoader({ src, width, quality = 90 }) {
  return `${src}?auto=format&w=${width}&q=${quality}`;
}
