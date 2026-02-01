import { Toast, ToastContainer } from "react-bootstrap";

export default function ErrorToast({ show, message, onClose }) {
  return (
    <ToastContainer position="top-end" className="p-3">
      <Toast bg="danger" show={show} onClose={onClose} delay={3000} autohide>
        <Toast.Header>
          <strong className="me-auto">Firebase Error</strong>
        </Toast.Header>
        <Toast.Body className="text-white">
          {message}
        </Toast.Body>
      </Toast>
    </ToastContainer>
  );
}
