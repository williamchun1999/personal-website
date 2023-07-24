import { IconType } from "react-icons"

type LogoItemProps = {
  LogoImage: IconType
  text: string,
}

export const LogoItem = ({LogoImage, text}: LogoItemProps) => {

  return (
    <li className="bg-grey p-3 rounded-xl flex items-center shadow-md shadow-light-blue">
          <LogoImage />
          <span>{text}</span>
        </li>
  )
}
