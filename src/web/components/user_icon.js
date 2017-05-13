import React from 'react'

const UserIcon = ({src, style = {}}) => (
  <img src={src || defaultSrc} style={{...defaultStyle, ...style}} />
)

const defaultStyle = {
  width: 50,
  height: 50,
  borderRadius: '20%',
}

const defaultSrc = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQupuLmBDzs0P1tyM7FLGRL9ctFamagiGAiYoLJbbMuxt1OvcSx'

export default UserIcon
