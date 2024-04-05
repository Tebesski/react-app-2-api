import { ReactNode } from "react"
import ModalHeader from "./ModalHeader/ModalHeader"
import ModalBody from "./ModalBody/ModalBody"

type ModalProps = {
   onClose?: () => void
   mainContent: ReactNode
   title: string
   extraSectionContent?: {
      title: string
      component: ReactNode
   }
   rounded?: boolean
   headerPaddingY?: number
   fullHeight?: boolean
   contentCentered?: boolean
   contentFullWidth?: boolean
   contentPadding?: number
}

export default function Modal({
   onClose,
   mainContent,
   title,
   extraSectionContent,
   rounded = true,
   headerPaddingY,
   fullHeight = false,
   contentCentered = false,
   contentFullWidth,
   contentPadding,
}: ModalProps) {
   return (
      <div
         className={`bg-white ${rounded ? "rounded-lg" : ""} overflow-hidden shadow-lg ${fullHeight ? "h-full" : ""}`}
      >
         <ModalHeader
            title={title}
            onCloseModal={onClose}
            paddingY={headerPaddingY}
         />
         <ModalBody
            extraSectionContent={extraSectionContent}
            fullHeight={fullHeight}
            contentCentered={contentCentered}
            contentFullWidth={contentFullWidth}
            contentPadding={contentPadding}
         >
            {mainContent}
         </ModalBody>
      </div>
   )
}
