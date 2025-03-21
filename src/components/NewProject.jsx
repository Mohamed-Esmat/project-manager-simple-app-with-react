import { useRef } from 'react';
import Input from './Input';
import Modal from './Modal';

export default function NewProject({ onAddProject, onCancelProject }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const modal = useRef();

  function handleSave() {
    const newProject = {
      title: title.current.value,
      description: description.current.value,
      dueDate: dueDate.current.value,
    };

    //validate the new project
    if (
      newProject.title.trim() === '' ||
      newProject.description.trim() === '' ||
      newProject.dueDate.trim() === ''
    ) {
      //show error modal
      modal.current.open();
      return;
    }
    //call the onAddProject function with the new project
    onAddProject(newProject);
  }

  return (
    <>
      <Modal ref={modal} label="Close">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Oops ... looks like you forgot to enter a value.
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you provide a valid value for every input field.
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className=" flex items-center justify-end gap-4 my-4">
          <li>
            <button
              onClick={onCancelProject}
              className="text-stone-800 hover:text-stone-950"
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={title} label="Title" />
          <Input ref={description} label="Description" isTextarea />
          <Input type="date" ref={dueDate} label="Due Date" />
        </div>
      </div>
    </>
  );
}
