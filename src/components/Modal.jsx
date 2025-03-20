import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';
import Button from './Button';

export default forwardRef(function Modal({ children, label, onClose }, ref) {
  const dialog = useRef();
  //To expose a function that can be called from the parent component to close or open the modal we have to use the useImperativeHandle hook. You also need to know that to use the useImperativeHandle hook, you have to use ref forwarding. This is why we are using the forwardRef function to create the Modal component.
  useImperativeHandle(ref, () => ({
    //on this dialog element, we want to reach to the showModal and hideModal functions so we need to use useRef to get a reference to the dialog element.
    open() {
      dialog.current.showModal();
    },
  }));

  return createPortal(
    <dialog ref={dialog} className='backdrop:bg-stone-900/90 p-4 rounded-md shadow-md '>
      {children}
      <form method="dialog" className='mt-4 text-right'>
        <Button>{label}</Button>
      </form>
    </dialog>,
    document.getElementById('modal-root')
  );
});
