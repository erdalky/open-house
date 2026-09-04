import { QRCodeSVG } from 'qrcode.react';

interface Props { label: string; value?: string; image?: string; caption?: string }

export function QrCard({ label, value, image, caption = 'Scan the QR code to open.' }: Props) {
  return <article className="qr-card"><div className="qr-frame">{image ? <img src={image} alt={`${label} QR code`} /> : value ? <QRCodeSVG value={value} size={210} level="M" /> : null}</div><h3>{label}</h3><p>{caption}</p></article>;
}
