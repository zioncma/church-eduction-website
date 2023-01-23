import videoHolder from '../../assets/video-placeholder640.jpg';
/**
 * 
 */
export function NotAvailableImg() {
  return (
    <img
      src={videoHolder}
      style={{ maxHeight: '600px', height: '600px' }}
      alt={'No Video Available'}
    />
  )
}