import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#4a6741',
          borderRadius: '4px',
        }}
      >
        <span
          style={{
            fontSize: 22,
            fontFamily: 'Georgia, serif',
            fontWeight: 300,
            color: 'white',
            marginTop: -2,
          }}
        >
          L
        </span>
      </div>
    ),
    { ...size }
  )
}
