import { QRCodeSVG } from 'qrcode.react'

interface QRCodeProps {
  value: string
  size?: number
}

export function QRCode({ value, size = 180 }: QRCodeProps) {
  return (
    <QRCodeSVG
      value={value}
      size={size}
      level="M"
      bgColor="#ffffff"
      fgColor="#1e1e1e"
    />
  )
}
