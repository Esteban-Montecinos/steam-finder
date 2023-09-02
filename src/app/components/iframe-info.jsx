'use client'
import { Modal, ModalBody, ModalContent, ModalHeader, useDisclosure } from '@nextui-org/react'

export default function IframeInfo({ title, titleModal,summary}) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <><p
    onClick={onOpen}
    className="text-xs underline cursor-pointer text-neutral-50 hover:text-lime-500"
  >
    {title}
  </p>
  <Modal size="xl" isOpen={isOpen} onOpenChange={onOpenChange}>
    <ModalContent>
      {
        <>
          <ModalHeader className="flex flex-col gap-1">
            {titleModal}
          </ModalHeader>
          <ModalBody>
            <iframe
              allowtransparency="true"
              className="h-full"
              srcDoc={`
<!doctype html>
<html>
  <head>
      <meta charset="UTF-8">
      <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body class="bg-[#18181b] text-neutral-300">
        

      ${summary}
        
  </body>
</html>
`}
              frameborder="0"
            ></iframe>
          </ModalBody>
        </>
      }
    </ModalContent>
  </Modal></>
  )
}
