// @flow
import React from 'react'

type Props = {
  src: string,
  size?: number,
  style?: Object,
}

const UserIcon = ({src, size = 50, style = {}}: Props) => (
  <img
    src={src || defaultSrc}
    style={{
      ...defaultStyle,
      ...style,
      width: size,
      height: size,
    }}
  />
)

const defaultStyle = {
  borderRadius: '20%',
}

const defaultSrc = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQupuLmBDzs0P1tyM7FLGRL9ctFamagiGAiYoLJbbMuxt1OvcSx'

export default UserIcon
