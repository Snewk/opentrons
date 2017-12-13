// @flow
// icon component and library

import * as React from 'react'
import classnames from 'classnames'

// icon names
export const BACK = 'back'
export const REFRESH = 'refresh'
export const USB = 'usb'
export const WIFI = 'wifi'

// icon data
const ICON_DATA_BY_NAME = {
  [BACK]: {
    viewBox: '0 0 24 24',
    path: 'M18 11.242v1.516H8.91l4.166 4.166L12 18l-6-6 6-6 1.076 1.076-4.167 4.166z'
  },
  [REFRESH]: {
    viewBox: '0 0 200 200',
    path: 'M121.9,31.3L129,4.6l56.7,56.7l-77.5,20.8c0,0,7.7-28.6,7.7-28.6c-5.7-1.8-11.7-2.7-17.9-2.7 c-33.5,0-60.8,27.3-60.8,60.8c0,33.5,27.3,60.8,60.8,60.8c26.5,0,50.5-17.7,58.1-43.1l22,6.7c-5.1,16.8-15.7,32-29.8,42.6 c-14.6,11-32,16.8-50.3,16.8c-46.2,0-83.8-37.6-83.8-83.8S51.8,27.9,98,27.9C106.1,27.9,114.1,29.1,121.9,31.3'
  },
  [USB]: {
    viewBox: '0 0 24 24',
    path: 'M15.347 6.792v4.529h1.132v2.264h-3.396V4.528h2.264L11.951 0 8.555 4.528h2.264v9.057H7.423v-2.343c.792-.42 1.358-1.223 1.358-2.185 0-1.37-1.12-2.491-2.49-2.491S3.8 7.686 3.8 9.056c0 .963.566 1.767 1.358 2.186v2.343a2.256 2.256 0 0 0 2.265 2.264h3.396v3.453a2.492 2.492 0 0 0-1.359 2.207 2.49 2.49 0 0 0 4.982 0c0-.962-.555-1.788-1.359-2.207v-3.453h3.396a2.256 2.256 0 0 0 2.264-2.264V11.32h1.132V6.792h-4.528z'
  },
  [WIFI]: {
    viewBox: '0 0 24 24',
    path: 'M0 9.414l2.182 2.182c5.422-5.422 14.214-5.422 19.636 0L24 9.414c-6.622-6.622-17.367-6.622-24 0zm8.727 8.727L12 21.414l3.273-3.273a4.622 4.622 0 0 0-6.546 0zm-4.363-4.363l2.181 2.181a7.717 7.717 0 0 1 10.91 0l2.181-2.181c-4.21-4.211-11.05-4.211-15.272 0z'
  }
}

type Props = {
  name: $Keys<typeof ICON_DATA_BY_NAME>,
  className?: string
}

export function Icon (props: Props) {
  const {viewBox, path} = ICON_DATA_BY_NAME[props.name]
  const className = classnames(props.className)

  return (
    <svg
      version='1.1'
      aria-hidden='true'
      viewBox={viewBox}
      className={className}
      fill='currentColor'
    >
      <path fillRule='evenodd' d={path} />
    </svg>
  )
}
