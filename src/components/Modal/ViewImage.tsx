import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent maxW="900px" maxH="600px">
        <ModalBody w="100%" h="100%" my="0" py="0" paddingInline="0">
          <Image w="100%" h="100%" src={imgUrl} alt="" />
        </ModalBody>

        <ModalFooter bg="pGray.800" justifyContent="flex-start">
          <Link color="gray.50" href={imgUrl}>
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
